const Sequelize = require('sequelize');

const connection = new Sequelize(
    'api_filmes_bd',
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);

module.exports = connection;