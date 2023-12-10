// const UserModelCreator = require('../models/user.js');
const {User} = require('../models');


class UsersController {
    static async create(req,res){
        try{
            const user = await User.create(req.body);
            console.log("THE USER", user);
            res.send(user);
        }
        catch (exception){
            res.status(409).json({message: exception.errors?.[0]?.message});
        }
    }
    static async login(req,res){
        // try{
        //     const user = await User.create(req.body);
        //     console.log("THE USER", user);
        //     res.send(user);
        // }
        // catch (exception){
        //     res.status(409).json({message: exception.errors?.[0]?.message});
        // }
    }
}

module.exports = UsersController;

