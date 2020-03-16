const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
router.use('/setups', require('./setups'))
router.use('/menus', require('./menus'))
router.use('/triviahimhers', require('./triviahimhers'))
router.use('/triviaguessnumbers', require('./triviaguessnumbers'))
router.use('/triviamultichoices', require('./triviamultichoices'))
router.use('/triviatruefalses', require('./triviatruefalses'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
