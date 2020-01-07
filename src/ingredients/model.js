export default (sequelize, DataType) => {
 const Ingredients = sequelize.define(
	 'ingredients', {
		 id: {
			type: DataType.STRING,
			primaryKey: true
		 },
			ingredientName: {
			 type: DataType.STRING
			}
		}
	);
	return Ingredients;
}