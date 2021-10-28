const express = require('express');
const Router = express.Router();
const dbCon = require('../connection');

Router.get("/" , (req, res) =>{
    dbCon.query("SELECT * FROM employee" , (error, results, fields)=>{
        if(!error){
            let message = "";
            if(results === undefined || results.length == 0){
                message = "No data"
            }else{
                message = "Success got data"
            }

            return res.status(200).send({error: false, data: results, message: message});
        }
        else throw error;
    })
});

module.exports = Router