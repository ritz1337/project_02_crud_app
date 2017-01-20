var express = require('express');
var router = express.Router();
var mongo = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
var assert = require('assert');

var url = process.env.MONGODB_URI || 'mongodb://localhost:27017/proj2'

var colorPalette = ['red darken-2', 'pink darken-2', 'purple darken-2',
'deep-purple darken-2', 'indigo darken-2', 'blue darken-2',
'light-blue darken-2', 'cyan darken-2', 'teal darken-2', 'green darken-2',
'light-green darken-2', 'lime darken-2', 'yellow darken-2', 'amber darken-2',
'orange darken-2', 'deep-orange darken-2']

var randomColorPicker = function (items) {
  var item = items[Math.floor(Math.random()*items.length)];
  return item;
}

router.get('/', function(req, res, next) {
  res.render('index', {title: 'TEST PAGE PLZ WORK'});
})

// test insert document on navigation to /insert
// router.get('/insert', function(req, res, next) {
//   var item = {
//     name: "One",
//     type: "Political"
//   };

//   mongo.connect(url, function(err, db) {
//     assert.equal(null, err);
//     db.collection('opinions').insertOne(item, function(err, result) {
//       assert.equal(null, err);
//       console.log('Item Inserted');
//       db.close();
//     });
//   });
//   res.redirect('/');
// });

// insert opinion
router.post('/opinion/politics', function(req, res) {
  var item = {
    category: "Politics",
    title: req.body.title,
    body: req.body.body,
    user: req.body.user,
    upvotes: 0,
    downvotes: 0,
    color: randomColorPicker(colorPalette)
  }
  // var postTitle = req.body.title;

  mongo.connect(url, function(err, db) {
    assert.equal(null, err);
    // if (db.collection('opinions').find({'title': postTitle})){}

    db.collection('opinions').insertOne(item, function(err, result) {
      assert.equal(null, err);
      console.log('Item Inserted');
      db.close();

    })
  })
    res.redirect(301, '/politics')
})


router.get('/politics', function(req, res) {
  console.log('oijoijouhnoiuhoiuhoiuhoiuhoihoiuhoiuhoiuhiouh');

  mongo.connect(url, function(err, db) {
    assert.equal(null, err);
    db.collection('opinions').find({"category": "Politics"}).toArray(function(err, docs) {
    // res.json({docs}) //works
    res.render('politics', {items: docs, test: 'aj', anotherKey: 'another value'});
    });
  })
})

// delete an opinion
router.post('/opinion/:objectid/delete', function(req, res) {
  var objectId = req.params.objectid;
  mongo.connect(url, function (err, db) {
    db.collection('opinions').remove( { _id: ObjectId(objectId) }, function(err, del) {
      if (err) {
        console.log('error!', err);
        res.json( { status: 404} );
      }
      else {
        console.log('deleted', del);
        db.close()
        res.json( { status: 200 } );
      }
    })
  })
})

// update an opinion
router.post('/opinion/politics/update', function(req, res) {
  var objectId = {
    title: req.body.updatetitle,
    body: req.body.updatebody,
    id: req.body.id
  }
  var objid = req.body.id;
  var objtitle = req.body.updatetitle;
  var objbody = req.body.updatebody;
  mongo.connect(url, function(err, db) {
    db.collection('opinions').update( { _id: ObjectId(objid) }, {$set: {title: objtitle, body: objbody}}), function(err, upd) {
      if (err) {
        console.log('error!', err);
        res.json( { status: 404} );
      }
      else {
        // db.collection('data').find( { _id: ObjectId(objectId.id) } ).toArray(function(err, results) {
        //   console.log('updated entry');
        //   res.redirect(301, '/politics');
        // })
        db.close();
      }
    }
        res.redirect(301, '/politics');
  })
console.log(objectId);
// res.json(objectId);

})

// router.get('/politics.html', function(req, res) {
//   res.redirect('/politics.html');
// })

module.exports = router;


