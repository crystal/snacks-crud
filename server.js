'use strict';

const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const methodOverride = require('method-override');
require('ejs');
// require knex

const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

app.get('/', (req, res) => {
  res.send('plain text yo!')
})


app.listen(PORT, ()=> {
  console.log('listening on', PORT);
})

module.exports = app;
