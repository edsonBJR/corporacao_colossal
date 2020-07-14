import pool from '../config/pg-config';
import QueryExecutor from '../config/queries';
import * as FeriadosMoveis from '../config/utils';
import { NotFoundError } from '../errors/errors';

export default class FeriadosServices {

    async buscarFeriado({ ibge, ano, mes, dia }) {
        const connection = await pool.connect();
        const qe = new QueryExecutor(connection);

        // Busca feriados móveis
        for (const feriadoMovel in FeriadosMoveis.feriadosMoveis) {
            const feriadoData = FeriadosMoveis.feriadosMoveis[feriadoMovel].func(ano);
            if (feriadoData.mes === parseInt(mes, 10) &&
                feriadoData.dia === parseInt(dia, 10)) {
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

        if (result.length) {
            return await atualizarFeriado({ ibge, mes, dia, nome });
        }
        return await this.cadastrarFeriado({ ibge, mes, dia, nome });
    }
}