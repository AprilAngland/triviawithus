const router = require('express').Router()
const {Menu} = require('../db/models')
const {userOnly} = require('./utils')
module.exports = router

router.get('/', userOnly, async (req, res, next) => {
  try {
    const menus = await Menu.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      // attributes: ['id', 'email', 'type']
    })
    res.json(menus)
  } catch (err) {
    next(err)
  }
})
