const express = require('express');
const sequelize = require('sequelize');
const router = express.Router();
const bodyParser = require('body-parser');
const Joi = require('joi');
const jwt = require('jsonwebtoken');
const urlencodedParser = bodyParser.urlencoded({extended: false})

const KEY = require('../../config/functions/token');
const { SECRET_TOKEN_CLIENT } = require('../../config');
const Variables_selected = require('../../config/models/Variables_selected'); //MODEL
const CRUD = require('../../config/functions/API'); // API
const {InsertVariablesSelected} = require(
    '../../config/functions/validator/Insert'
); // VALIDATOR

router.post('/InsertVariablesSelected', KEY.verifyToken,urlencodedParser, (req, res) => {

    if (!req.body || req.body.length === 0) {
        console.log('request body not found');
        return res.sendStatus(400);
    }
    jwt.verify(req.token, SECRET_TOKEN_CLIENT, (err, authData) => {
        if(err) {
          res.sendStatus(403);
        } else {
          let data = req.body;

    const {error} = Joi.validate(data, InsertVariablesSelected);

    if (error) {
        res
            .status(401)
            .json({success: false, error: error.details});
    } else {
        CRUD.Insert(Variables_selected, data, res);
    }
        }
      });
    
});

module.exports = router;
