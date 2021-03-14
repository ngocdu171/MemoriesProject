import express from 'express';
import mongoose from 'mongoose';
import PostModel from '../models/postModel.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const post = await PostModel.find();
        res.status(200).json(post);
    }
    catch (err) {
        res.status(404).json({message: err});
    }
});

router.post('/', async (req, res) => {
    const post = req.body;
    const newPost = new PostModel(post);
    try {
        await newPost.save();
        res.status(201).json(newPost);
    }
    catch (err) {
        res.status(409).json({message: err});
    }
});

router.put('/:_id', async (req, res) => {
    const post = req.body;
    if(!req.params._id) {
        return res.status(404).send("No post with id");
    }
    else {
        await PostModel.findByIdAndUpdate(req.params._id, post)
        .then(results => {
            res.json(results);
        })
        .catch(err => {
            res.json(err);
        })
    }
})

export default router;