require('dotenv').config();

const express = require('express');
const app = express();
const blogsRoute = require('./routes/blogs');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/blogs', blogsRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`App started at port ${PORT}`);
})