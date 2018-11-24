var express = require("express");
var path = require("path");
var app = express();

app.use(express.static(path.join(__dirname, "src")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept,Authorization"
    //"Origin, X-Requested-With, Content-Type, Accept,Access-Control-Allow-Headers, Authorization"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.get("/", function(request, resp, next) {
  resp.render("index");
});

var Insert_AnswerToQuestion = require("./Server/AnswerToQuestion/_Insert");
var Insert_Contact = require("./Server/Contact/_Insert");
var Insert_EnterpriseEvaluation = require("./Server/EnterpriseEvaluation/_Insert");
var Insert_EnterpriseSelected = require("./Server/EnterpriseSelected/_Insert");
var Insert_EnterpriseStored = require("./Server/EnterpriseStored/_Insert");
var Insert_Factor = require("./Server/Factor/_Insert");
var Insert_Link = require("./Server/Link/_Insert");
var Insert_MailsSurveyed = require("./Server/MailsSurveyed/_Insert");
var Insert_Question = require("./Server/Question/_Insert");
var Insert_RelationShip = require("./Server/RelationShip/_Insert");
var Insert_Sector = require("./Server/Sector/_Insert");
var Insert_Size = require("./Server/Size/_Insert");
var Insert_Subsector = require("./Server/Subsector/_Insert");
var Insert_Surveyed = require("./Server/Surveyed/_Insert");
var Insert_Variables = require("./Server/Variables/_Insert");
var Insert_VariablesSelected = require("./Server/VariablesSelected/_Insert");
var InsertNatural_person = require("./Server/NaturalPerson/_Insert");
var InsertRelationShip_person = require("./Server/RelationShipPerson/_Insert");
var GetEnterprise_Stored = require("./Server/EnterpriseStored/_ReadWhere");

//
var Read_Sector = require("./Server/Sector/_Read");
var Read_Link = require("./Server/Link/_Read");
var Read_View = require("./Server/GetDataView/_Read");
var Read_GetEnterpriseEvaluation = require("./Server/EnterpriseEvaluation/_Read");
var GetSectorId_from_enterprise_evaluation = require("./Server/EnterpriseEvaluation/_ReadWhere");
var GetSubsector_and_id = require("./Server/Subsector/_ReadWhere");
var GetMailSurveyed_And_ID = require("./Server/MailsSurveyed/_ReadWhere");
app.use(
  "/webservices",
  Insert_AnswerToQuestion,
  Insert_Contact,
  Insert_EnterpriseEvaluation,
  Insert_EnterpriseSelected,
  Insert_EnterpriseStored,
  Insert_Factor,
  Insert_Link,
  Insert_MailsSurveyed,
  Insert_Question,
  Insert_RelationShip,
  Insert_Sector,
  Insert_Size,
  Insert_Subsector,
  Insert_Surveyed,
  Insert_Variables,
  Insert_VariablesSelected,
  InsertNatural_person,
  InsertRelationShip_person,
  GetEnterprise_Stored,
  Read_Sector,
  Read_Link,
  GetSectorId_from_enterprise_evaluation,
  GetSubsector_and_id,
  GetMailSurveyed_And_ID,
  Read_GetEnterpriseEvaluation,
  Read_View
);

app.listen(8081, function() {
  console.log("El servidor Esta En llamas!");
});

// var connection = mysql.createConnection({   host: process.env.RDS_HOSTNAME,
// user: process.env.RDS_USERNAME,   password: process.env.RDS_PASSWORD,
// database: process.env.RDS_DATABASE,   port: process.env.RDS_PORT });
// connection.connect(function (err) {   if (err) {     console.error('Database
// connection failed: ' + err.stack);     return;   }   console.log('Connected
// to database.'); }); connection.end();
