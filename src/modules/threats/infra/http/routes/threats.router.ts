import { Router } from 'express';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensuseAuthenticated';
import ThreatsController from '../controllers/ThreatsController';

const threatsRouter = Router();
const threatsController = new ThreatsController();

threatsRouter.use(ensureAuthenticated);

threatsRouter.get('/', threatsController.index);
threatsRouter.post('/', threatsController.create);

export default threatsRouter;
