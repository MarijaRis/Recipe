import { Router } from 'express';
import actions from './actions';

const recipeIngredientsRouter = Router();

recipeIngredientsRouter.get('/recipeIngredients', actions.list);
recipeIngredientsRouter.get('/recipeIngredients/:id', actions.get);
recipeIngredientsRouter.post('/recipeIngredients', actions.create);
recipeIngredientsRouter.put('/recipeIngredients/:id', actions.update);
recipeIngredientsRouter.delete('/recipeIngredients/:id', actions.del);

export default recipeIngredientsRouter;