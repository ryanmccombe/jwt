/**
 * Created by Ryan on 17/02/2015.
 */
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var User = require('./models/User.js');
var jwt = require('./services/jwt.js');

var app = express();

app.use(bodyParser.json());

app.use(function(req,res,next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  next();
});

app.post('/register', function(req,res){
  var user = req.body;
  var newUser = new User.model({
    email: user.email,
    password: user.password
  });

  var payload = {
    iss: req.hostname,
    sub: user._id

  };

  var token = jwt.encode(payload, 'secret');

  newUser.save(function(err){
    res.status(200).send({
      user: newUser.toJSON(),
      token: token
    })
  });
});

mongoose.connect('mongodb://localhost/psjwt');

var server = app.listen(3000, function(){
  console.log('api listening on ', server.address().port)
});