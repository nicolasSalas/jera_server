
const sequelize = require('sequelize');
const connection = require('../conection');
const Sector = require('./Sector');

const Natural_person = connection.define('Natural_person', {
    ID: {
        type: sequelize.INTEGER,
        field: 'ID',
        autoIncrement: true,
        primaryKey: true
    },
    Name: {
        type: sequelize.STRING,
        field: 'Contact_Name'
    },
    Position: {
        type: sequelize.STRING,
        field: 'Position'
    },
   
}, {
        freezeTableName: true,
        operatorsAliases: false
    });

Natural_person.belongsTo(Sector, { as: 'Sector_ID_as', foreignKey: 'Sector_ID' });

module.exports = Natural_person;
