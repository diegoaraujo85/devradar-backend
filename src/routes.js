const { Router } = require("express");

const DevController = require("./controllers/DevController");
const SearchController = require("./controllers/SearchController");

const routes = Router();

routes.get("/devs", DevController.index);
routes.post("/devs", DevController.store);

routes.get("/search", SearchController.index);

module.exports = routes;

//Métodos HTTP: GET, POST, PUT, DELETE

//tipos de parametros
//query params: request.query (filtros, ordenação, paginação,...)
//route params: request.params (identificar um recurso na alteração ou remoção)
//body:

//MongoDB (Não-relacional)
//aqui vamos usar o mongo atlas (pesquisa no google), login: doasalah@gmail.com, senha 123mudarMongo
//omnistack : omnistack
