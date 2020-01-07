import { Router } from 'express';
import actions from './actions';

const recipeRouter = Router();

recipeRouter.get('/recipes', actions.list);
recipeRouter.get('/recipes/:id', actions.get);
recipeRouter.post('/recipes/', actions.create);
recipeRouter.put('/recipes/:id', actions.update);
recipeRouter.delete('/recipes/:id', actions.del);

export default recipeRouter;