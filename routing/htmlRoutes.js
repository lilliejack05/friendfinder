var path = require('path');

//ROUTING

module.exports = function(app){
  //route that leads to survey
  app.get('/survey', function (req, res) {
    res.sendFile(path.join(__dirname + '/../assets/public/survey.html'));
  });

    //a USE route to home page
    app.use(function (req, res) {
      res.sendFile(path.join(__dirname + '/../assets/public/home.html'));
    });
  };
  

