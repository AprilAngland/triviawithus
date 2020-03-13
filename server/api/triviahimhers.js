const router = require('express').Router()
const {adminOnly, userOnly} = require('./utils')
const {TriviaHimHer, TriviaHimHerVote, User} = require('../db/models')

module.exports = router

router.get('/', adminOnly, async (req, res, next) => {
  try {
    const triviahimhers = await TriviaHimHer.findAll({})
    res.json(triviahimhers)
  } catch (err) {
    next(err)
  }
})

router.get('/winner', adminOnly, async (req, res, next) => {
  try {
    const triviahimhers = await User.findAll({
      include: [{model: TriviaHimHer}]
    })
    const userCorrectCount = triviahimhers.map(user => ({
      id: user.id,
      nickName: user.nickname,
      email: user.email,
      count: user.triviahimhers.filter(
        entry => entry.triviahimhervote.correct === true
      ).length
    }))
    const maxCorrect = userCorrectCount[0].count
    const winners = userCorrectCount
      .filter(user => user.count === maxCorrect)
      .sort((a, b) => b.count - a.count)
    res.json(winners)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', adminOnly, async (req, res, next) => {
  try {
    const triviahimher = await TriviaHimHer.findAll({
      include: [{model: User, through: {attributes: ['ans']}}],
      where: {id: req.params.id}
    })
    let resObj = triviahimher[0]
    resObj.ansCntHim = resObj.users.filter(
      user => user.triviahimhervote.ans === 'Him'
    ).length
    resObj.ansCntHer = resObj.users.filter(
      user => user.triviahimhervote.ans === 'Her'
    ).length
    resObj.save()
    res.json(resObj)
  } catch (err) {
    next(err)
  }
})

router.put('/:id', userOnly, async (req, res, next) => {
  try {
    const questionToUpdate = await TriviaHimHer.findByPk(+req.params.id)
    const user = await User.findByPk(req.query.userId)

    questionToUpdate.addUser(user, {
      through: {
        ans: req.query.ans,
        correct: questionToUpdate.ans === req.query.ans
      }
    })

    res.json({})
  } catch (err) {
    next(err)
  }
})

router.delete('/', adminOnly, async (req, res, next) => {
  try {
    const triviahimhers = await TriviaHimHer.findAll({})
    const users = await User.findAll({})
    for (const triviahimher of triviahimhers) {
      triviahimher.ansCntHer = 0
      triviahimher.ansCntHim = 0
      triviahimher.save()
      for (const user of users) {
        triviahimher.removeUser(user)
        user.removeTriviahimher(triviahimher)
      }
    }

    res.json({})
  } catch (err) {
    next(err)
  }
})
