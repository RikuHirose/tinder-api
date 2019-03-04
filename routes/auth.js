var express = require('express');
// var router = express.Router();
const router = require('express-promise-router')();
const facebookAuth = require('../scripts/facebookAuth.js')

router.get('/accessToken', async (req, res) => {
  
  let facebookEmail = req.query.facebookEmail
  let facebookPassword = req.query.facebookPassword

  if(!facebookEmail) { throw new Error('facebookEmail is not found') }
  else if(!facebookPassword) { throw new Error('facebookPassword is not found') }

  let facebookToken = await facebookAuth.getAccessToken(facebookEmail, facebookPassword)

  res.status(200).json({"facebookToken" : facebookToken});
});

router.get('/facebookUserId', async (req, res) => {
  
  let facebookEmail = req.query.facebookEmail
  let facebookPassword = req.query.facebookPassword

  if(!facebookEmail) { throw new Error('facebookEmail is not found') }
  else if(!facebookPassword) { throw new Error('facebookPassword is not found') }

  let facebookUserId = await facebookAuth.getFBUserId(facebookEmail, facebookPassword)

  res.status(200).json({"facebookUserId" : facebookUserId});
});

module.exports = router;
