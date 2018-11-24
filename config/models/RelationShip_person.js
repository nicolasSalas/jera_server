
const sequelize = require('sequelize');
const connection = require('../conection');
const Enterprise_selected = require('./Enterprise_selected');
const Answer_to_question = require('./Answers_to_question');
const Variables_selected = require('./Variables_selected');

const RelationShip_person = connection.define('RelationShip_person', {
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

RelationShip_person.belongsTo(Enterprise_selected, { as:'Enterprise_Selected_ID_as', foreignKey: 'Enterprise_Selected_ID'});
RelationShip_person.belongsTo(Variables_selected, { as:'Variables_Selected_ID_as', foreignKey: 'Variables_Selected_ID'});
RelationShip_person.belongsTo(Answer_to_question, { as:'Answer_To_Question_ID_as', foreignKey: 'Answer_To_Question_ID'});

module.exports = RelationShip_person;
