var AWS = require("aws-sdk");
var ExclusiveStartKey;

var ddb = require("./ddbClient.js");

// var ddb = new AWS.DynamoDB({
//     apiVersion: '2012-08-10',
//     region: process.env.REALM_DYNAMODB_DATA_REGION || "us-east-1",
//     endpoint: "http://localhost:8000/"
// });

// var ddb = new AWS.DynamoDB.DocumentClient({
//   apiVersion: "2012-08-10",
//   region: process.env.REALM_DYNAMODB_DATA_REGION || "us-east-1",
//   endpoint: "http://localhost:8000/"
// });


var params = {
  
    TableName: "Music",
    // TableName: "Students",
    Limit: 4
   };

  //  ExclusiveStartKey 

// ddb.scan(params, function (err, data) {
//   if (err) {
//     console.log("Error", err);
//   } else {
//     console.log("Success", JSON.stringify(data,0,4));
//   }
// });

ddb.scan(params, function (err, data) {
  if (err) {
    console.log("Error", err);
  } else {
      console.log("Success", JSON.stringify(data));
      params.ExclusiveStartKey = data.LastEvaluatedKey;
      console.log("\nStart key", params.ExclusiveStartKey);

      ddb.scan(params, function (err, data) {
        if (err) {
          console.log("Error", err);
        } else {
            console.log("Success", JSON.stringify(data));
            params.ExclusiveStartKey = data.LastEvaluatedKey;
            console.log("\nStart key", params.ExclusiveStartKey);
        }
      });

  }
});


