export default (sequelize, DataType) =>{
 const Recipe = sequelize.define(
	'recipe', {
		id: {
		 type: DataType.STRING,
		 primaryKey: true
		},
		recipeName: {
		 type: DataType.STRING,
		 required: true
		},
		recipeSource: {
		 type: DataType.STRING
		},
		listOfIngredients: {
		 type: DataType.STRING
		},
		preparationTime: {
		 type: DataType.STRING,
		 required: true
		},
		instructions: {
		 type: DataType.STRING,
		 required: true	
		}
	});
	return Recipe;
}