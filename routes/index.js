var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Encurtador de URL' });
});

/* GET home page. */
router.post('/new', function(req, res, next) {
  const url = req.body.url;

  const domain = 'http://localhost:3000/';
  const code = generateURL();
  
  res.send(domain+code);
});




//FUNCTIONS
function generateURL() {

  var text = "";
  const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
  for (let index = 0; index < 5; index++){
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}
module.exports = router;



