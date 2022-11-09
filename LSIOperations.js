// Load the AWS SDK for Node.js
var AWS = require("aws-sdk");

// Create DynamoDB service object
var ddb = new AWS.DynamoDB.DocumentClient({
  apiVersion: "2012-08-10",
  region: process.env.REALM_DYNAMODB_DATA_REGION || "us-east-1",
  endpoint: "http://localhost:8000/",
});

function batchWritefun() {
  var params = {
    RequestItems: {
      UserOrdersTable: [
        {
        //   PutRequest: {
        //     Item: {
        //       Username: "User1",
        //       OrderId: "Order1",
        //       Amount: 100,
        //     },
        //   },
          PutRequest: {
            Item: {
              Username: "User2",
              OrderId: "Order2"
            },
          },
        },
      ],
    },
  };

  ddb.batchWrite(params, function (err, data) {
    if (err) {
      console.log("Error", err);
    } else {
      console.log("Success", data);
    }
  });
}

function scanfun() {

    var params = {
        TableName: "UserOrdersTable"
       };
    
    
    ddb.scan(params, function (err, data) {
        if (err) {
          console.log("Error", err);
        } else {
            console.log("Success", JSON.stringify(data,0,4));
            params.ExclusiveStartKey = data.LastEvaluatedKey;
            console.log("\nStart key", params.ExclusiveStartKey);
        }
      });
}

// batchWritefun();
scanfun();