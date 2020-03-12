module.exports = io => {
  io.on('connection', socket => {
    console.log(`A socket connection to the server has been made: ${socket.id}`)

    socket.on('FromHost', question => {
      console.log('socket ==ToGuest== served from host to guest', question)
      socket.broadcast.emit('ToGuest', question)
    })

    socket.on('ResetUserFromHost', () => {
      // console.log('socket ==ResetUserToGuest== served from host to guest')
      socket.broadcast.emit('ResetUserToGuest')
    })

    socket.on('SuspendQuestionFromHost', () => {
      // console.log(
      //   'socket ==SuspendQuestionFromHost== served from host to guest'
      // )
      socket.broadcast.emit('SuspendQuestionToGuest')
    })

    socket.on('disconnect', () => {
      console.log(`Connection ${socket.id} has left the building`)
    })
  })
}
