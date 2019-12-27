var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
/* GET home page. */

function insertData(res, req, doc){
  MongoClient.connect('mongodb://localhost:27017', (err, client)=>{
    if(err) throw err;

    var db = client.db('tester')
    var data = req.body;
    dbo.collection('isian').insertOne(data, (err, res)=>{
      if(err) throw err;
      db.close();
    });
  })
}

router.use('/', function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  next();
});

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/form-input', (req,res,next)=>{
  insertData(res, req, doc);
})
module.exports = router;
