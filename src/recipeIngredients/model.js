export default (sequelize, DataType) => {
	const RecipeIngredients = sequelize.define(
		'recipeIngredients', {
			id: {
				type: DataType.STRING,
				primaryKey: true
			},
			recipeId: {
				type: DataType.STRING
			},
			ingredientId: {
				type: DataType.STRING
			},
			amount: {
				type: DataType.STRING
			}
		}
	);
	return RecipeIngredients;
}