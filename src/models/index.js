import Sequelize from 'sequelize';
import connection from '../db/sequelize';

const models = {
    Recipe: connection.import('../recipes/model'),
    Ingredients: connection.import('../ingredients/model'),
    RecipeIngredients: connection.import('../recipeIngredients/model')
}
Object.keys(models).forEach((modelName) => {
    if ('associate' in models[modelName]) {
      models[modelName].associate(models);
    }
  });

  models.Recipe.hasOne(models.RecipeIngredients);
  models.RecipeIngredients.belongsTo(models.Recipe);
  models.RecipeIngredients.hasMany(models.Ingredients);
  models.Ingredients.belongsTo(models.RecipeIngredients);
  
models.connection = connection;
models.Sequelize = Sequelize;

export default models;