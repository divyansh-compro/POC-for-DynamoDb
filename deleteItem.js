const AWS = require("aws-sdk");
console.log("Hey from deleteItem.js");

const docClient = new AWS.DynamoDB.DocumentClient({
  apiVersion: "2012-08-10",
  region: process.env.REALM_DYNAMODB_DATA_REGION || "us-east-1",
  endpoint: "http://localhost:8000/",
});

const deleteItem = async () => {
  const params = {
    TableName: "Music",
    Key: {
      Artist: "Artist9",
      SongTitle: "9",
    },
  };
  try {
    const data = await docClient.delete(params).promise();
    console.log("Success :", data);
  } catch (err) {
    console.log("Error", err);
  }
};
deleteItem();
