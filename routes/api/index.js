var router = require('express').Router();

router.use('/', (req, res, next) => {
  res.json({
    title: 'Express'
  });
});

module.exports = router;
