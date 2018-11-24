
const sequelize = require('sequelize');
const connection = require('../conection');
const Sector = require('./Sector');

const Subsector = connection.define('Subsector', {
    ID: {
        type: sequelize.INTEGER,
        field: 'ID',
        autoIncrement: true,
        primaryKey: true
    },
    Name: {
        type: sequelize.STRING,
        field: 'Name'
    }
},
    {
        freezeTableName: true,
        operatorsAliases: false
    });

Subsector.belongsTo(Sector, { foreignKey: 'Sector_ID', targetKey: 'ID' });

module.exports = Subsector;
