// Test authorisation
const mysql   = require("mysql");
const express = require("express");
const jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
const connection = require("../database");

let findAllUsers = function (req, res) {

	let query = "SELECT * FROM ?? ";

    let table = ["users"];

    query = mysql.format(query,table);

    connection.query(query,function(err,rows){
        if(err) {
            res.json({"Error" : true, "Message" : "Error executing MySQL query"});
        } else {
            res.json({"Error" : false, "Message" : "Success", "Users" : rows});
        }
    });
};
module.exports = findAllUsers;