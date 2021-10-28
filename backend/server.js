const express = require('express');
const app = express();
const employeeRoute = require('./routes/employee');
const dbCon = require('./connection');

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//route
app.use('/employee', employeeRoute);


app.get("/test" , (req, res)=>{
    return res.send({ error: false , message: "Hello world"})
})

const PORT = process.env.PORT || 3000 ;
app.listen(PORT , () => {console.log(`Server running on port ${PORT}`) } );
