import pool from '../config/pg-config';
import QueryExecutor from '../config/queries';

export default class FeriadosServices {

    async buscarFeriado(data) {
        const connection = await pool.connect();
        const qe = new QueryExecutor(connection);

        const result = await qe.getFeriado(data);
        return result;
    }

}