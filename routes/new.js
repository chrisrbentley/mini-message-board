const express = require('express');
const router = express.Router();

/* GET new page. */
router.get('/', function (req, res, next) {
	console.log('reached');
	res.render('form', { test: 'test' });
});

module.exports = router;
