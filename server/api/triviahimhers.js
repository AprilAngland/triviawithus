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
      // include: [{model: Product, through: {attributes: ['quantity']}}], /
      // attributes: ['userId']
    })
    const userCorrectCount = triviahimhers.map(user => ({
      id: user.id,
      nickName: user.nickname,
      count: user.triviahimhers.length
    }))
    const maxCorrect = userCorrectCount[0].count
    const winners = userCorrectCount
      .filter(user => user.count === maxCorrect)
      .sort((a, b) => b.count - a.count)
    // res.json(triviahimhers)
    // res.json(userCorrectCount)
    res.json(winners)
    // res.json({name: 'winnerName'})
  } catch (err) {
    next(err)
  }
})

router.get('/:id', adminOnly, async (req, res, next) => {
  try {
    const triviahimher = await TriviaHimHer.findAll({
      include: [{model: User}],
      where: {id: req.params.id}
    })
    res.json(triviahimher[0])
  } catch (err) {
    next(err)
  }
})

router.put('/:id', userOnly, async (req, res, next) => {
  try {
    const questionToUpdate = await TriviaHimHer.findByPk(+req.params.id)
    const user = await User.findByPk(req.query.userId)
    let ansCntHim = questionToUpdate.ansCntHim
    let ansCntHer = questionToUpdate.ansCntHer
    let ans = questionToUpdate.ans
    if (req.query.ans === 'her') {
      ansCntHer++
    }
    if (req.query.ans === 'him') {
      ansCntHim++
    }
    if (req.query.ans === ans) {
      questionToUpdate.addUser([user])
    }
    questionToUpdate.update({
      ansCntHim,
      ansCntHer
    })
    res.json({})
    // }
  } catch (err) {
    next(err)
  }
})

router.delete('/', adminOnly, async (req, res, next) => {
  try {
    const [numUpdated, affectedRows] = await TriviaHimHer.update(
      {
        ansCntHim: 0,
        ansCntHer: 0
      },
      {
        where: {},
        returning: true,
        plain: true
      }
    )
    const triviahimhers = await TriviaHimHer.findAll({})
    const users = await User.findAll({})
    for (const triviahimher of triviahimhers) {
      for (const user of users) {
        triviahimher.removeUser(user)
        user.removeTriviahimher(triviahimher)
      }
    }
    res.json(affectedRows)
  } catch (err) {
    next(err)
  }
})
