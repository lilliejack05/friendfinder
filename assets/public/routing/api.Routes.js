var friendArray = require('../data/friend.js');

module.exports = function(app){
  //a GET route that displays JSON of all possible friends
  app.get('/api/friends', function(req,res){
    res.json(friendArray);
  });

  app.post('/api/friends', function(req,res){
    //grabs the new friend's scores to compare with friends in friendList array
    var newFriendScores = req.body.scores;
    var scoresArray = [];
    var friendCount = 0;
    var bestMatch = 0;

    //runs through all current friends in list
    for(var i=0; i<friendArray.length; i++){
      var scoresDiff = 0;
      //run through scores to compare friends
      for(var j=0; j<newFriendScores.length; j++){
        scoresDiff += (Math.abs(parseInt(friendArray[i].scores[j]) - parseInt(newFriendScores[j])));
      }

      //push results into scoresArray
      scoresArray.push(scoresDiff);
    }

    //after all friends are compared, find best match
    for(var i=0; i<scoresArray.length; i++){
      if(scoresArray[i] <= scoresArray[bestMatch]){
        bestMatch = i;
      }
    }

    //return bestMatch data
    var bff = friendArray[bestMatch];
    res.json(bff);

    //pushes new submission into the friends array
    friendArray.push(req.body);
  });
};
