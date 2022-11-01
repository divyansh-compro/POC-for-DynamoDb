// Load the AWS SDK for Node.js
var AWS = require("aws-sdk");

// Create DynamoDB service object
var ddb = new AWS.DynamoDB({
    apiVersion: '2012-08-10',
    region: process.env.REALM_DYNAMODB_DATA_REGION || "us-east-1",
    endpoint: "http://localhost:8000/"
});

var params = {
  RequestItems: {
    Music: [
      {
        PutRequest: {
          Item: {
            AlbumTitle: {
              S: "Album1",
            },
            Artist: {
              S: "Artist1",
            },
            SongTitle: {
              S: "Song1",
            },
          },
        },
      },
      {
        PutRequest: {
          Item: {
            AlbumTitle: {
              S: "Album2",
            },
            Artist: {
              S: "Artist2",
            },
            SongTitle: {
              S: "Song2",
            },
          },
        },
      },
      {
        PutRequest: {
          Item: {
            AlbumTitle: {
              S: "Album3",
            },
            Artist: {
              S: "Artist3",
            },
            SongTitle: {
              S: "Song3",
            },
          },
        },
      }
    ],
  },
};

ddb.batchWriteItem(params, function (err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data);
  }
});
