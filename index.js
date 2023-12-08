import $auth_router from './auth/router.js';
import express from 'express';
import {Sequelize} from "sequelize";
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.use($auth_router);
// Option 3: Passing parameters separately (other dialects)
const $SequelizeConnection = new Sequelize('tracker', 'postgres', 'root', {
    host: 'localhost',
    dialect: 'postgres'
});
try {
    await $SequelizeConnection.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
