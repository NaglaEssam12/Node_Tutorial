const http = require('http')

// const server = http.createServer((req, res) => {
//   res.end('Welcome')
// })

// Using Event Emitter API
const server = http.createServer()
// emits request event
// subcribe to it / listen for it / respond to it
//The name of the event in this case must be 'request'
//by this server instance knows the event that i have created and it can emits it behind the scence
server.on('request', (req, res) => {
  res.end('Welcome')
})

server.listen(5000)