const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true}).catch(console.error);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

//routes
const homeRouter = require('./routes/home');
const userRouter = require('./routes/user');
const postRouter = require('./routes/post');

app.use('/', homeRouter);
app.use('/user', userRouter);
app.use('/posts', postRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});