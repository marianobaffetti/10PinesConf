var AWS = require("aws-sdk");
let awsConfig = {
    "region": "us-east-1",
};

exports.handler = function (event, context, callback) {
    AWS.config.update(awsConfig);
    let docClient = new AWS.DynamoDB.DocumentClient();
    
    var params = {
        TableName:"customers",
        Item:{"dni": event.body["dni"]}
    }

    console.log("Adding a new item...");
    docClient.put(params, function(err, data) {
        if (err) {
            console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            console.log("Added item:", JSON.stringify(data, null, 2));
        }
    });

    var response = {
      statusCode: 200,
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
      },
      body: event.body,
    }
    callback(null, response)
};
