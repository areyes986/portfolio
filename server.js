'use strict';

const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3001;
require('ejs');
const pg = require('pg');
const client = new pg.Client(process.env.DATABASE_URL);
const defaults = require('./middleware.js');

app.set('view engine', 'ejs');
app.use(express.static('./public'));

///////// routes ///////////
app.use('/', renderProjects);

function renderProjects(request, response){
  response.status(200).render('./index');
}


app.use('*', defaults.notfoundHandler);
app.use(defaults.errorHandler);

client.connect()
  .then(() => {
    app.listen(PORT, () => (console.log(`We are listening on ${PORT}`)));
  })
  .catch(err => console.log('Uh oh!', err));


module.exports = {
  server: app,
};

