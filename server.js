'use strict';

const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const methodOverride = require('method-override');
const snacksRoute = require('./routes/snacks')
require('ejs');
// require knex

const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use(express.static(__dirname + "/public"));
app.use(methodOverride('_method'))
app.use('/snacks', snacksRoute);

app.get('/', (req, res) => {
  res.redirect('/snacks')
});



app.listen(PORT, ()=> {
  console.log('listening on', PORT);
})

module.exports = app;
