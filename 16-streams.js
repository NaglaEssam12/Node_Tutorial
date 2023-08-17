const { createReadStream } = require('fs')

// default 64kb
// last buffer - remainder
// highWaterMark - control size of the buffer each buffer will be with that size and the last one its size will be the remainder
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 })
// const stream = createReadStream('../content/big.txt', { encoding: 'utf8' })
const stream = createReadStream('./content/big.txt')

//now we are reading data in chunks
stream.on('data', (result) => {
  console.log(result)
})
stream.on('error', (err) => console.log(err))