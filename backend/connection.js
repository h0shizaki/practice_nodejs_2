const mysql = require('mysql');
const dbCon = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodejsapi'
});

dbCon.connect( (error)=>{
    if(!error){
        console.log('Connected')
    }
    else{
        console.log('Connection failed')
    }
} );

module.exports = dbCon