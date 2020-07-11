import { Pool } from 'pg';

const pool = new Pool({
    user: 'edsonjr',
    host: 'localhost',
    database: 'corporacao_colossal',
    password: '123r1xx@',
    port: 5432,
});

export default pool;