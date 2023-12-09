const express = require('express');
const connectToDatabase = require('./Sequelize');
const dotenv = require('dotenv');
const createTestUser = require("./controllers/UsersController");
dotenv.config();

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})
// Option 3: Passing parameters separately (other dialects)

app.post('/create-user', (req,res)=>{
    res.send(JSON.stringify(createTestUser()));
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    connectToDatabase();
})
