const AWS = require("aws-sdk");

const ddb = new AWS.DynamoDB({
  apiVersion: "2012-08-10",
  region: process.env.REALM_DYNAMODB_DATA_REGION || "us-east-1",
  endpoint: "http://localhost:8000/",
});

var params = {
  TableName: "UserOrdersTable",
};
ddb.describeTable(params, function (err, data) {
  if (err) console.log(err, err.stack); // an error occurred
//   else console.log(data);
  else console.log(JSON.stringify(data,0,4));
});
