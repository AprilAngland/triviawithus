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

router.get('/:id', adminOnly, async (req, res, next) => {
  try {
    const triviahimher = await TriviaHimHer.findAll({
      where: {id: req.params.id}
    })
    res.json(triviahimher[0])
  } catch (err) {
    next(err)
  }
})
