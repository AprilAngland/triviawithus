const router = require('express').Router()
const {User} = require('../db/models')
const {adminOnly} = require('./utils')
const {TriviaMultiChoice} = require('../db/models')
module.exports = router

router.get('/', adminOnly, async (req, res, next) => {
  try {
    const triviamultichoices = await TriviaMultiChoice.findAll({})
    res.json(triviamultichoices)
  } catch (err) {
    next(err)
  }
})
