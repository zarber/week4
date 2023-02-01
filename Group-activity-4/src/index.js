const express = require('express');
const app = express();
require('dotenv').config();

const Note = require('./models/note')
const Cat = require('./models/cats');

app.use(express.json());

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>');
});

app.get('/api/cats', (request, response) => {
  Cat.find({}).then((cats) => {
    response.json(cats);
  });
});

app.post('/api/cats', (request, response) => {
  const body = request.body;
  console.log(body);
  if (body.name === undefined) {
    return response.status(400).json({ error: 'name is missing' });
  }

  const cat = new Cat({
    name: body.name,
    age: body.age || 1,
    color: body.color,
    country: body.country
  });

  cat.save().then((savedCat) => {
    response.json(savedCat);
  });
});

app.get('/api/cats/:id', (request, response, next) => {
  Cat.findById(request.params.id)
    .then((cats) => {
      if (cats) {
        response.json(cats);
      } else {
        response.status(404).end();
      }
    })
    .catch((error) => next(error));
});

app.delete('/api/notes/:id', (request, response, next) => {
  Note.findByIdAndRemove(request.params.id)
    .then((result) => {
      response.status(204).end();
    })
    .catch((error) => next(error));
});

app.put('/api/notes/:id', (request, response, next) => {
  const body = request.body;

  const note = {
    content: body.content,
    important: body.important,
  };

  Note.findByIdAndUpdate(request.params.id, note, { new: true })
    .then((updatedNote) => {
      response.json(updatedNote);
    })
    .catch((error) => next(error));
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
