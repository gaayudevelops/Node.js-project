
const express = require('express');

const sequelize= require('./util/database');

const cors = require('cors');

const app = express();
app.use(cors());

const candyRoutes = require('./routes/candy');

app.use(express.json());

app.use('/candy', candyRoutes);

sequelize.sync()
.then(app.listen(3000))
.catch(err=> console.log(err));