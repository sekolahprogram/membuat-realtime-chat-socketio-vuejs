const app = require("express")()
const server = require("http").createServer(app)
const io = require("socket.io")(server, {
    cors: {
        origin: 'https://sekolahprogram.github.io/membuat-realtime-chat-socketio-vuejs'
    }
})


io.on('connection', (socket) => {
    socket.on('send-content', (data) => {
        socket.broadcast.emit('get-content', data)
    })
})

server.listen()