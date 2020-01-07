import Sequelize from 'sequelize';
import dbConfiq from '../../config/mysql.json';

const currentDb = dbConfiq[process.env.NODE_ENV || 'dev'];
const sequelize = new Sequelize(currentDb);

sequelize.sync({force: false});

export default sequelize;