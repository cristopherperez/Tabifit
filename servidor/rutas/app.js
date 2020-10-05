const express = require('express');

const app = express();

app.get('/api', (req, res, next) => {
    res.status(200).json({
        ok: true,
        message: 'Success'
    })
});

module.exports = app;