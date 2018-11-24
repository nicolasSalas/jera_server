
const sequelize = require('sequelize');
const connection = require('../conection');
const Mail_surveyed = require('./Surveyed');
const Enterprise_selected = require('./Enterprise_selected');
const Answer_to_question = require('./Answers_to_question');
const Variables_selected = require('./Variables_selected');

const Relationship = connection.define('Relationship', {
    ID: {
        type: sequelize.INTEGER,
        field: 'ID',
        autoIncrement: true,
        primaryKey: true
    }
},
    {
        freezeTableName: true,
        operatorsAliases: false
    });

Relationship.belongsTo(Mail_surveyed, { as:'Mail_Surveyed_ID_as', foreignKey: 'Mail_Surveyed_ID'});
Relationship.belongsTo(Enterprise_selected, { as:'Enterprise_Selected_ID_as', foreignKey: 'Enterprise_Selected_ID'});
Relationship.belongsTo(Variables_selected, { as:'Variables_Selected_ID_as', foreignKey: 'Variables_Selected_ID'});
Relationship.belongsTo(Answer_to_question, { as:'Answer_To_Question_ID_as', foreignKey: 'Answer_To_Question_ID'});

module.exports = Relationship;
