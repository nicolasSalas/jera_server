
const sequelize = require('sequelize');
const connection = require('../conection');
const Enterprise = require('./Enterprise_evaluation');
const Surveyed = require('./Surveyed');

const Mail_Surveyed = connection.define('Mail_surveyed', {
    ID: {
        type: sequelize.INTEGER,
        field: 'ID',
        autoIncrement: true,
        primaryKey: true
    },
    Mail: {
        type: sequelize.STRING,
        field: 'Mail'
    },
    status: {
        type: sequelize.TINYINT,
        field: 'status'
    }
},
    {
        freezeTableName: true,
        operatorsAliases: false
    });
Mail_Surveyed.belongsTo(Enterprise, { as:'Enterprise_Evaluation_ID_as', foreignKey: 'Enterprise_Evaluation_ID', targetKey: 'ID' });
Mail_Surveyed.belongsTo(Surveyed, { as: 'Surveyed_ID_as', foreignKey: 'Surveyed_ID', targetKey: 'ID' });
module.exports = Mail_Surveyed;
