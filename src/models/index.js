const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.dbName = dbConfig.dbName;
db.temples = require("./temples.js")(mongoose);

module.exports = db;
