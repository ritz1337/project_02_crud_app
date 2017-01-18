var express = require('express');
var router = express.Router();
var mongo = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;
var assert = require('assert');

var url = process.env.MONGODB_URI || 'mongodb://localhost:27017/proj2'

router.get('/', function(req, res, next) {
  res.render('index', {title: 'TEST PAGE PLZ WORK'});
})

router.get('/insert', function(req, res, next) {
  var item = {
    name: "One",
    type: "Political"
  };

  mongo.connect(url, function(err, db) {
    assert.equal(null, err);
    db.collection('opinions').insertOne(item, function(err, result) {
      assert.equal(null, err);
      console.log('Item Inserted');
      db.close();
    });
  });
  res.redirect('/');
});

module.exports = router;
