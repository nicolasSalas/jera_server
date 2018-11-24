
const sequelize = require('sequelize');
const connection = require('../conection');
const Questions = require('./Questions');

const Answer_to_question = connection.define('Answer_to_question', {
    ID: {
        type: sequelize.INTEGER,
        field: 'ID',
        autoIncrement: true,
        primaryKey: true
    },
    Answer: {
        type: sequelize.STRING,
        field: 'Answer'

    },
    createdAt: {
        type: sequelize.DATE,
        field: 'createdAt'

    },
    updatedAt: {
        type: sequelize.DATE,
        field: 'updatedAt'

    },
},
    {
        freezeTableName: true,
        operatorsAliases: false
    });
Answer_to_question.belongsTo(Questions, { as: 'Question_ID_as', foreignKey: 'Question_ID' });

module.exports = Answer_to_question;
