const express = require('express');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session =require("express-session");

const app = express();
const cors = require('cors');
const mysql = require('mysql');

// 加密用....
const bcrypt = require('bcrypt');
const saltRounds = 10;
// 
// jsonwebtoken  https://github.com/auth0/node-jsonwebtoken
const jwt = require("jsonwebtoken")
// 
const SECRET ="account1237689password45699"
const expiresIn = "1h"
const createToken = payload => {
    return jwt.sign(payload,SECRET,{expiresIn})
}

const db = mysql.createPool({
    host : "localhost",
    user : "root",
    password : "",
    database : "games",
});

app.use(express.json());
app.use(cors({
    origin : ["http://localhost:3000"] ,
    methods : ["GET","POST"],
    credentials :true
}));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended : true}))
app.use(
    session({
    key : "userId",
    secret : "reactsuchdifficult" ,
    saveUninitialized : false,
    resave: false,
    cookie : {
        expires : 60*60*24,
    }
}));





// app.get("/api/get",(req,res)=>{
//     const sqlwords = "select * from member_information "
//     db.query(sqlwords,(err,result)=>{
//         res.send(result)
//     });
// })


// 會員註冊
app.post("/api/register",(req,res)=>{
    console.log("in api register")
    const account = req.body.account;
    const password = req.body.password;
    const username = req.body.username;
    const address = req.body.address;
    const phone = req.body.phone;
    const email = req.body.email;
   
    const sqlregister = "insert into  member_information ( account  ,password ,name ,address ,phone ,email ) values(?,?,?,?,?,?) "
    bcrypt.hash(password,saltRounds , (err,hash)=>{
        if (err) {
            console.log(err)
        }

        db.query(sqlregister,
            [account  ,hash ,username ,address ,phone ,email], (err,result)=>{
            if(err) {
                res.send({
                  status: 'FAILURE',
                  err: err
                });
              } else {
                res.send({
                  status: 'SUCCESS'
                });
              }
        })
    })
    
})

//會員登入
app.get("/login", (req, res) => {
    if (req.session.user) {
      res.send({ loggedIn: true, user: req.session.user });
    } else {
      res.send({ loggedIn: false });
    }
  });

app.post("/api/login",(req,res)=>{
    console.log('in api login')
    const account = req.body.account;
    const password = req.body.password;
    // const sqlwords = "select * from  member_information where account=? and value = ? "
    const sqllogin = "select * from  member_information where account=? ;"
    db.query(sqllogin,
    // [account  ,password ],
    account,
    (err,result)=>{
        // console.log(result)
        if(err) {
            res.send({
                err :err
            });
          } 
        if (result.length >0) {
            // res.send(result);
            // console.log (result[0].password ===password)
            // 如果一開始insert到資料庫沒有Hash 就不能用bcrypt.compare 
            bcrypt.compare( password, result[0].password,(error,response)=>{
                if (response){
                    // 不使用session了
                    req.session.user = result;
                    console.log('store')
                    console.log(req.session.user)
                    console.log('store end')
                    res.send(result);
                    // jwtoken可以傳特定的資料即可 暫時給定account balance
                    // const {account,balance} = result[0]
                    
                    // const jwToken = createToken({account,balance})
                    // console.log(jwToken)
                    //  res.status(200).send(jwToken)
                } else {
                    // console.log("Wrong username/password !")
                    res.send({ message : "Wrong username/password !"})
                    // const statu = 404;
                    // const message = "Wrong username/password !";
                    // return res.status(statu).json({statu,message})
                    //  res.status(statu).send(message)
                }
            })
        }else {
            // console.log("User doesn't exist")
            res.send({ message : "User doesn't exist"})
        //     const statu = 403;
        //     const message = "User doesn't exist";
        //     return res.status(statu).json(
        //         { statu,message})
        }
    })

})
// 登出
app.get('/logout', function(req, res) {
    req.session.destroy();
    res.redirect('/');
});




app.listen(3001,()=>{
    console.log("server runing 3001")
})