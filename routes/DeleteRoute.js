const mysql=require("mysql");
const express=require("express")
const router=express.Router();
router.get("/deleteDetails",(req,res)=>{
    console.log(req.query.email);
    const sqlQuery=`delete from employees where email='${req.query.email}'`;
    connection.query(sqlQuery,(err,results)=>{
        if(err){
            res.json(err);
        }else{
            res.json(results);
        }
    })
});
const connection=mysql.createConnection({
    host:process.env.dbHost,
    user:process.env.dbUser,
    password:process.env.dbPassword,
    database:process.env.dbName,
    port:process.env.dbPort
})
connection.connect((err,results)=>{
    if(err){
        console.log("unable to connect to db");
    }
    else{
        console.log("Connected to db");
    }
})
  module.exports=router;