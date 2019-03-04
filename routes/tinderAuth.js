var express = require('express');
// var router = express.Router();
const router = require('express-promise-router')();
const tinderAuth = require('../scripts/tinderAuth.js')

router.get('/', async (req, res) => {
  
  let facebookEmail = req.query.facebookEmail
  let facebookPassword = req.query.facebookPassword

  if(!facebookEmail) { throw new Error('facebookEmail is not found') }
  else if(!facebookPassword) { throw new Error('facebookPassword is not found') }

  let facebookToken = await tinderAuth.getAccessToken(facebookEmail, facebookPassword)

  res.status(200).json({"facebookToken" : facebookToken});
});

module.exports = router;
