var AWS = require("aws-sdk");
var ddb = new AWS.DynamoDB({
    apiVersion: '2012-08-10',
    region: process.env.REALM_DYNAMODB_DATA_REGION || "us-east-1",
    endpoint: "http://localhost:8000/"
});

var params = {
    ExpressionAttributeNames: {
     "#AT": "AlbumTitle", 
     "#ST": "SongTitle"
    }, 
    ExpressionAttributeValues: {
     ":a": {
    //    S: "No One You Know"
       S: "Artist1"
      }
    }, 
    FilterExpression: "Artist = :a", 
    ProjectionExpression: "#ST, #AT", 
    TableName: "Music"
   };

// const params = {
//   // Specify which items in the results are returned.
//   FilterExpression: "Subtitle = :topic AND Season = :s AND Episode = :e",
//   // Define the expression attribute value, which are substitutes for the values you want to compare.
//   ExpressionAttributeValues: {
//     ":topic": { S: "SubTitle2" },
//     ":s": { N: 1 },
//     ":e": { N: 2 },
//   },
//   // Set the projection expression, which are the attributes that you want.
//   ProjectionExpression: "Season, Episode, Title, Subtitle",
//   TableName: "EPISODES_TABLE",
// };

ddb.scan(params, function (err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data);
    data.Items.forEach(function (element, index, array) {
      console.log(
        "printing",
        element.Title.S + " (" + element.Subtitle.S + ")"
      );
    });
  }
});
