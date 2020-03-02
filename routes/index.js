/*Route Index file*/

//First, it loads the express module and uses it to get an express.Router object
var express = require('express');
var router = express.Router();

//Then it specifies a route on that object
/* GET home page. */
router.get('/', function(req, res, next) {
  //that route renders a response using the template (res.render) "index" passing the template variable "title
  //res.render('index', { title: 'Express' });
  res.redirect('/catalog');
});

//Exports the router from the module (this is what allows the file to be imported into app.js).
module.exports = router;
