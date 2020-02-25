const router = require('express').Router()
const {User} = require('../db/models')
const {adminOnly} = require('./utils')
const {TriviaGuessNumber} = require('../db/models')
module.exports = router

router.get('/', adminOnly, async (req, res, next) => {
  try {
    const triviaguessnumbers = await TriviaGuessNumber.findAll({})
    res.json(triviaguessnumbers)
  } catch (err) {
    next(err)
  }
})
