const AWS = require("aws-sdk");

const ddb = new AWS.DynamoDB({
  apiVersion: "2012-08-10",
  region: process.env.REALM_DYNAMODB_DATA_REGION || "us-east-1",
  endpoint: "http://localhost:8000/",
});


   
var params = {
    AttributeDefinitions: [
        {
          AttributeName: "ReturnDate",
          AttributeType: "S"
      },
      {
          AttributeName: "OrderId",
          AttributeType: "S"
      }
      ],
      GlobalSecondaryIndexUpdates: [
        {
            Create: 
            {
                IndexName: "ReturnDateOrderIdIndex",
                KeySchema: [
                    {
                        AttributeName: "ReturnDate",
                        KeyType: "HASH"
                    },
                    {
                        AttributeName: "Amount",
                        KeyType: "RANGE"
                    }
                ],
                Projection: {
                    ProjectionType: "ALL"
                },
                ProvisionedThroughput: {
                    ReadCapacityUnits : 1,
                    WriteCapacityUnits : 1
                }
            }
        }
    ],
      TableName: "UserOrdersTable"
}




ddb.updateTable(params, function (err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else console.log(data);
});
