const AWS = require("aws-sdk");
// const docClient = new AWS.DocumentClient(   );

console.log("Hey from readItem.js");

const docClient = new AWS.DynamoDB.DocumentClient({
  apiVersion: "2012-08-10",
  region: process.env.REALM_DYNAMODB_DATA_REGION || "us-east-1",
  // sslEnabled: true,
  // convertEmptyValues: true
  endpoint: "http://localhost:8000/",
});

const getItem = async () => {
  const params = {
      TableName: "Music",
      Key: {
        Artist: "Acme Band",
        SongTitle: "Happy Day",
      },
    };
  // const params = {
  //   TableName: "Music",
  //   Key: {
  //     Artist: "New artist",
  //     SongTitle: "Latest song",
  //   },
  // };
  try {
    const data = await docClient.get(params).promise();
    if (Object.keys(data).length === 0) throw new Error("No such record found.");
    console.log("Success :", data, typeof data);
  } catch (err) {
    console.log("Error", err.message);
  }
};
getItem();

