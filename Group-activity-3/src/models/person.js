const mongoose = require('mongoose');
const Schema = mongoose.Schema
const personSchema = new Schema({
  name: {
    type: String,
  },
  number: {
    type: String,
  },
});

personSchema.create({ name: 'Arbu', age: 25})
  .then(personDoc => console.log(`Person has been found: ${personDoc}`))
  .catch(error =>
    console.log(`This person does not exit! Try again 😞 ${error}`)
  );

personSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model('Person', personSchema);
