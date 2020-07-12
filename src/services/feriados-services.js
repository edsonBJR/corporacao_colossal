import pool from '../config/pg-config';
import QueryExecutor from '../config/queries';

export default class FeriadosServices {

    async buscarFeriado({ ibge, ano, mes, dia }) {
        const connection = await pool.connect();
        const qe = new QueryExecutor(connection);

        const result = await qe.getFeriado({ ibge, ano, mes, dia });
        return result;
    }

}