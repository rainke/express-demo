var mysql = require('mysql');
// var connection = mysql.createConnection({
//   host     : 'qdm116354292.my3w.com',
//   user     : 'qdm116354292',
//   password : 'hp900516',
//   database : 'qdm116354292_db'
// });

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'hp900516',
  database : 'test'
});
connection.connect();
connection.query('SELECT * FROM tdb_goods', function(error, ret, fields){
  if(error) throw error;
  console.log(ret);
});
connection.end();