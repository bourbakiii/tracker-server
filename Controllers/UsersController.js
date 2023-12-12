// const UserModelCreator = require('../models/user.js');
const {User} = require('../models');
const {genSalt, hash, compare} = require("bcrypt");
const {generatepasswordSalt} = require("../helpers/hash");
const passwordSalt = require("../helpers/hash");


class UsersController {
    static async create(req,res){
        try{
            const user = await User.create(req.body);
            delete user.dataValues.password;
            res.send(user);
        }
        catch (exception){
            res.status(409).json({message: exception.errors?.[0]?.message});
        }
    }
    static async login(req,res){
        try {
            return res.send(hash(req.body.password, passwordSalt));

            const user = await User.findOne({ email: req.body.email });
            delete user.dataValues.password;

            res.send(user);

            res.send(Boolean(compare(req.body.password,user.password)));
            if (!user ||  compare(req.body.password,user.password)) throw {"message": "Wrong login or password"}
            res.send(user);
        }
        catch (exception){
            console.log("the exception");
            console.log(exception);
            res.status(404).json({message: exception?.message || exception.errors?.[0]?.message});
        }
    }
}

module.exports = UsersController;

