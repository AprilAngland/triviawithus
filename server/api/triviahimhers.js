const router = require('express').Router()
const {User} = require('../db/models')
const {adminOnly} = require('./utils')
const {TriviaHimHer} = require('../db/models')
module.exports = router

router.get('/', adminOnly, async (req, res, next) => {
  try {
    const triviahimhers = await TriviaHimHer.findAll({})
    res.json(triviahimhers)
  } catch (err) {
    next(err)
  }
})
