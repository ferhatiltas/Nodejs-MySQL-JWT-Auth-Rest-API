const { createPool } = require('mysql');
const mysql  = require('mysql');

let pool;

if (process.env.JAWSDB_URL) {
	pool=mysql.createConnection(process.env.JAWSDB_URL);

} else {
	 pool = createPool({
		host: process.env.DB_HOST,
		user: process.env.DB_USER,
		password: process.env.DB_PASS,
		database: process.env.MYSQL_DB,
	});
}


module.exports = pool;

