const mysql = require("mysql");
const express = require("express");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "_" + file.originalname);
  },
});
const upload = multer({ storage: storage });
const router = express.Router();

router.put("/updateDetails", upload.single("profilepic"), (req, res) => {
  console.log(req.body);
  const sqlQuery = `update employees set password="${req.body.password}",profilepic="${req.file.path}" where email="${req.body.email}"`;
  console.log(sqlQuery);
  connection.query(sqlQuery, (err, results) => {
    if (err) {
      res.json(err);
    } else {
      res.json(results);
    }
  });
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
module.exports = router;
