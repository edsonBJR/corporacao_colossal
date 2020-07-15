import bodyParser from 'body-parser';
import express from 'express';
import feriadosRouter from './controllers/feriados-routes';

const server = express();

server.disable('x-powered-by');
server.use(bodyParser.json());

server.use('/feriados', feriadosRouter);

server.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send(err.message);
})

server.listen(+process.env.PORT || 5000, function() {
    console.log("Server is running ...")
});

export default server;