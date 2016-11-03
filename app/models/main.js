var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MainSchema = new Schema({
   name : String,
   roll : Number,
   phone: Number,
   address: String,
    email: String,
    vtCoordinator : String,
    vtCompanion : String, //join on id to another entry
    vtClient1 : String, //join on id to another entry
    vtClient2 : String, //join on id to another entry
    vtClient3 : String, //join on id to another entry
    username : String,
    password : String
});

module.exports = mongoose.model('main', MainSchema);