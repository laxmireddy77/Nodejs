const mysql=require("mysql");
const express=require("express")
const bcrypt=require("bcrypt");
const multer=require("multer");
const jwt=require("jsonwebtoken");
const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"uploads")
    },
    filename:function(req,file,cb){
    cb(null,Date.now()+"_"+file.originalname)
    }
})
const upload=multer({storage:storage})
const router=express.Router();
router.post("/signUp",upload.single("profilepic"),async(req,res)=>{
    const hashedPassword=await bcrypt.hash(req.body.password,10)
      const sqlQuery=`insert into employees (name,email,password,profilepic) values("${req.body.name}","${req.body.email}","${hashedPassword}","${req.file.path}")`;
       console.log(sqlQuery);
       connection.query(sqlQuery,(err,results)=>{
          if(err){
              res.json(err)
          }else{
              res.json(["User created successfully"])
          }
       })
  })
  router.post("/validateLogin",upload.none(),(req,res)=>{
    const sqlQuery=`select * from employees where email='${req.body.email}'`;
    connection.query(sqlQuery,async (err,results)=>{
        if(err){
            res.json(err)
        }else{
            const isValidPassword=await bcrypt.compare(req.body.password,results[0].password)
            if(isValidPassword==true){
                console.log(results);
              const jwtToken=await jwt.sign({id:results[0].id},"BRN");
              console.log(jwtToken);
                res.json({
                    email:results[0].email,
                    name:results[0].name,
                    profilepic:results[0].profilepic,
                    isLoggedIn:true,
                    token:jwtToken,
                })
            }else{
                res.json({
                msg:"Invalid Username or password",
                isLoggedIn:false
            })
            }
            
        }
    })
})

router.post("/validateToken",upload.none(),async(req,res)=>{
    const receivedToken=req.body.token;
    const generatedId=await jwt.verify(receivedToken,"BRN");
   console.log(generatedId);
   const sqlQuery=`select * from employees where id=${generatedId.id}`
   console.log(sqlQuery);
   connection.query(sqlQuery,(err,results)=>{
    if(err){
        res.json(err);
        console.log(err);
    }else{
        res.json({
            email:results[0].email,
            name:results[0].name,
            profilepic:results[0].profilepic,
            isLoggedIn:true,
            
        }) 
    }
   })
})

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