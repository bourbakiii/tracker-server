const { Sequelize } = require('sequelize');

const $SequelizeInstance = new Sequelize('tracker', 'postgres', 'root', {
    host: 'localhost',
    dialect: 'postgres'
});
async function connectToDatabase() {
    try {
        await $SequelizeInstance.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};



module.exports = $SequelizeInstance;
module.exports = connectToDatabase;
