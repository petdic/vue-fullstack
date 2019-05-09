const express = require("express");
const mongodb = require("mongodb");

const router = express.Router();

// Get Posts
router.get('/', async (req,res) => {
    const posts = await loadPostsCollection();
    res.send(await posts.find({}).toArray());
});

// Add Post

// Delete Post



async function loadPostsCollection() {
    const client = await mongodb.MongoClient.connect(`mongodb+srv://peter123:peter123@cluster0-pyise.mongodb.net/test?retryWrites=true`, {
        useNewUrlParser: true
    });

    return client.db('Cluster0').collection('posts');
}

module.exports = router;