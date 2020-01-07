import hat from 'hat';
import models from '../models/index';

const RecipeIngredients = models.RecipeIngredients;

const list = async (req, res, next) => {
  const result: Object = await RecipeIngredients.findAll({
   include: [
     models.Ingredients
    ]
  });
  if(result)
   res.status(200).send(result);
  await next;
}

const get = async (req, res, next) => {
 const {id}:{id:string} = req.params;
 const result: Object = await RecipeIngredients.findOne({id},
  {include:[
   models.Ingredients
  ]});
  if(result)
   res.status(200).send(result);

   res.status(400).send(`No recipeIngredients ${id} was found`);

   await next;
  
}

const create = async (req, res, next) => {
 const {
   recipeId,
   ingredientId,
   amount
  }:{
   recipeId:?string,
   ingredientId:?string,
   amount:?string
  } = req.body;

  const recipeIngredientsId = hat();
  await RecipeIngredients.create({
   id:recipeIngredientsId,
   recipeId,
   ingredientId,
   amount
  });
   res.status(201).send(`RecipeIngredients ${id} was created`);

  await next;
}

const del = async (req, res, next) => {
 const {id}:{id:string} = req.params;
 const result = await RecipeIngredients.findOne({where:{id}});
  if(result){
    await RecipeIngredients.destroy({where:{id}});
    res.status(200).send(`The recipeIngredients ${id} was deleted`);
  }
  res.status(400).send(`RecipeIngredients ${id} not found`);
  await next;
}

const update = async (req, res, next) => {
 const {id}:{id:string} = req.params;
 const updateData: {
   recipeId:?string,
   ingredientId:?string,
   amount:?string
  } = Object.assign({}, req.body);

 const result = await RecipeIngredients.findOne({where:{id}});
  if(result){
    await RecipeIngredients.update(updateData, {where:{id}});
    res.status(202).send(`The reciepIngredient ${id} was updated`);
  }
  res.status(404).send(`RecipeIngredient ${id} not found.`);
  await next;
}

export default {
 list,
 get,
 create,
 del,
 update
}