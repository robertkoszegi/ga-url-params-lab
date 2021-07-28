var express = require('express');
var router = express.Router();
const albumCtrl = require("../controllers/albums");




/* GET users listing. */
// router.get('/albums', function(req, res, next) {
//   // res.send('<h1>Welcome to Albums page</h1>');
//   res.render('index', {title: "albums"} )
// });

router.get('/', albumCtrl.index);
router.get('/:id', albumCtrl.show);


module.exports = router;
