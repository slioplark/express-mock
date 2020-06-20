var router = require('express').Router();

router.get('/', (req, res, next) => {
  return res.json({
    api: '/api/test',
    method: 'get',
  });
});

module.exports = router;
