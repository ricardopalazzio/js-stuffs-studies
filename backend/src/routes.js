
const  express  = require('express');

const connection   = require('./database/connection');
const OngController  = require('./controlers/OngController');
const IncidentController  = require('./controlers/IncidentController');
const ProfileController  = require('./controlers/ProfileController');
const SessionController  = require('./controlers/Sessioncontroller');
const routes = express.Router();


routes.post('/session' , SessionController.create);

routes.get('/ongs' , OngController.index);
routes.post('/ongs' , OngController.create);

routes.get('/incidents' , IncidentController.index);
routes.post('/incidents' , IncidentController.create);
routes.delete('/incidents/:id' , IncidentController.delete);

routes.get('/profile' , ProfileController.index);
module.exports = routes;