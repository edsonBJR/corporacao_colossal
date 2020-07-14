import express from 'express';
import { NotFoundError, ForbiddenError } from '../errors/errors';
import FeriadosServices from '../services/feriados-services';

const router = express.Router();

router.get('/:ibge/:ano-:mes-:dia', async(req, res) => {
    try {
        const { ibge, ano, mes, dia } = req.params;
        const services = new FeriadosServices();
        const result = await services.buscarFeriado({ ibge, ano, mes, dia });
        res.status(200).json({ name: result.nome });
    } catch (err) {
        console.log(err);
        if (err instanceof NotFoundError) {
            return res.status(404).send();
        }
        return res.status(500).send();
    }

});

router.put('/:ibge/:mes-:dia', async(req, res) => {
    try {
        const { ibge, mes, dia } = req.params;
        const { nome } = req.body;
        const services = new FeriadosServices();
        await services.cadastrarFeriado({ ibge, nome, mes, dia });
        res.status(200).send();
    } catch (err) {
        res.status(500).send();
    }
});

router.delete('/:ibge/:mes-:dia', async(req, res) => {
    try {

        res.status(200).send();
    } catch (err) {
        if (err instanceof NotFoundError) {
            return res.status(404).send();
        }
        if (err instanceof ForbiddenError) {
            return res.status(403).send();
        }
        res.status(500).send();
    }
});


router.put('/:ibge/:chaveFeriado', async(req, res) => {
    try {

        res.status(200).send();
    } catch (err) {
        res.status(500).send();
    }
});

router.delete('/:ibge/:chaveFeriado', async(req, res) => {
    try {

        res.status(200).send();
    } catch (err) {
        res.status(500).send();
    }
});

export default router;