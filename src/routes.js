import { Router } from 'express';

import UserController from './app/controllers/CotacaoController';

const routes = new Router();

routes.get('/acoes/:ticker', UserController.getAcoes);
routes.get('/fundos/:ticker', UserController.getFundos);

export default routes;