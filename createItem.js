const AWS = require("aws-sdk");
console.log("Hey from createItem.js");

const docClient = new AWS.DynamoDB.DocumentClient({
  apiVersion: "2012-08-10",
  region: process.env.REALM_DYNAMODB_DATA_REGION || "us-east-1",
  endpoint: "http://localhost:8000/",
});

const create = async () => {
  const params = {
    TableName: "Music",
    Item: {
      Artist: "New artist1",
      SongTitle: "Latest song",
    },
  };
  try {
    const data = await docClient.put(params).promise();
    console.log("Success :", data);
  } catch (err) {
    console.log("Error", err);
  }
};
create();
