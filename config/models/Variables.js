
const sequelize = require('sequelize');
const connection = require('../conection');
const Factor = require('./Factor');

const Variables = connection.define('Variables', {
    ID: {
        type: sequelize.INTEGER,
        field: 'ID',
        autoIncrement: true,
        primaryKey: true
    },
    Name: {
        type: sequelize.STRING,
        field: 'Name'
    }, 
    Definition: {
        type: sequelize.STRING,
        field: 'Definition'
    },
},
    {
        freezeTableName: true,
        operatorsAliases: false
    });
Variables.belongsTo(Factor, { foreignKey: 'Factor_ID', targetKey: 'ID' })
module.exports = Variables;
