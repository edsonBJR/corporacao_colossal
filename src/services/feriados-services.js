import QueryExecutor from '../config/queries';
import * as FeriadosMoveis from '../config/utils';
import { NotFoundError, ForbiddenError } from '../errors/errors';

export default class FeriadosServices {

    constructor(connection) {
        this.connection = connection;
    }

    async buscarFeriado({ ibge, ano, mes, dia }) {
        const qe = new QueryExecutor(this.connection);

        // Busca feriados móveis
        for (const feriadoMovel in FeriadosMoveis.feriadosMoveis) {
            const feriadoData = FeriadosMoveis.feriadosMoveis[feriadoMovel].func(ano);
            if (feriadoData.mes === parseInt(mes, 10) &&
                feriadoData.dia === parseInt(dia, 10)) {

                const result = await qe.getFeriado({ ibge, chaveFeriado: feriadoMovel });

                if (result.length) {
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

        if (result.length) {
            return result[0];
        }

        throw new NotFoundError('Feriado não encontrado!');
    }

    async cadastrarFeriado({ ibge, mes, dia, nome }) {
        const qe = new QueryExecutor(this.connection);

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
            return;
        }
        await qe.cadastrarFeriado({ ibge, mes, dia, nome, abrangencia });
        return;
    }

    async deletarFeriado({ ibge, mes, dia }) {
        const qe = new QueryExecutor(this.connection);

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
                return;
            }
        }

        throw new ForbiddenError('Você está tentando remover um feriado de abrangência diferente.');

    }

    async cadastrarFeriadoMovel({ ibge, chaveFeriado }) {
        const qe = new QueryExecutor(this.connection);

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
            return;
        }

        await qe.cadastrarFeriadoMovel({ ibge, chaveFeriado, abrangencia });
        return;
    }

    async deletarFeriadoMovel({ ibge, chaveFeriado }) {
        const qe = new QueryExecutor(this.connection);

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
                return;
            }
        }

        throw new ForbiddenError('Você está tentando remover um feriado móvel de abrangência diferente.');
    }
}