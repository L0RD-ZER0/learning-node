const path = require('path');
const express = require('express');


const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

router.get('/users', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'users.html'));
});


module.exports = router;
