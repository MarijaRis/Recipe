import {Router} from 'express';

import recipe from '../recipes/index';
import ingredients from '../ingredients/index';
import recipeIngredients from '../recipeIngredients';

const indexRouter = Router();

indexRouter.use(recipe.route);
indexRouter.use(ingredients.route);
indexRouter.use(recipeIngredients.route);


export default indexRouter;