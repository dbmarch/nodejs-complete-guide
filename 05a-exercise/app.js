const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

const homeRoutes = require('./routes/home')
const catRoutes = require ('./routes/cat');
const dogRoutes = require('./routes/dog');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(homeRoutes);
app.use(catRoutes);
app.use(dogRoutes);


app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);
