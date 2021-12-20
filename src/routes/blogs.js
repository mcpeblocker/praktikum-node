const express = require('express');

const blogsRouter = express.Router();

const blogs = [];

blogsRouter.get('/', (req, res) => {
    res.send(blogs);
});

blogsRouter.post('/', (req, res) => {
    const blog = req.body;
    blogs.push(blog);
    res.send(blog);
});

blogsRouter.get('/:id', (req, res) => {
    const id = req.params.id;
    res.send(blogs[id]);
});

blogsRouter.put('/:id', (req, res) => {
    const id = req.params.id;
    blogs[id] = req.body;
    res.send(blogs[id]);
});

blogsRouter.delete('/:id', (req, res) => {
    const id = req.params.id;
    blogs.splice(id, 1);
    res.send(blogs);
});

module.exports = blogsRouter;