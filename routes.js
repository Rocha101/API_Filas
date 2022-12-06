const express = require('express');

const routes = express.Router();

const Usuario = require('./controllers/usuarios.controllers');
// const Dados = require('./controllers/dados.controllers');

routes.get('/',Usuario.index);

// Rotas de Usuários
routes.post('/api/usuarios',Usuario.create);
routes.get('/api/usuarios.index',Usuario.index);
routes.get('/api/usuarios.details/:_id',Usuario.details);
routes.delete('/api/usuarios/:_id', Usuario.delete);
routes.put('/api/usuarios', Usuario.update);  
routes.post('/api/login', Usuario.login)

// Rotas de Dados
// routes.post('/api/dados',Dados.create);
// routes.get('/api/dados.index',Dados.index);
// routes.get('/api/dados.details/:_id',Dados.details);
// routes.delete('/api/dados/:_id', Dados.delete);
// routes.put('/api/dados', Dados.update); 

module.exports = routes;