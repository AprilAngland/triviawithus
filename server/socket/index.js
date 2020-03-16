const {Setup} = require('../db/models')

module.exports = async io => {
  io.on('connection', socket => {
    console.log(`A socket connection to the server has been made: ${socket.id}`)

    socket.on('FromHost', async question => {
      socket.broadcast.emit('ToGuest', question)
      const [setup] = await Setup.findOrCreate({
        where: {id: 1}
      })
      setup.update({
        curQuestion: JSON.stringify({
          text: question.text,
          translation: question.translation,
          displayType: question.displayType,
          questionType: question.questionType
        })
      })
    })

    socket.on('ResetUserFromHost', () => {
      socket.broadcast.emit('ResetUserToGuest')
    })

    socket.on('SuspendQuestionFromHost', () => {
      socket.broadcast.emit('SuspendQuestionToGuest')
    })

    socket.on('ResumeQuestionFromHost', () => {
      socket.broadcast.emit('ResumeQuestionToGuest')
    })
    socket.on('AnswerFromGuest', user => {
      socket.broadcast.emit('AnswerToHost', user)
    })

    socket.on('disconnect', () => {
      console.log(`Connection ${socket.id} has left the building`)
    })
  })
}
