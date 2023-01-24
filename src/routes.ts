import { Router } from 'express';
const routes = Router();

import { SubjectController } from './controllers/SubjectController';

routes.post('/subject', new SubjectController().create);

export default routes;