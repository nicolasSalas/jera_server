
const sequelize = require('sequelize');
const connection = require('../conection');
//const Enterprise = require('./Enterprise');

const Sector = connection.define('Sector', {
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
}, {
        freezeTableName: true,
        operatorsAliases: false
    });

//Sector.belongsTo(Enterprise);
module.exports = Sector;
