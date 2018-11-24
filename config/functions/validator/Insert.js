const Joi = require('joi');

const InsertAnswers_to_question = {
    Answer: Joi.string().required(),
    Question_ID: Joi.number().integer().required(),
}
const InsertContact = {
    Position: Joi.string().required(),
    Name: Joi.string().required(),
    Telephone: Joi.string().required(),
    Mail: Joi.string().email().required(),
}
const InsertEnterprise_evaluation = {
    Sector_ID: Joi.number().integer().required(),
    Size_ID: Joi.number().integer().required(),
    Contact_Name: Joi.string().required(),
    Enterprise_Name: Joi.string().required(),
    Position: Joi.string().required(),
    Expert: Joi.number().integer().required(),
    Mail: Joi.string().email().required(),
    Address: Joi.string().required(),
    City: Joi.string().required(),
    Commune: Joi.string().required(),
}

const InsertEnterprise_selected = {
    Name: Joi.string().required(),
    Enterprise_Stored_ID: Joi.number().integer().required(),

}
const InsertEnterprise_stored = {
    Name: Joi.string().required(),
    Alias: Joi.string().required(),
    Web: Joi.string().required(),
    SubSector_ID: Joi.number().integer().required(),
    Contact_ID: Joi.number().integer().required()
}

const InsertFactor = {
    Name: Joi.string().required(),

}
const InsertLink = {
    Enterprise_Evaluation_ID: Joi.number().integer().required(),
    Token: Joi.string().required(),
    Rand: Joi.string().required(),
    Url: Joi.string().required(),
}
const InsertVariables = {
    Name: Joi.string().required(),
    Definition: Joi.string().required(),
}
const InsertVariablesSelected = {
    Variable_1: Joi.number().integer().required(),
    Variable_2: Joi.number().integer().required(),
    Variable_3: Joi.number().integer().required(),
    Variable_4: Joi.number().integer().required(),
    Variable_5: Joi.number().integer().required(),
    Variable_6: Joi.number().integer().required(),
    Variable_7: Joi.number().integer().required(),
    Variable_8: Joi.number().integer().required(),
    Variable_9: Joi.number().integer().required(),
    Variable_10: Joi.number().integer().required(),
    Variable_11: Joi.number().integer().required(),
    Variable_12: Joi.number().integer().required(),
    Variable_13: Joi.number().integer().required(),
    Variable_14: Joi.number().integer().required(),
    Variable_15: Joi.number().integer().required(),
    Variable_16: Joi.number().integer().required(),
    Variable_17: Joi.number().integer().required(),
    Answer_1: Joi.number().integer().required(),
    Answer_2: Joi.number().integer().required(),
    Answer_3: Joi.number().integer().required(),
    Answer_4: Joi.number().integer().required(),
    Answer_5: Joi.number().integer().required(),
    Answer_6: Joi.number().integer().required(),
    Answer_7: Joi.number().integer().required(),
    Answer_8: Joi.number().integer().required(),
    Answer_9: Joi.number().integer().required(),
    Answer_10: Joi.number().integer().required(),
    Answer_11: Joi.number().integer().required(),
    Answer_12: Joi.number().integer().required(),
    Answer_13: Joi.number().integer().required(),
    Answer_14: Joi.number().integer().required(),
    Answer_15: Joi.number().integer().required(),
    Answer_16: Joi.number().integer().required(),
    Answer_17: Joi.number().integer().required()
}
const InsertSurveyed = {
    Type: Joi.string().required(),
}

const InsertRelationship = {
    Mail_Surveyed_ID: Joi.number().integer().required(),
    Enterprise_Selected_ID: Joi.number().integer().required(),
    Variables_Selected_ID: Joi.number().integer().required(),
    Answer_To_Question_ID: Joi.number().integer().required()
}

const InsertSector = {
    Name: Joi.string().required(),
}

const InsertSubSector = {
    Name: Joi.string().required(),
    Sector_ID: Joi.number().integer().required(),

}
const InsertMail_surveyed = {
    Mail: Joi.string().email().required(),
    Enterprise_Evaluation_ID: Joi.number().integer().required(),
    Surveyed_ID: Joi.number().integer().required()
}

const InsertNatural_person={
    Sector_ID: Joi.number().integer().required(),
    Name: Joi.string().required(),
    Position: Joi.string().required()
}
const InsertRelationShip_person={
    Enterprise_Selected_ID: Joi.number().integer().required(),
    Variables_Selected_ID: Joi.number().integer().required(),
    Answer_To_Question_ID: Joi.number().integer().required()
}

module.exports = {
    InsertLink,
    InsertSector,
    InsertSubSector,
    InsertVariables,
    InsertVariablesSelected,
    InsertSurveyed,
    InsertRelationship,
    InsertMail_surveyed,
    InsertFactor,
    InsertEnterprise_stored,
    InsertEnterprise_selected,
    InsertEnterprise_evaluation,
    InsertContact,
    InsertAnswers_to_question,
    InsertNatural_person,
    InsertRelationShip_person
};