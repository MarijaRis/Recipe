import { Router } from 'express'
import actions from './actions';

const ingredientsRouter = Router();

ingredientsRouter.get('/ingredients', actions.list );
ingredientsRouter.get('/ingredients/:id', actions.get);
ingredientsRouter.post('/ingredients', actions.create);
ingredientsRouter.put('/ingredients/:id', actions.update);
ingredientsRouter.delete('/ingredients/:id', actions.del);

export default ingredientsRouter;