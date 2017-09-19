const app = require('./config.js');
const path = require('path');
const parseController = require('./controllers/parser.js');
const changesController = require('./controllers/handleChanges.js');

app.get('/api/page', parseController.handler);

app.get('/api/changes', changesController.list);
app.post('/api/changes/add', changesController.add);
app.put('/api/changes/:id', changesController.approve);
app.delete('/api/changes/:id', changesController.delete);