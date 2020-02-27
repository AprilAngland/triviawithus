module.exports = io => {
  io.on('connection', socket => {
    console.log(`A socket connection to the server has been made: ${socket.id}`)

    // socket.on('chat', question => {
    //   console.log('socket is emitting question in the front end')
    //   console.log(question)
    //   // io.sockets.emit('chat2', {})
    // })

    socket.on('FromHost', question => {
      console.log('FromHost')
      console.log(question)
      socket.broadcast.emit('ToGuest', question)
    })

    socket.on('disconnect', () => {
      console.log(`Connection ${socket.id} has left the building`)
    })
  })
}
