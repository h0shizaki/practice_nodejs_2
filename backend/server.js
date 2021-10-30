const express = require('express');
const app = express();
const employeeRoute = require('./routes/employee');
const dbCon = require('./connection');

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//middleware
app.use( (req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
} )

//route
app.use('/employee', employeeRoute);


app.get("/test" , (req, res)=>{
    return res.send({ error: false , message: "Hello world"})
})

const PORT = process.env.PORT || 3000 ;
app.listen(PORT , () => {console.log(`Server running on port ${PORT}`) } );
module.exports = app;
