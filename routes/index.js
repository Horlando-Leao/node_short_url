var express = require('express');
var router = express.Router();
const Link = require('../models/links');

router.get('/list', async(req, res, next) =>{
  const code = req.params.code;

  const result = await Link.findAll({});
  if(!result){
    return res.sendStatus(404);
  }
  res.render('listUrls', data = [result, result.dataValues]);
});


router.get('/:code/stats', async(req, res, next) =>{
  const code = req.params.code;

  const result = await Link.findOne({where: {code}})
  if(!result){
    return res.sendStatus(404);
  }
  res.render('stats', result.dataValues);
});


router.get('/:code', async (req, res, next) =>{
  const code = req.params.code;

  const result = await Link.findOne({where: {code}})
  if(!result){
    return res.sendStatus(404);
  }
  result.hits++;
  await result.save();

  res.redirect(result.url);
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Encurtador de URL' });
});

/* POST NEW LINK */
router.post('/new', async (req, res, next) => {
  const url = req.body.url;

  //const domain = 'http://localhost:3000/';
  const code = generateURL();
  
  const result = await Link.create({
    url,
    code
  });
  
  res.render('stats', result.dataValues);
  //res.send(result.dataValues)
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



