import hat from 'hat';
import models from '../models/index';

const Recipe = models.Recipe;

const list = async (req, res, next) => {
  const result: Object = await Recipe.findAll({
    include: [
      models.RecipeIngredients
    ]
  });
  res.status(200).send(result);
  await next;
}

const get = async (req, res, next) => {
  const {id}:{id:string} = req.params;
  const result: Object = await Recipe.findOne({
    inlculde: [
      models.RecipeIngredients
    ]
  },
  {where: {id},
 $or: [{ingredientName: ["Flour", "Milk", "Oil", "Salt", "Sugar", "Eggs", "Tomatoes", "Peppers", "Cheese", "Potatoes", "Meat"]},
 ],
//  $and: {amount}
 });
  if(result){
    res.status(200).send(result);
    res.status(400).send(`No recipe ${id} was found`);

    await next;
  }
}

const create = async (req, res, next) => {
	const {
    recipeName,
    recipeSource,
    listOfIngredients,
    instructions,
    preparationTime
  }:{
    recipeName:?string,
    recipeSource:?string,
    listOfIngredients:?string,
    instructions:?string,
    preparationTime:?string 
  } = req.body;

  const recipeId = hat();
  await Recipe.create({
    id:recipeId,
    recipeName,
    recipeSource,
    listOfIngredients,
    instructions,
    preparationTime
  });
  res.status(201).send(`${recipeName} recipe has been created`);
  await next;
}

const del = async (req, res, next) => {
  const {id}:{id:string} = req.params;
  const result = await Recipe.findOne({where:{id}});
  if(result){
    await Recipe.destroy({where:{id}});
    res.status(200).send(`The recipe ${id} was deleted`);
  }
  res.status(400).send(`Recipe ${id} not found`);
  await next;
}

const update = async (req, res, next) => {
  const {id}:{id:string} = req.params;
  const updateData: {
    recipeName:?string,
    recipeSource:?string,
    listOfIngredients:?string,
    instructions:?string,
    preparationTime:?string 
  } = Object.assign({}, req.body);

  const result = await Recipe.findOne({where:{id}});
  if(result){
    await Recipe.update(updateData, {where:{id}});
    res.send(`The recipe ${id} has been updated`).status(202);
  }
  res.status(404).send(`Recipe ${id} not found.`);
  await next;
}

export default {
  list,
  get,
  create,
  del,
  update
}