const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset,
    });
  } else {
    //Return all users
    res.send('no hay query params');
  }
});
module.exports = router;
