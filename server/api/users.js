const router = require('express').Router()
const {User} = require('../db/models')
const {adminOnly, userOnly} = require('./utils')
module.exports = router

router.get('/', adminOnly, async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'email', 'type']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

router.put('/:id', userOnly, async (req, res, next) => {
  try {
    const [numUpdated, users] = await User.update(
      {
        ...req.body
      },
      {
        where: {id: +req.params.id},
        returning: true,
        plain: true
      }
    )
    // console.log('!!!!!!updated ')
    // console.log(users)
    res.json(users)
  } catch (err) {
    next(err)
  }
})
