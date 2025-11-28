const express = require('express');
const path = require('path');
const rootDir = require('../util/path');
const router = express.Router();

router.get('/dog', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'dog.html'));
});

module.exports = router;
