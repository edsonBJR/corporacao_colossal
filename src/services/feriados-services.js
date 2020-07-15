import pool from '../config/pg-config';
import QueryExecutor from '../config/queries';
import * as FeriadosMoveis from '../config/utils';
import { NotFoundError, ForbiddenError } from '../errors/errors';

export default class FeriadosServices {

    async buscarFeriado({ ibge, ano, mes, dia }) {
        const connection = await pool.connect();
        const qe = new QueryExecutor(connection);

        // Busca feriados móveis
        for (const feriadoMovel in FeriadosMoveis.feriadosMoveis) {
            const feriadoData = FeriadosMoveis.feriadosMoveis[feriadoMovel].func(ano);
            if (feriadoData.mes === parseInt(mes, 10) &&
                feriadoData.dia === parseInt(dia, 10)) {

                const result = await qe.getFeriado({ ibge, chaveFeriado: feriadoMovel });

                if (result.length) {
                    connection.release();
                    return {
                        codigo_ibge: result[0].codigo_ibge,
                        nome: feriadoData.name,
                        mes_dia: `${mes}-${dia}`
                    };
                }

                return {
                    codigo_ibge: '',
                    nome: feriadoData.name,
                    mes_dia: `${mes}-${dia}`
                };
            }
        }

        // Buscar feriados fixos
        const result = await qe.getFeriado({ ibge, mes, dia });
        connection.release();

        if (result.length) {
            return result[0];
        }

        throw new NotFoundError('Feriado não encontrado!');
    }

    async cadastrarFeriado({ ibge, mes, dia, nome }) {
        const connection = await pool.connect();
        const qe = new QueryExecutor(connection);

        const result = await qe.getFeriado({ ibge, mes, dia });

        let abrangencia = 'nacional';
        switch (ibge.length) {
            case 0:
                break;
            case 2:
                abrangencia = 'estadual';
                break;
            case 7:
                abrangencia = 'municipal';
                break;
            default:
                throw new Error('Código IBGE incorreto!');
        }

        if (result.length) {
            await qe.atualizarFeriado({ ibge, mes, dia, nome });
            connection.release();
            return;
        }
        await qe.cadastrarFeriado({ ibge, mes, dia, nome, abrangencia });
        connection.release();
        return;
    }

    async deletarFeriado({ ibge, mes, dia }) {
        const connection = await pool.connect();
        const qe = new QueryExecutor(connection);

        const result = await qe.getFeriado({ ibge, mes, dia });

        if (!result.length) {
            throw new NotFoundError('Feriado não encontrado!');
        }

        let abrangencia = null;
        switch (ibge.length) {
            case 2:
                abrangencia = 'estadual';
                break;
            case 7:
                abrangencia = 'municipal';
                break;
            default:
                throw new Error('Código IBGE incorreto!');
        }

        for (const r of result) {
            if (r.abrangencia == abrangencia) {
                await qe.deletarFeriado({ ibge, mes, dia });
                connection.release();
                return;
            }
        }

        throw new ForbiddenError('Você está tentando remover um feriado de abrangência diferente.');

    }

    async cadastrarFeriadoMovel({ ibge, chaveFeriado }) {
        const connection = await pool.connect();
        const qe = new QueryExecutor(connection);

        const result = await qe.getFeriado({ ibge, chaveFeriado });

        let abrangencia = 'nacional';
        switch (ibge.length) {
            case 0:
                break;
            case 2:
                abrangencia = 'estadual';
                break;
            case 7:
                abrangencia = 'municipal';
                break;
            default:
                throw new Error('Código IBGE incorreto!');
        }

        if (result.length) {
            connection.release();
            return;
        }

        await qe.cadastrarFeriadoMovel({ ibge, chaveFeriado, abrangencia });
        connection.release();
        return;
    }

    async deletarFeriadoMovel({ ibge, chaveFeriado }) {
        const connection = await pool.connect();
        const qe = new QueryExecutor(connection);

        const result = await qe.getFeriado({ ibge, chaveFeriado });

        if (!result.length) {
            throw new NotFoundError('Feriado não encontrado!');
        }

        let abrangencia = null;
        switch (ibge.length) {
            case 2:
                abrangencia = 'estadual';
                break;
            case 7:
                abrangencia = 'municipal';
                break;
            default:
                throw new Error('Código IBGE incorreto!');
        }

        for (const r of result) {
            if (r.abrangencia == abrangencia) {
                await qe.deletarFeriadoMovel({ ibge, chaveFeriado });
                connection.release();
                return;
            }
        }

        throw new ForbiddenError('Você está tentando remover um feriado móvel de abrangência diferente.');
    }
}