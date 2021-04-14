
const mysql   = require("mysql");
const express = require("express");
const md5 = require("MD5");
const jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
const connection = require("../database"); // get our config file


const userLoginCheck = function (req, res) {

	const post  = {
		password:req.body.password,
		email:req.body.email
	}

	let query = "SELECT * FROM ?? WHERE ??=? AND ??=?";

	let table = ["users","password",  md5(post.password), "email", post.email];

	query = mysql.format(query,table);

	connection.query(query,function(err,rows){
		if(err) {
			res.json({"Error" : true, "Message" : "Error executing MySQL query"});
		}
		else {

			if(rows.length==1){
				let token = jwt.sign(rows, process.env.TOKEN_SECRET, {
					expiresIn: 1440
				});
				user_id= rows[0].user_Id;
				let data  = {
					user_id:rows[0].user_Id,
					access_token:token
				}
				res.json({
							success: true,
							message: 'Token generated',
							token: token,
							currUser: user_id
						});
				
			}
			else {
				res.json({"Error" : true, "Message" : "wrong email/password combination"});
			}

		}
	});
}

module.exports = userLoginCheck;


