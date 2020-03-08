const router = require('express').Router()
const {User} = require('../db/models')
const {adminOnly, userOnly, sendEmail} = require('./utils')
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
    // console.log(r)
    const {
      email,
      nickname,
      entreechoice,
      expectedcount,
      notetohost,
      notetochef
    } = req.body
    const [numUpdated, users] = await User.update(
      {
        email,
        nickname,
        entreechoice,
        expectedcount,
        notetohost,
        notetochef,
        firstTimer: false
      },
      {
        where: {id: +req.params.id},
        returning: true,
        plain: true
      }
    )
    // const emailBody = {
    //   from: process.env.GOOGLE_EMAIL_ADDRESS, // sender address
    //   to: req.body.email, // list of receivers
    //   subject: `Wedding Invitation from April & John Angland`, // Subject line
    //   // text: `${req.body.user.userName}, thank you for your order`, // plain text body
    //   html: `<b> Thank you for your order ${req.body.nickname}.
    //   Your order will be shipped to. =</b>` // html body
    // }
    sendEmail(req.body)
    res.json(users)
  } catch (err) {
    next(err)
  }
})
