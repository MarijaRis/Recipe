import hat from 'hat';

import models from '../models/index';

const Ingredients = models.Ingredients;

const list = async (req, res, next) => {
 const result: Array = await Ingredients.findAll();
 res.status(200).send(result);
 await next;
 }
	
const get = async (req, res, next) => {
 const {id}:{id:string} = req.params;
 const result: Object = await Ingredients.findOne({id});
 if(result){
	res.status(200).send(result);
	res.status(400).send(`No ingredient was found`);
	
	await next;
 }
}	

const create = async (req, res, next) => {
 const {
	 ingredientName
	}: {
	 ingredientName:?string
	} = req.body;

 const ingredientId = hat();
 await Ingredients.create({
	id:ingredientId,
	ingredientName
});
 res.status(201).send(`Ingredient ${id} has been created`);
 await next;
}

const del = async (req, res, next) => {
 const {id}:{id:string} = req.params;
 const result = await Ingredients.findOne({where: {id}});
 if(result){
	await Ingredients.destroy({where: {id}});
	res.status(200).send(`The ingredient ${id} was deleted`);
} 
 res.status(400).send(`Ingredient ${id} not found`);
 await next;
}

const update = async (req, res, next) => {
 const {id}:{id:string} = req.params;
 const updateData: {
	 ingredientName:?string
	} = Object.assign({}, req.body);
	
 const result = await Ingredients.findOne({where:{id}});
 if(result){
	await Ingredients.update(updateData, {where:{id}});
	res.status(202).send(`The ingredient ${id} has been updated`);
 }
	res.status(404).send(`Ingredient ${id} not found.`);
   await next;
}
  
export default {
 list,
 get,
 create,
 del,
 update
}