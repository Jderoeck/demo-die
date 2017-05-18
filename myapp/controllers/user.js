const User = require('./../models/user.js');

function createUser(req, res, next) {
    console.log(req.body);
    const user = new User(req.body);

    user.save((err, result) => {
        if (err) {
            return next(err);
        }
        res.json(result);
    });
}

function listUsers (req, res, next) {
    const user = new User({firtname:'Marten', lastname:'Felis', imageUrl:'test'})
    user.save((err, result)=>{
        User
            .find()
            .exec((err, users) => {
                if (err) {
                    return next(err);
                }
                console.log(users);
                res.render('index', {users:users});
            });
    });



}

function readUser(req, res) {
    res.json(req.user);
}

function updateUser(req, res, next) {
    const body = req.body;

    // Object.assign is ES6 notation to merge 2 objects)
    const updatedUser = Object.assign(req.user, body);

    // save the changed user
    updatedUser.save((err, result) => {
        if (err) {
            return next(err);
        }

        return res.json(result);
    });
}

function removeUser(req, res, next) {
    const id = req.params.userId;
    req.user.remove((err) => {
        if (err) {
            return next(err);
        }
        return res.status(204).send();
    });
}

function findById(req, res, next, id) {
    User
        .findById(id)
        .exec((err, user) => {
            if (err) {
                return next(err);
            }

            if (!user) {
                return next({
                    name: 'UnknownEntityError',
                    message: `Unknown User ${id}`
                });
            }

            req.user = user;
            return next();
        });
}

module.exports = {
    create: createUser,
    list: listUsers,
    read: readUser,
    update: updateUser,
    remove: removeUser,
    findById: findById
}