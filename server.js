const express = require('express');

const methodOverride = require('method-override');

//initialize express
const app = express();

const bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/nonchalance', {  });

//Middleware

//bodyparser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//methodOverride
app.use(methodOverride('_method'));

//Set up handlebars
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static(__dirname + '/public'));

//end middleware

//ROUTES
require('./controllers/root.js')(app);


const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Nonchalance listening on port ${port}!`);
})
