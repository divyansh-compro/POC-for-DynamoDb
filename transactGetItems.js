// Load the AWS SDK for Node.js
var AWS = require("aws-sdk");

// Create DynamoDB service object
var ddb = new AWS.DynamoDB.DocumentClient({
  apiVersion: "2012-08-10",
  region: process.env.REALM_DYNAMODB_DATA_REGION || "us-east-1",
  endpoint: "http://localhost:8000/",
});

// var params = {
//   TransactItems: [
//     /* required */
//     {
//       Get: {
//         /* required */
//         Key: {
//           /* required */
//           Artist: {
//             /* AttributeValue */ S: "Artist1",
//           },
//           /* '<AttributeName>': ... */
//         },
//         TableName: "Music" /* required */,
//         //   ExpressionAttributeNames: {
//         // '<ExpressionAttributeNameVariable>': 'STRING_VALUE',
//         /* '<ExpressionAttributeNameVariable>': ... */
//         //   }
//       },
//     },
//     /* more items */
//   ],
// //   ReturnConsumedCapacity: INDEXES | TOTAL | NONE,
//   ReturnConsumedCapacity: "5",
// };

// var params = {
//     TransactItems: [ /* required */
//       {
//         Get: { /* required */
//           Key: { /* required */
//             'Artist': "Artist1" /* "str" | 10 | true | false | null | [1, "a"] | {a: "b"} */,
//             /* '<AttributeName>': ... */
//           },
//           TableName: 'Music', /* required */
//         //   ExpressionAttributeNames: {
//         //     '<ExpressionAttributeNameVariable>': 'STRING_VALUE',
//         //     /* '<ExpressionAttributeNameVariable>': ... */
//         //   },
//         //   ProjectionExpression: 'STRING_VALUE'
//         }
//       },
//       /* more items */
//     ],
//     // ReturnConsumedCapacity: INDEXES | TOTAL | NONE
//     ReturnConsumedCapacity: '1'
//   };

var params = {
  TransactItems: [
    {
      Get: {
        TableName: "Music",
        Key: {
          Artist: "Artist1",
          SongTitle: "Song1",
        },
      },
    },
    {
      Get: {
        TableName: "Music",
        Key: {
          Artist: "Artist2",
          SongTitle: "Song2",
        },
      },
    },
    {
      Get: {
        TableName: "Music",
        Key: {
          Artist: "Artist3",
          SongTitle: "Song3",
        },
      },
    },
  ]
};

ddb.transactGet(params, function (err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  //   else console.log(data); // successful response
  else console.log(JSON.stringify(data)); // successful response
});
