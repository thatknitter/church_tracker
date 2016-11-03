//grab first model
var Main = require('./models/main');

    module.exports = function(app) {
        //server routes
        //handle api calls
        //authentication routes

        app.get('/api/main', function(req, res) {
           Main.find(function(err, mains) {
              if (err)
                res.send(err);
               res.json(mains);
           });
        });

        app.use(function(req, res, next){
           console.log('thing');
            next();
        });

        //app.post goes here
        //app.delete goes here

        //frontend routes ================
        //route to handle all angular requests
        app.get('*', function(req, res){
            res.sendFile('./public/views/index.html'); //loads index page
        });
    };