const express = require('express');
const connectToDatabase = require('./Sequelize');
const dotenv = require('dotenv');
const createTestUser = require("./Controllers/UsersController");
const Joi = require('joi');
const registrationSchema = require('./JOISchemas/AuthSchemas');
const Validator = require("./validation/Validator");
const UsersController = require("./Controllers/UsersController");
dotenv.config();

const app = express()
const port = 3000
const $Validator = new Validator();

app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello World!')
})
// Option 3: Passing parameters separately (other dialects)

app.post('/auth/sign-up', $Validator.validate(registrationSchema), UsersController.create);



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    connectToDatabase();
})
