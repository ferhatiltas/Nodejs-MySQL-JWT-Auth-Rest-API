const pool = require('../../config/database');



module.exports = {
	create: (data, callBack) => {
		pool.query(
			`insert into oc_customer(customer_id, customer_group_id, store_id, language_id, firstname, lastname, email, telephone, fax, password, salt, cart, wishlist, newsletter, address_id, custom_field, ip, status, safe, token, code, date_added) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`, [
			data.customer_id,
			data.customer_group_id,
			data.store_id,
			data.language_id,
			data.firstname,
			data.lastname,
			data.email,
			data.telephone,
			data.fax,
			data.password,
			data.salt,
			data.cart,
			data.wishlist,
			data.newsletter,
			data.address_id,
			data.custom_field,
			data.ip,
			data.status,
			data.safe,
			data.token,
			data.code,
			data.date_added
		], (error, results, fields) => {
			if (error) {
				return callBack(error);
			}
			return callBack(null, results);
		}
		);
	},
	getUsers: callBack => {

		pool.query(
			`select * from oc_customer`,
			[],
			(error, results, fields) => {
				if (error) {
					return callBack(errorr);
				}
				return callBack(null, results);
			}
		);


	},
	getUserByUserId: (id, callBack) => {

		pool.query(
			`select * from oc_customer where customer_id = ?`,
			[id],
			(error, results, fields) => {
				if (error) {
					return callBack(errorr);
				}
				return callBack(null, results);
			}
		);


	},
	updateUser: (data, callBack) => {
		pool.query(
			`update oc_customer set firstname=?, lastname=?, email =?, telephone=?, password=? where customer_id=? `,
			[
				data.firstname,
				data.lastname,
				data.email,
				data.telephone,
				data.password,
				data.customer_id
			],
			(error, results, fields) => {
				if (error) {
					return callBack(error);
				}
				return callBack(null, results);
			}
		);
	},
	deleteUser: (data, callBack) => {
		pool.query(
			`delete from oc_customer where customer_id=?`,
			[data.customer_id],
			(error, results, fields) => {
				if (error) {
					return callBack(error);
				}
				return callBack(null, results);
			}

		);

	},
	getUserByUserEmail: (email, callBack) => {
		pool.query(
			`select * from oc_customer where email=?`,
			[email],
			(error, results, fields) => {
				if (error) {
					return callBack(error);

				}
				return callBack(null, results[0]);
			}
		);
	}
};