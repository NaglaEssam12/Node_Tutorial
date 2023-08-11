//The alternative way to use exports
//That means as exports is an object, so we have now a property called (items)
module.exports.items = ['item1', 'item2'];
const person = {
    name: 'bob',
}

module.exports.singlePerson = person;

// that is equal
// module.exports = {items, person}