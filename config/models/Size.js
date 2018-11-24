
const sequelize = require('sequelize');
const connection = require('../conection');

const Size = connection.define('Size', {
    ID: {
        type: sequelize.INTEGER,
        field: 'ID',
        autoIncrement: true,
        primaryKey: true
    },
    Quantity: {
        type: sequelize.INTEGER,
        field: 'Quantity'
    }
},
    {
        freezeTableName: true,
        operatorsAliases: false
    });

module.exports = Size;
