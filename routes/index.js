var express = require('express');
var router = express.Router();
const Link = require('../models/links');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Encurtador de URL' });
});

/* POST NEW LINK */
router.post('/new', async (req, res, next) => {
  const url = req.body.url;

  const domain = 'http://localhost:3000/';
  const code = generateURL();
  
  const result = await Link.create({
    url,
    code
  });

  res.render('stats', result);
  //res.send(domain+code);
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



