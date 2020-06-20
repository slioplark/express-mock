var router = require('express').Router();
var Mock = require('mockjs')

router.get('/', (req, res, next) => {
  return res.json({
    api: '/api/test',
    method: 'get',
  });
});

router.get('/mock', (req, res, next) => {
  return res.json(Mock.mock({
    'list|1-10': [{
      'id|+1': 1
    }]
  }));
});

module.exports = router;
