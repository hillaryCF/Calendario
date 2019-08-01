const Mongo = require('mongodb').MongoClient;
const uri = "mongodb://localhost:27017";
const querystring = require('querystring');
const dataString = ""

// Connect to the db
Mongo.connect(uri, (err, client) => {
  if(!err) console.log('We are connected');
  const db = client.db('local');
  const data = querystring.parse(dataString);
  const collect = db.collection("calendarHomework2");
  collect.insertOne(data , function(err , res){
    if(err) throw err;
    console.log("data success")
    client.close()
  })
});

