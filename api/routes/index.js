var express = require('express');
var router = express.Router();
var Mongo = require('mongodb');
var MongoClient = Mongo.MongoClient;
/* GET home page. */

function insertData(res, req, doc){
  MongoClient.connect('mongodb://localhost:27017', (err, client)=>{
    if(err) throw err;

    var db = client.db('tester')
    var data = req.body;
    db.collection(doc).insertOne(data, (err, result)=>{
      if(err) throw err;
      
      res.send('Sukses')
      //db.close();
    });
    
  })
}

function getData(res, doc){
  MongoClient.connect('mongodb://localhost:27017', (err, client)=>{
    if(err) throw err;

    var db = client.db('tester')
    db.collection(doc).find().toArray((err, result)=>{
      if(err) throw err;
      console.log(result);
      res.send(result);
      
    })
    //db.close();
  })
}

function deleteData(req, res, doc){
  MongoClient.connect('mongodb://localhost:27017', (err, client)=>{
    if(err) throw err;

    var db = client.db('tester');
    var where = req.body;
    where._id = new Mongo.ObjectId(where._id);
    db.collection(doc).deleteOne(req.body, (err, obj)=>{
      if(err) throw err;
      res.send('sukses');
    })
    //db.close();
  })
}

router.use('/', function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  next();
});

router.get('/', function(req, res, next) {
  getData(res, 'siswa');
});

router.post('/form-input', (req,res,next)=>{
  insertData(res, req, 'siswa');
});

router.get('/data-get', (req, res, next)=>{
  getData(res, 'siswa');
});

router.post('/data-delete', (req, res, next)=>{
  console.log(JSON.stringify(req.body));
  deleteData(req, res, 'siswa');
})
module.exports = router;
