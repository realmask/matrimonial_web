
const mysql   = require("mysql");
const express = require("express");
const md5 = require("MD5");
const connection = require("../database");


 let addNewUser = function(req,res, next){
 	let date = new Date();
    let post  = {
      first_name:req.body.first_name,
      last_name:req.body.last_name,
      email:req.body.email,
      password:md5(req.body.password),
      date_of_birth:req.body.date_of_birth,
      phone_number:req.body.phone_number,
      address_city:req.body.address_city,
      address_state:req.body.address_state,
      address_code:req.body.address_code,
      college:req.body.college
      
  };
  console.log(post);
  		let query = "SELECT email FROM ?? WHERE ??=?";

		let table = ["users", "email", post.email];

		query = mysql.format(query,table);

		connection.query(query,function(err,rows){
		if(err) {
			res.json({"Error" : true, "Message" : "Error executing MySQL query"});
		}
		else {

		if(rows.length==0){

			let query = "INSERT INTO  ?? SET  ?";
			let table = ["users"];
			query = mysql.format(query,table);
			connection.query(query, post, function(err,rows){
				if(err) {
					res.json({"Error" : true, "Message" : "Error executing MySQL query"});
				} else {
					res.json({"Error" : false, "Message" : "Success"});
				}
			});

		}
		else{
			res.json({"Error" : false, "Message" : "Email Id already registered"});
		}
		}
    });
	}

   module.exports = addNewUser;


