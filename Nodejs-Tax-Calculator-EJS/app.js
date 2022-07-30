const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const personRoutes = require('./routes/person');
const bankRoutes = require('./routes/bank');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/person', personRoutes);
app.use(bankRoutes);

app.use((req, res, next) => {
    res.status(404).render('404', { pageTitle: 'Page Not Found' });
  });

app.listen(5500, () => {
    console.log('Start listening at Port 5500')
})
