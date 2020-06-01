const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./routes/routes.js');
let port = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', express.static(path.join(__dirname, '../client/dist')));

app.get('/checkSession', routes.checkSession);

app.listen(port, () => { console.log(`Now listening on port ${port}`)})