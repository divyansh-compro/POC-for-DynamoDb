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
      Artist: "Artist90",
      SongTitle: "Song90",
      Singer : "singer90"
    },
    ConditionExpression: 'attribute_not_exists(AlbumTitle)' //(gives error)
    // ConditionExpression: 'attribute_exists(AlbumTitle)' //(Updates item)
  };


  // const params = {
  //   TableName: "Music",
  //   Item: {
  //     Artist: "Artist13",
  //     SongTitle: "Song13",
  //     Singer : "updated singer 13"
  //   },
  //   // ConditionExpression: 'attribute_not_exists(AlbumTitle)' //updates
  //   ConditionExpression: 'attribute_exists(AlbumTitle)' //gives error
  // };

  // "null | undefined | ""
  try {
    const data = await docClient.put(params).promise();
    console.log("Success :", data);
  } catch (err) {
    console.log("Error", err);
  }
};
create();

// module.exports = {fun1, fun2}
