// Load the AWS SDK for Node.js
var AWS = require("aws-sdk");

// Create DynamoDB service object
var ddb = new AWS.DynamoDB.DocumentClient({
  apiVersion: "2012-08-10",
  region: process.env.REALM_DYNAMODB_DATA_REGION || "us-east-1",
  endpoint: "http://localhost:8000/",
});

const docClient = new AWS.DynamoDB.DocumentClient({
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
        //   PutRequest: {
        //     Item: {
        //         Username: "User6",
        //         OrderId: "Order6",
        //         Amount: 600,
        //         ReturnDate: "6 Nov 2022"
        //       },
        //   },
        //   PutRequest: {
        //     Item: {
        //         Username: "User7",
        //         OrderId: "Order7",
        //         ReturnDate: "7 Nov 2022"
        //       },
        //   },
          PutRequest: {
            Item: {
                Username: "User8",
                OrderId: "Order8",
                Amount: 800,
              },
          },
        //   PutRequest: {
        //     Item: {
        //         Username: "User9",
        //         OrderId: "Order9"
        //       },
        //   },
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
    TableName: "UserOrdersTable",
  };

  ddb.scan(params, function (err, data) {
    if (err) {
      console.log("Error", err);
    } else {
      console.log("Success", JSON.stringify(data, 0, 4));
      params.ExclusiveStartKey = data.LastEvaluatedKey;
      console.log("\nStart key", params.ExclusiveStartKey);
    }
  });
}

function createItemfun() {
  
  const params = {
      TableName: "UserOrdersTable",
      Item: {
        Username: "User5",
        OrderId: "Order5",
        // Amount: 300,
        // ReturnDate: "4 Nov 2022"
      },
    };

    try {
      const data = docClient.put(params).promise();
      console.log("Success :", data);
    } catch (err) {
      console.log("Error", err);
    }

}

batchWritefun();
// createItemfun();
// scanfun();
 