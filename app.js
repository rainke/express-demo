var express = require('express');
var app = express();
var swig = require('swig');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var api = require('./api');
app.use('/static', express.static(__dirname + '/public'))

app.engine('html', swig.renderFile);
app.set('views', './views');
app.set('view engine', 'html');
swig.setDefaults({cache: false});

app.locals.title = 'hepeng\'s app';
app.locals.email = 'woshihepeng520@163.com';

app.use(bodyParser.urlencoded({extended:true}));

app.use('/admin', require('./routers/admin'));
app.use('/api', api);
app.use('/', require('./routers/main'));
// mongoose.connect('mongodb://localhost:27017/blog', function(err) {
//     if(err) {
//         console.log('连接失败');
//     } else {
//         console.log('连接成功');
//         app.listen(8081);
//     }
// });



app.use((req, res) => {
  res.status(404).send('not found');
});
app.use((err,req,res,next) => {
  res.status(500).send('Something broke!');
})





app.listen(8081, () => {
  console.log('the server starts on port 8081')
});