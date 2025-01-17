const express = require('express');
require('dotenv').config(); 
const cors = require('cors');

// import routes 
const studentRoutes = require('./routers/students/students.routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// connect to the database 
require('./database/connection');

// use api endpoints 
app.use('/api/students', studentRoutes);

app.listen (process.env.PORT,() => {
    console.log(`Server is running on port ${process.env.PORT}`);
});