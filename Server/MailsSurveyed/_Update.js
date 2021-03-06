const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Joi = require('joi');
const jwt = require('jsonwebtoken');
const urlencodedParser = bodyParser.urlencoded({extended: false})

const KEY = require('../../config/functions/token');
const { SECRET_TOKEN_CLIENT } = require('../../config');
const Mail_surveyed = require('../../config/models/Mail_surveyed'); //MODEL
const CRUD = require('../../config/functions/API'); // API
const {UpdateMailSurveyedStatus} = require('../../config/functions/validator/Update'); // VALIDATOR

router.post('/UpdateStatus', KEY.verifyToken,urlencodedParser, (req, res) => {

    if (!req.body || req.body.length === 0) {
        console.log('request body not found');
        return res.sendStatus(400);
    }

    jwt.verify(req.token, SECRET_TOKEN_CLIENT, (err, authData) => {
        if(err) {
          res.sendStatus(403);
        } else {
            let data = req.body;

            const {error} = Joi.validate(data, UpdateMailSurveyedStatus);
        
            if (error) {
                res
                    .status(401)
                    .json({success: false, error: error.details});
            } else {
                CRUD.Update(Mail_surveyed, data, res);
            }
        }
      });

    

});

module.exports = router;
