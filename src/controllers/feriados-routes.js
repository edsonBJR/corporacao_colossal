import express from 'express';
import pool from '../config/pg-config';
import { NotFoundError, ForbiddenError } from '../errors/errors';
import FeriadosServices from '../services/feriados-services';

const router = express.Router();

router.get('/:ibge/:ano-:mes-:dia', async(req, res) => {
    const connection = await pool.connect();
    try {
        const { ibge, ano, mes, dia } = req.params;
        const services = new FeriadosServices(connection);
        const result = await services.buscarFeriado({ ibge, ano, mes, dia });
        connection.release();
        res.status(200).json({ name: result.nome });
    } catch (err) {
        if (connection) {
            connection.release();
        }
        console.log(err);
        if (err instanceof NotFoundError) {
            return res.status(404).send();
        }
        return res.status(500).send();
    }
});

router.put('/:ibge/:chave', async(req, res) => {
    const connection = await pool.connect();
    try {
        const { ibge, chave } = req.params;
        const { name: nome } = req.body;
        const services = new FeriadosServices(connection);

        // Verifica se é mes-dia
        if (!chave.replace(/(-|[0-9])/ig, '').length) {
            const mesDia = chave.split('-');
            await services.cadastrarFeriado({ ibge, nome, mes: mesDia[0], dia: mesDia[1] });
            connection.release();
        } else {
            // Então é chaveFeriado
            await services.cadastrarFeriadoMovel({ ibge, chaveFeriado: chave });
            connection.release();
        }

        res.status(200).send();
    } catch (err) {
        if (connection) {
            connection.release();
        }
        console.log(err);
        res.status(500).send();
    }
});

router.delete('/:ibge/:chave', async(req, res) => {
    const connection = await pool.connect();
    try {
        const { ibge, chave } = req.params;
        const services = new FeriadosServices(connection);

        // Verifica se é mes-dia
        if (!chave.replace(/(-|[0-9])/ig, '').length) {
            const mesDia = chave.split('-');
            await services.deletarFeriado({ ibge, mes: mesDia[0], dia: mesDia[1] });
            connection.release();
        } else {
            await services.deletarFeriadoMovel({ ibge, chaveFeriado: chave });
            connection.release();
        }

        res.status(204).send();
    } catch (err) {
        if (connection) {
            connection.release();
        }
        console.error(err);
        if (err instanceof NotFoundError) {
            return res.status(404).send();
        }
        if (err instanceof ForbiddenError) {
            return res.status(403).send();
        }
        res.status(500).send();
    }
});

export default router;