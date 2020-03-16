const router = require('express').Router()
const {Setup} = require('../db/models')
const {adminOnly, userOnly, sendEmail} = require('./utils')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const [setup] = await Setup.findOrCreate({
      where: {id: 1}
    })
    res.json(JSON.parse(setup.curQuestion))
    // res.json(setup)
  } catch (err) {
    next(err)
  }
})

router.put('/', adminOnly, async (req, res, next) => {
  try {
    const [setup] = await Setup.findOrCreate({
      where: {id: 1}
    })

    console.log(JSON.stringify(req.body))
    setup.update({
      curQuestion: JSON.stringify(req.body)
    })
    res.json(setup)
  } catch (err) {
    next(err)
  }
})
