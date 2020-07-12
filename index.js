const dotenv = require('dotenv');

const envTypes = {
    production: '.prd',
    development: '.local',
};

const envVar = envTypes[process.env.NODE_ENV] || '';
dotenv.config({ path: `./.env${envVar}` });

if (process.env.NODE_ENV === 'production') {
    require('./bin/server');
} else {
    require('./src/server')
}