var express = require('express');

var api = express();

api.on('mount', (parent) => {
  // console.log(parent);
});
api.all('*', function(req, res, next) {
  // 此处做api授权验证
  console.log(req.app === api);
  next();
})
api.use('/', require('./routers/api'));



module.exports = api;