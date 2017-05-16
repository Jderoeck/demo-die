var express = require('express');
const users = require('../controllers/user');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //console.log('test');
  //console.log('users', users.list);
  //res.render('index', {users: users.list});
  users.list(req, res, next);
});

router.get('/user', function(req, res, next) {
  res.render('user', { title: 'Demo or die' });
});

/*router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});*/

module.exports = router;



/*

module.exports = function getRouter(app) {
    const router = new express.Router();

    router.route('/')
        .get(users.list)
        .post(users.create);

    router.route('/:userId')
        .get(users.read)
        .put(users.update)
        .delete(users.remove);

    router.param('userId', users.findById);

    // Register our routes
    app.use('/api/v1/users', router);
};*/
