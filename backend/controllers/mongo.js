const Mongo = require('mongodb').MongoClient;
const querystring = require('querystring');
const dataString = '';
const uri = "mongodb://localhost:27017/";

const dataBase = require('../inventories/config.json');

Mongo.connect(uri, (err, client) => {
  if(err) console.log('We are connected');
  else console.log('coneccion realizada');
  const db = client.db('calendarHomework2');
  const data = querystring.parse(dataString);
  const collect = db.collection("calendarHomework2").find({month
    :
    "January"});
  collect.forEach(function(doc){
    //const cadena = JSON.stringify(doc);
    console.log(dataBase);
  })
});

// collect.foreach(function(err, doc) {
  //   const cadenita = [];
  //   cadenita.push(doc);
  //   let cadena = JSON.stringify(cadenita)
  //   console.log(cadena);
  // })
// agrega uno nuevo al array
//db.colletion('months).insertone({
// month:'enero',
// day:'[1,2,3,4,5,6]'
// })