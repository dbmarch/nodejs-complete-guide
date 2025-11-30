const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
// const { engine } = require('express-handlebars');

const app = express();

// Setup handlebars
// const expressHbs = require('express-handlebars');
// app.engine('hbs', engine({layoutsDir: 'views/layout', defaultLayout: 'main-layout', extname: 'hbs'}));
// app.set('view engine', 'hbs');


// Setup the view engine.
// app.set('view engine', 'pug');

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
    res.render('404', { path: '', docTitle: 'Page Not Found' });
});

app.listen(3000);
