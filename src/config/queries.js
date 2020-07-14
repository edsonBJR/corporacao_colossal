import { Client } from 'pg';

export default class QueryExecutor {
    /**
     * @param {Client} connection
     */
    constructor(connection) {
        this.connection = connection;
    }

    /**
     * Traz feriados nacionais, sem código IBGE,
     * Traz feriados estaduais, com código IBGE XX,
     * Traz feriados municipais, com código IBGE XXYYYYY,
     */
    createQueryBuscarFeriado({ ibge, mes, dia }) {
        const ibgeEstado = ibge.substr(0, 2);

        return `select * from feriados 
            where 
            (
                codigo_ibge = ''
                or codigo_ibge = '${ibge}'
                or codigo_ibge = '${ibgeEstado}'
            )
            and mes_dia = '${mes}-${dia}'
            order by abrangencia asc;`;
    }

    async getFeriado({ ibge, mes, dia }) {
        const query = this.createQueryBuscarFeriado({ ibge, mes, dia });
        const result = (await this.connection.query(query)).rows;
        return result;
    }

    createQueryCadastrarFeriado({ ibge, mes, dia, nome }) {
        return `insert into feriados 
            ('codigo_ibge', 'nome', 'mes_dia') 
            values ('${ibge}','${nome}','${mes}-${dia}')`;
    }

    async cadastrarFeriado({ ibge, mes, dia }) {
        const query = this.createQueryCadastrarFeriado({ ibge, mes, dia });
        const result = await this.connection.query(query);
        return result;
    }

    createQueryAtualizarFeriado({ ibge, mes, dia, nome }) {
        return `update feriados 
            set 'nome' = '${nome}'
            where codigo_ibge = '${ibge}' and mes_dia = '${mes}-${dia}';`
    }

    async atualizarFeriado({ ibge, mes, dia }) {
        const query = this.createQueryAtualizarFeriado({ ibge, mes, dia });
        const result = await this.connection.query(query);
        return result;
    }

    createQueryDeletarFeriado({ ibge, mes, dia }) {
        return `delete from feriados 
            where codigo_ibge = '${ibge}' and mes_dia = '${mes}-${dia}';`
    }

    async deletarFeriado({ ibge, mes, dia }) {
        const query = this.createQueryDeletarFeriado({ ibge, mes, dia });
        const result = await this.connection.query(query);
        return result;
    }

}