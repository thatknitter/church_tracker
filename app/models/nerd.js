//grab mongoose
var mongoose = require('mongoose');

//define the nerd model
//module.exports allows us to pass this to other files
module.exports = mongoose.model('Nerd', {
   name : {type : String, default : ''}
});