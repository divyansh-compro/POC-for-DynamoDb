var AWS = require('aws-sdk');

// const ddb = new AWS.DynamoDB({
//   apiVersion: "2012-08-10",
//   region: process.env.REALM_DYNAMODB_DATA_REGION || "us-east-1",
//   // sslEnabled: true,
//   // convertEmptyValues: true
//   endpoint: "http://localhost:8000/"
// });

const ddb = require("./ddbClient.js");


// const ddb = new AWS.DynamoDB.DocumentClient({
//   apiVersion: "2012-08-10",
//   region: process.env.REALM_DYNAMODB_DATA_REGION || "us-east-1",
//   // sslEnabled: true,
//   // convertEmptyValues: true
//   endpoint: "http://localhost:8000/"
// });


var params = {
    ExpressionAttributeValues: {
     ":v1": {
       S : "Artist9"
      }
    }, 
    KeyConditionExpression: "Artist = :v1", 
    // ProjectionExpression: "SongTitle", 
    TableName: "Music"
   };


ddb.query(params, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data.Items);
    // data.Items.forEach(function(element, index, array) {
    //   console.log(element.Title.S + " (" + element.Subtitle.S + ")");
    // });
  }
});
