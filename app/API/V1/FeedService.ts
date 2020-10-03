import express from 'express'

const router: express.Router = express.Router();

// const express = require('express');
// const redis = require('redis');
// const model = require('../../models/feed.js');
//
// const client = redis.createClient(6379, 'redis');
// const { Feed } = model;
// const router = express.Router();
//
// router.post('/put/:id', async (req, res) => {
//     try {
//         client.hgetall(req.headers.authorization.slice(7), async (err, result) => {
//             const { username } = result;
//             const { comment } = req.body;
//             const feeds = await Feed.findById(req.params.id);
//             if (err) {
//                 res.status(401).send('Unauthorized');
//             } else if (feeds) {
//                 feeds.comment.push({ commentId: username, text: comment });
//                 feeds.save();
//                 res.status(200).json(feeds.comment);
//             } else {
//                 res.status(404).json({ error: 'BadRequest' });
//             }
//         });
//     } catch (err) {
//         console.error(err);
//         res.status(400).json({ error: 'BadRequest' });
//     }
// });
//
// router.post('/del/:id', async (req, res) => {
//     try {
//         client.hgetall(req.headers.authorization.slice(7), async (err, result) => {
//             const { _id } = req.body;
//             const feeds = await Feed.findById(req.params.id);
//             if (err) {
//                 res.status(401).send('Unauthorized');
//             } else if (feeds) {
//                 feeds.comment.pull({ _id });
//                 feeds.save();
//                 res.status(200).json(feeds.comment);
//             } else {
//                 res.status(404).json({ error: 'BadRequest' });
//             }
//         });
//     } catch (err) {
//         console.error(err);
//         res.status(400).json({ error: 'BadRequest' });
//     }
// });
//
// module.exports = router;
//


//main route
router.get('/main', (req,res) => {
    res.send('BYE!!adfssdfssv Maindsfasdf!!')
})


router.get('/kim', (req,res) => {
    res.send('Hi!! rasfsfrri!!')
})
//end route
router.get('/end', function(req,res) {
    res.send('Hi!! end!!')
})

export default router