
const sequelize = require('sequelize');
const connection = require('../conection');
const Sector = require('./Sector');
const Size = require('./Size');

const Variables_Selected = connection.define('Variables_selected', {
    ID: {
        type: sequelize.INTEGER,
        field: 'ID',
        autoIncrement: true,
        primaryKey: true
    },
    Variable_1: {
        type: sequelize.INTEGER,
        field: 'Variable_1'
    },
    Variable_2: {
        type: sequelize.INTEGER,
        field: 'Variable_2'
    },
    Variable_3: {
        type: sequelize.INTEGER,
        field: 'Variable_3'
    },
    Variable_4: {
        type: sequelize.INTEGER,
        field: 'Variable_4'
    },
    Variable_5: {
        type: sequelize.INTEGER,
        field: 'Variable_5'
    },
    Variable_6: {
        type: sequelize.INTEGER,
        field: 'Variable_6'
    },
    Variable_7: {
        type: sequelize.INTEGER,
        field: 'Variable_7'
    },
    Variable_8: {
        type: sequelize.INTEGER,
        field: 'Variable_8'
    },
    Variable_9: {
        type: sequelize.INTEGER,
        field: 'Variable_9'
    },
    Variable_10: {
        type: sequelize.INTEGER,
        field: 'Variable_10'
    },
    Variable_11: {
        type: sequelize.INTEGER,
        field: 'Variable_11'
    },
    Variable_12: {
        type: sequelize.INTEGER,
        field: 'Variable_12'
    },
    Variable_13: {
        type: sequelize.INTEGER,
        field: 'Variable_13'
    },
    Variable_14: {
        type: sequelize.INTEGER,
        field: 'Variable_14'
    },
    Variable_15: {
        type: sequelize.INTEGER,
        field: 'Variable_15'
    },
    Variable_16: {
        type: sequelize.INTEGER,
        field: 'Variable_16'
    },
    Variable_17: {
        type: sequelize.INTEGER,
        field: 'Variable_17'
    },
    Answer_1: {
        type: sequelize.STRING,
        field: 'Answer_1'
    },
    Answer_2: {
        type: sequelize.STRING,
        field: 'Answer_2'
    },
    Answer_3: {
        type: sequelize.STRING,
        field: 'Answer_3'
    },
    Answer_4: {
        type: sequelize.STRING,
        field: 'Answer_4'
    },
    Answer_5: {
        type: sequelize.STRING,
        field: 'Answer_5'
    },
    Answer_6: {
        type: sequelize.STRING,
        field: 'Answer_6'
    },
    Answer_7: {
        type: sequelize.STRING,
        field: 'Answer_7'
    },
    Answer_8: {
        type: sequelize.STRING,
        field: 'Answer_8'
    },
    Answer_9: {
        type: sequelize.STRING,
        field: 'Answer_9'
    },
    Answer_10: {
        type: sequelize.STRING,
        field: 'Answer_10'
    },
    Answer_11: {
        type: sequelize.STRING,
        field: 'Answer_11'
    },
    Answer_12: {
        type: sequelize.STRING,
        field: 'Answer_12'
    },
    Answer_13: {
        type: sequelize.STRING,
        field: 'Answer_13'
    },
    Answer_14: {
        type: sequelize.STRING,
        field: 'Answer_14'
    },
    Answer_15: {
        type: sequelize.STRING,
        field: 'Answer_15'
    },
    Answer_16: {
        type: sequelize.STRING,
        field: 'Answer_16'
    },
    Answer_17: {
        type: sequelize.STRING,
        field: 'Answer_17'
    },
}, {
        freezeTableName: true,
        operatorsAliases: false
    });

module.exports = Variables_Selected;
