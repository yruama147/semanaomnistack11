const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json())
app.use(routes);

app.listen(3333);




/**
 * rota/recurso
 * 
 * GET : buscar/listar uma inforaçao do back end
 * post: criar uma informaçao no back end
 * put: alterar uma informaçao no back end
 * delete: deletar uma informaçao no back end
 * 
 */

/**
 * tipos de requisiçoes
 * 
 * query paramns; paramentros nomeados enviados na roda apos "?" (filtros paginaçao)
 * route paramns: parametros utilizados para identificar recursos
 * request body: corpo da requisiçao, utilizado para criar ou 
 * 
 */

