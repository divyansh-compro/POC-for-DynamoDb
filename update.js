const AWS = require("aws-sdk");

console.log("Hey from create.js");

const docClient = new AWS.DynamoDB.DocumentClient({
  apiVersion: "2012-08-10",
  region: process.env.REALM_DYNAMODB_DATA_REGION || "us-east-1",
  // sslEnabled: true,
  // convertEmptyValues: true
  endpoint: "http://localhost:8000/",
});


const createTable = async () => {

  const params = {
    TableName: "Customer",
    Item: {
      Name: "Rahul",
      City: "Delhi",
    },
  };
  try {
    const data = await docClient.update(params).promise();
    console.log("Success :", data);
  } catch (err) {
    console.log("Error", err);
  }
};
createTable();
