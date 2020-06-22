var router = require('express').Router();
var Mock = require('mockjs')

router.get('/', (req, res, next) => {
  return res.json({
    api: '/api',
    method: 'get',
  });
});

router.get('/mock', (req, res, next) => {
  return res.json(Mock.mock({
    'boolean|1': true,
    'number|1-100': 100,
    'string|1-10': '★',
    'array|1-6': [{
      'id|+1': 1,
      'guid': '@guid',
      'datetime': '@datetime'
    }],
    'object|1-6': {
      'city1': '臺北市',
      'city2': '新北市',
      'city3': '桃園市',
      'city4': '臺中市',
      'city5': '臺南市',
      'city6': '高雄市',
    }
  }));
});

module.exports = router;
