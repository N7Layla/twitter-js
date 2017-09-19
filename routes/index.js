const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');
module.exports = router;

// app.use(function (req, res) {
//   res.setHeader('Content-Type', 'text/plain')
//   res.write('you posted:\n')
//   res.end(JSON.stringify(req.body, null, 2))
// })

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { showForm: true, tweets: tweets } );
});

router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var tweets = tweetBank.find( {name: name} );
  res.render( 'index', { showForm: true, tweets: tweets } );
});

// router.get('/users/:username', function(req, res) {
//   var username = req.params.username;
//   var tweets = tweetBank.find( {name: username} );
//   res.render( 'index', { showForm: true, tweets: tweets } );
// });

router.post('/tweets', function(req, res) {
  var name = req.body.name;
  console.log(name)
  var text = req.body.text;
  tweetBank.add(name, text);
  res.redirect('/');
});

router.get('/tweets/:id', function(req, res) {
  var id = Number(req.params.id);
  var tweets = tweetBank.find( {counterID: id} );
  res.render( 'index', { tweets: tweets } );
});
