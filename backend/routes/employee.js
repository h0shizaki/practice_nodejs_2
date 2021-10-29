const e = require('express');
const express = require('express');
const Router = express.Router();
const dbCon = require('../connection');

Router.get("/" , (req, res) =>{
    console.log("Get");
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

Router.post("/", (req, res)=>{
    console.log("Post");
    let fname = req.body.fname;
    let lname = req.body.lname;
    let role = req.body.role;
    let salary = req.body.salary;

    if(!fname || !lname || !role || !salary){
        return res.status(400).send({ error: true, message: "Please add data." });
    }
    else{
        dbCon.query("INSERT INTO employee (firstname, lastname, role, salary) VALUES(?,?,?,?)", 
        [fname, lname, role, salary], (error, results, field)=>{
            if(!error){
                return res.status(200).send({error: false, data: results, message: "Data added"});
            }
            else throw error;
        })
    }
})

Router.get('/:id', (req, res)=>{
    console.log("Search");
    let id = req.params.id;
    if(!id){
        return res.status(400).send({error: true, message:"Please enter id"})
    }else{
        dbCon.query("SELECT * FROM employee WHERE id = ? ", id, (error, results, field)=>{
            if(!error){
                let message = ''
                if(results === undefined || results.length == 0){
                    message = "Employee not found"
                }else message = "Got data";

                return res.status(200).send({error: false , data: results, message})

            }else throw error;
        })
    }

})

Router.delete('/', (req, res)=>{
    console.log('Delete');
    let id = req.body.id;
    if(!id){
        return res.status(400).send({error: true, message:"Please enter id"})
    }
    else{
        dbCon.query("DELETE FROM employee WHERE id = ?",id, (error,results,field)=>{
            if(!error){
                return res.status(200).send({error: false, data: results, message: "Data deleted"})
            }else throw error;
        })
    }

})

Router.put('/', (req,res)=>{
    console.log("Put")
    let id = req.body.id;
    let fname = req.body.fname;
    let lname = req.body.lname;
    let role = req.body.role;
    let salary = req.body.salary;

    if(!id || !fname || !lname || !role || !salary){
        return res.status(400).send({error: true , message: "Please enter the data"})
    }

    dbCon.query("UPDATE employee SET firstname = ?, lastname = ?, role = ?, salary = ? WHERE id = ?",
    [fname, lname, role, salary, id], (error, results, field)=>{
        if(!error){
            return res.status(200).send({error: false, data: results, message: "Data Updated"})
        } else throw error;
    })

})



module.exports = Router