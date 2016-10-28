//grab first model
var Nerd = require('./models/nerd');

    module.exports = function(app) {
        //server routes
        //handle api calls
        //authentication routes

        app.get('/api/nerds', function(req, res) {
           Nerd.find(function (err, nerds) {
              if (err)
                res.send(err);
               res.json(nerds);
           });
        });

        //app.post goes here
        //app.delete goes here

        //frontend routes ================
        //route to handle all angular requests
        app.get('*', function(req, res){
            res.sendFile('./public/views/index.html'); //loads index page
        });
    };