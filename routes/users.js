/*Route Users file*/

//First, it loads the express module and uses it to get an express.Router object
var express = require('express');
var router = express.Router();

//Then it specifies a route on that object
/* GET users listing. */
router.get('/', function(req, res, next) {
  //that route renders a string response (res.send() in a format other than JSON
  res.send('respond with a resource');
});

//Exports the router from the module (this is what allows the file to be imported into app.js).
module.exports = router;
