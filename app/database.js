const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.PG_URL, {
    host: 'localhost',
    dialect: 'postgres',
    logging: false,
});

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');

        await sequelize.sync({ force: false }); // Passer en true pour réinitialiser la base de données à chaque redémarrage du serveur en développement
        console.log('Database synchronized successfully.');
        
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

module.exports = { sequelize, connectDB };
