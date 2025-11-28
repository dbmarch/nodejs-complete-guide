const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/cat', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'cat.html'));
});

module.exports = router;
