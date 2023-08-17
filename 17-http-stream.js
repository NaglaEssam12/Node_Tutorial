var http = require('http')
var fs = require('fs')

http
  .createServer(function (req, res) {
    //the data that sent to the server is sent as the whole file not splitted into chunks
    // const text = fs.readFileSync('./content/big.txt', 'utf8')
    // res.end(text)
    const fileStream = fs.createReadStream('./content/big.txt', 'utf8')
    fileStream.on('open', () => {
        //it will send the res to the browser as chunks of data not the file as a whole
      fileStream.pipe(res)
    })
    fileStream.on('error', (err) => {
      res.end(err)
    })
  })
  .listen(5000)