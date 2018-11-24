
const sequelize = require('sequelize');
const connection = require('../conection');

const Questions = connection.define('Question', {
    ID: {
        type: sequelize.INTEGER,
        field: 'ID',
        autoIncrement: true,
        primaryKey: true
    },
    Question: {
        type: sequelize.STRING,
        field: 'Question'
    }
},
    {
        freezeTableName: true,
        operatorsAliases: false
    });

module.exports = Questions;
