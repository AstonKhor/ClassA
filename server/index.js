const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./routes/routes.js');
let port = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', express.static(path.join(__dirname, '../client/dist')));

app.get('/classes', routes.getClasses);

app.post('/classes', routes.postClasses);

app.patch('/classes', routes.patchClasses);

app.get('user', routes.getUser);

app.post('user', routes.postUser);

app.patch('user', routes.patchUser);

app.listen(port, () => { console.log(`Now listening on port ${port}`)})