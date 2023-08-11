//local to that file(module) only
const secret = 'SUPER SECRET'

//shared(as I can use them in multiple files)
const john = 'john1'
const peter = 'peter1'

//As module is an object and have a property called (exports) and it is also an object
//that is the way to share them between the application files
//the object that I have has a properties called (john, peter)
//if we have multiple values, we write them as object
module.exports = {john, peter}