// Load the AWS SDK for Node.js
var AWS = require("aws-sdk");

// Create DynamoDB service object
var ddb = new AWS.DynamoDB.DocumentClient({
  apiVersion: "2012-08-10",
  region: process.env.REALM_DYNAMODB_DATA_REGION || "us-east-1",
  endpoint: "http://localhost:8000/",
});

// var params = {
//   RequestItems: {
//     'Music': {
//       Keys: [
//         {
//             "Artist": {
//               S: "Artist1",
//             },
//             "SongTitle": {
//               S: "Song1",
//             }
//         },
//         {
//             "Artist": {
//               S: "Artist2",
//             },
//             "SongTitle": {
//               S: "Song2",
//             }
//         },
//         {
//             "Artist": {
//               S: "Artist3",
//             },
//             "SongTitle": {
//               S: "Song3",
//             }
//         }

//       ],
//       ProjectionExpression: 'AlbumTitle'
//     }
//   },
//   Limit: 2
// };

var params = {
  RequestItems: {
    Music: {
      Keys: [
        {
          Artist: "Artist1",
          SongTitle: "Song1",
        },
        {
          Artist: "Artist2",
          SongTitle: "Song2",
        },
        {
          Artist: "Artist3",
          SongTitle: "Song3",
        },
      ],
    },

    Students: {
      Keys: [
        {
          Id: 1,
          Name: "Dev",
        },
      ],
    },
  },
};

ddb.batchGet(params, function (err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log(JSON.stringify(data,0,4));
  }
});
