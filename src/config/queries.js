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
    createQueryBuscarFeriado({ ibge, mes, dia, chaveFeriado }) {
        const ibgeEstado = ibge.substr(0, 2);

        let query = `select * from feriados 
            where 
            (
                codigo_ibge = ''
                or codigo_ibge = '${ibge}'
                or codigo_ibge = '${ibgeEstado}'
            )`;
        if (chaveFeriado) {
            query += ` and feriado_movel = '${chaveFeriado}'`;
        } else {
            query += ` and mes_dia = '${mes}-${dia}'`;
        }
        query += ` order by abrangencia asc;`;

        return query;
    }

    async getFeriado({ ibge, mes, dia, chaveFeriado }) {
        const query = this.createQueryBuscarFeriado({ ibge, mes, dia, chaveFeriado });
        const result = (await this.connection.query(query)).rows;
        return result;
    }

    createQueryCadastrarFeriado({ ibge, mes, dia, nome, abrangencia }) {
        return `
            insert into feriados
                (codigo_ibge, nome, mes_dia, abrangencia)
            values('${ibge}', '${nome}', '${mes}-${dia}', '${abrangencia}')
            `;
    }

    async cadastrarFeriado({ ibge, mes, dia, nome, abrangencia }) {
        const query = this.createQueryCadastrarFeriado({ ibge, mes, dia, nome, abrangencia });
        await this.connection.query(query);
    }

    createQueryAtualizarFeriado({ ibge, mes, dia, nome }) {
        return `
            update feriados
            set nome = '${nome}'
            where codigo_ibge = '${ibge}'
            and mes_dia = '${mes}-${dia}';
            `
    }

    async atualizarFeriado({ ibge, mes, dia, nome }) {
        const query = this.createQueryAtualizarFeriado({ ibge, mes, dia, nome });
        await this.connection.query(query);
    }

    createQueryDeletarFeriado({ ibge, mes, dia }) {
        return `
            delete from feriados where codigo_ibge = '${ibge}'
            and mes_dia = '${mes}-${dia}';
            `;
    }

    async deletarFeriado({ ibge, mes, dia }) {
        const query = this.createQueryDeletarFeriado({ ibge, mes, dia });
        const result = await this.connection.query(query);
        return result;
    }

    createQueryCadastrarFeriadoMovel({ ibge, abrangencia, chaveFeriado }) {
        return `
            insert into feriados
                (codigo_ibge, abrangencia, feriado_movel)
            values('${ibge}', '${abrangencia}', '${chaveFeriado}')`;
    }

    async cadastrarFeriadoMovel({ ibge, abrangencia, chaveFeriado }) {
        const query = this.createQueryCadastrarFeriadoMovel({ ibge, abrangencia, chaveFeriado });
        await this.connection.query(query);
    }

    createQueryDeletarFeriadoMovel({ ibge, chaveFeriado }) {
        return `
            delete from feriados where codigo_ibge = '${ibge}'
            and feriado_movel = '${chaveFeriado}';
            `;
    }

    async deletarFeriadoMovel({ ibge, chaveFeriado }) {
        const query = this.createQueryDeletarFeriadoMovel({ ibge, chaveFeriado });
        const result = await this.connection.query(query);
        return result;
    }

}