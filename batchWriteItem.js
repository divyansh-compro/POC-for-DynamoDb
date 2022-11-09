// Load the AWS SDK for Node.js
var AWS = require("aws-sdk");

// Create DynamoDB service object
var ddb = new AWS.DynamoDB.DocumentClient({
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
            AlbumTitle: "Album90",
            Artist: "Artist90",
            SongTitle: "song90"
          },
          ConditionExpression: 'attribute_not_exists(Artist)'
        },
        // PutRequest: {
        //   Item: {
        //     AlbumTitle: "Album9",
        //     Artist: "Artist9",
        //     SongTitle: "song"
        //   },
          // ConditionExpression: 'attribute_not_exists(AlbumTitle)'
        // },
      }
    ],
    // Students: [
    //   {
    //     PutRequest: {
    //       Item: {
    //         Id: 10,
    //         Name: "Divyansh"
    //       }
    //     },
    //   }
    // ]
  }

}


// var params = {
//   RequestItems: {
//     Music: [
//       {
//         // DeleteRequest: {
//         //   Key: { 
//         //     Artist: 'Artist10',
//         //     SongTitle: "Song10",
//         //  }
//         // },
//         // DeleteRequest: {
//         //   Key: { 
//         //     Artist: 'Artist1000',
//         //     SongTitle: "Song10",
//         //  }
//         // },
//         // PutRequest: {
//         //   Item: {
//         //     AlbumTitle: "Album5",
//         //     Artist: "Artist5",
//         //     SongTitle: "Song5"
//         //   }
//         // },
//         // PutRequest: {
//         //   Item: {
//         //     AlbumTitle: "Album6",
//         //     Artist: "Artist6",
//         //     SongTitle: "Song6"
//         //   }
//         // },
//         // PutRequest: {
//         //   Item: {
//         //     AlbumTitle: "Album5",
//         //     Artist: "Artist5",
//         //     SongTitle: "Song5"
//         //   }
//         // },
//         // PutRequest: {
//         //   Item: {
//         //     AlbumTitle: "Album7",
//         //     Artist: "Artist7",
//         //     SongTitle: "Song7"
//         //   }
//         // },
//         // PutRequest: {
//         //   Item: {
//         //     AlbumTitle: "Album8",
//         //     Artist: "Artist8",
//         //     SongTitle: "Song8"
//         //   }
//         // },
//         PutRequest: {
//           Item: {
//             AlbumTitle: "Album9",
//             Artist: "Artist9",
//             SongTitle: "9"
//           }
//         },
//       }
//     ],
//   },

// };

// var params = {
//   RequestItems: {
//     Music: [
//       {
//         PutRequest: {
//           Item: {
//             AlbumTitle: {
//               S: "Album1",
//             },
//             Artist: {
//               S: "Artist1",
//             },
//             SongTitle: {
//               S: "Song1",
//             },
//           },
//         },
//       },
//       {
//         PutRequest: {
//           Item: {
//             AlbumTitle: {
//               S: "Album2",
//             },
//             Artist: {
//               S: "Artist2",
//             },
//             SongTitle: {
//               S: "Song2",
//             },
//           },
//         },
//       },
//       {
//         PutRequest: {
//           Item: {
//             AlbumTitle: {
//               S: "Album10",
//             },
//             Artist: {
//               S: "Artist10",
//             },
//             SongTitle: {
//               S: "Song10",
//             },
//           },
//         },
//       }
//     ],
//   },

// };

ddb.batchWrite(params, function (err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data);
  }
});
