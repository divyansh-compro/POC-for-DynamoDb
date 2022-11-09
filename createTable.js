const AWS = require("aws-sdk");

const ddb = new AWS.DynamoDB({
  apiVersion: "2012-08-10",
  region: process.env.REALM_DYNAMODB_DATA_REGION || "us-east-1",
  endpoint: "http://localhost:8000/",
});

// var params = {
//   AttributeDefinitions: [
//     {
//       AttributeName: "Id",
//       AttributeType: "N",
//     },
//     {
//       AttributeName: "Name",
//       AttributeType: "S",
//     }
//   ],
//   KeySchema: [
//     {
//       AttributeName: "Id",
//       KeyType: "HASH",
//     },
//     {
//       AttributeName: "Name",
//       KeyType: "RANGE",
//     },
//   ],
//   ProvisionedThroughput: {
//     ReadCapacityUnits: 5,
//     WriteCapacityUnits: 5,
//   },
//   TableName: "Students",
// };

var params = {
  AttributeDefinitions: [
    {
      AttributeName: "Username",
      AttributeType: "S"
  },
  {
      AttributeName: "OrderId",
      AttributeType: "S"
  },
  {
      AttributeName: "Amount",
      AttributeType: "N"
  }
  ],
  KeySchema: [
    {
      AttributeName: "Username",
      KeyType: "HASH",
    },
    {
      AttributeName: "OrderId",
      KeyType: "RANGE",
    },
  ],
  LocalSecondaryIndexes: [
    {
        IndexName: "UserAmountIndex",
        KeySchema: [
            {
                AttributeName: "Username",
                KeyType: "HASH"
            },
            {
                AttributeName: "Amount",
                KeyType: "RANGE"
            }
        ],
        Projection: {
            ProjectionType: "KEYS_ONLY"
        }
    }
  ], 
  ProvisionedThroughput: {
    ReadCapacityUnits: 5,
    WriteCapacityUnits: 5,
  },
  TableName: "UserOrdersTable",
};

ddb.createTable(params, function (err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else console.log(data); // successful response
});
