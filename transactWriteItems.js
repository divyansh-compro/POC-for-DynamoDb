// Load the AWS SDK for Node.js
var AWS = require("aws-sdk");

// Create DynamoDB service object
var ddb = new AWS.DynamoDB.DocumentClient({
  apiVersion: "2012-08-10",
  region: process.env.REALM_DYNAMODB_DATA_REGION || "us-east-1",
  endpoint: "http://localhost:8000/",
});

var params = {
  TransactItems: [
    {
      Put: {
        TableName: "Music",
        Item: {
        //   HashKey: "haskey",
        //   NumAttribute: 1,
        //   BoolAttribute: true,
        //   ListAttribute: [1, "two", false],
        //   MapAttribute: { foo: "bar" },
        //   NullAttribute: null,
          Artist: "Artist5",
          SongTitle: "Song5",
          AlbumTitle:"Album5"
        },
      },
    },
  ],
};

ddb.transactWrite(params, function (err, data) {
  if (err) console.log(err);
  //   else console.log(data); // successful response
  else console.log(JSON.stringify(data)); // successful response
});
