var AWS = require('aws-sdk');
var ddb = new AWS.DynamoDB({
    apiVersion: '2012-08-10',
    region: process.env.REALM_DYNAMODB_DATA_REGION || "us-east-1",
    endpoint: "http://localhost:8000/"
});



var params = {
    ExpressionAttributeValues: {
     ":v1": {
       S : "Artist2"
      }
    }, 
    KeyConditionExpression: "Artist = :v1", 
    ProjectionExpression: "SongTitle", 
    TableName: "Music"
   };


// var params = {
//   ExpressionAttributeValues: {
//     ':s': {N: '2'},
//     ':e' : {N: '09'},
//     ':topic' : {S: 'PHRASE'}
//   },
//   KeyConditionExpression: 'Season = :s and Episode > :e',
//   ProjectionExpression: 'Episode, Title, Subtitle',
//   FilterExpression: 'contains (Subtitle, :topic)',
//   TableName: 'EPISODES_TABLE'
// };

ddb.query(params, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    //console.log("Success", data.Items);
    data.Items.forEach(function(element, index, array) {
      console.log(element.Title.S + " (" + element.Subtitle.S + ")");
    });
  }
});
