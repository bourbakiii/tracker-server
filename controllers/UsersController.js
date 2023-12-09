// const UserModelCreator = require('../models/user.js');
const {User} = require('../models');
async function createTestUser(req,res){
    return User.create({ email: "some_email", name:"user_name", surname:"user_surname", password:"Password" });
}
module.exports = createTestUser;
