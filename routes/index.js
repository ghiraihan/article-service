var express = require('express');
var router = express.Router();

// import controller
const { ArticleController } = require('../controllers/ArticleController');
const { AuthController } = require('../controllers/AuthController')
const { FileController } = require('../controllers/FileController')

// import middlleware
const { AuthorizationCheck } = require('../lib/AuthorizationCheck')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* ARTICLE API */
router.get('/article/get', AuthorizationCheck, ArticleController.getArticle);
router.post('/article/insert', ArticleController.insertArticle);

/* FILE MANAGEMENT */
router.post('/file/upload', FileController.uploadAndSaveFile);
router.get('/file/download/:filename', FileController.downloadFile)

/* AUTH API */
router.post('/login', AuthController.login);

router.get('/maps', (req, res) => res.render('maps'))

module.exports = router;
