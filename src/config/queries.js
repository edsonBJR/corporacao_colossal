import { Client } from 'pg';

export default class QueryExecutor {
    /**
     * @param {Client} connection
     */
    constructor(connection) {
        this.connection = connection;
    }

    createQueryBuscarFeriado(data) {
        return `select * from feriados 
            where mes_dia = '${data}'`;
    }

    async getFeriado(data) {
        const query = this.createQueryBuscarFeriado(data);
        const result = await (await this.connection.query(query)).rows;
        return result;
    }
}