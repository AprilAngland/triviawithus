const router = require('express').Router()
const {User} = require('../db/models')
const {adminOnly} = require('./utils')
const {TriviaTrueFalse} = require('../db/models')
module.exports = router

router.get('/', adminOnly, async (req, res, next) => {
  try {
    const triviatruefalses = await TriviaTrueFalse.findAll({})
    res.json(triviatruefalses)
  } catch (err) {
    next(err)
  }
})
