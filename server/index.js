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


// 21點
app.get("/blackjack/fetch", (req, res) => {
    db.query("select * from blackjack_records where id in (select a.maxID from (select max(id) maxID from blackjack_records) a)", [], (err, result) => {
        if (err) throw err;
        res.send(JSON.stringify(result[0]))
    })
})

app.post("/blackjack/store", function (req, res) {
    var account = req.body.account;
    var bet = req.body.bet;
    var moneyBefore = req.body.moneyBefore;
    var moneyAfter = req.body.moneyAfter;
    var betTime = req.body.betTime;
    var gameType = req.body.gameType;

    db.query(
        "INSERT INTO blackjack_records (account,bets,moneyBefore,moneyAfter,betTime,gameType) VALUES (?,?,?,?,?,?)", [account, bet, moneyBefore, moneyAfter, betTime, gameType], function (err, result) {
            if (err) { throw err } else {
                res.send('ok')
            }
        }
    )
})

// SDD
//sdd 開始時
app.post("/dragonshoot/PostGameStart", function (req, res) {
    // 會員帳號
    var sddPostThisPlayerAccount = req.body.sddPostThisPlayerAccount;
    // 投注項目/金額
    var sddPostProject = req.body.sddPostProject;
    // 累計投注額
    var sddPostBetMoney = req.body.sddPostBetMoney;
    // 遊戲開始前的餘額
    var sddPostMoneyBefore = req.body.sddPostMoneyBefore;
    // 遊戲結束後的餘額
    var sddPostMoneyAfter = req.body.sddPostMoneyAfter;
    // 遊戲開始時間
    var sddPostNowTime = req.body.sddPostNowTime;
  
    db.query(
      //會員帳號,累計投注項目金額,總投注額
      "INSERT INTO sddGamehistory (sddPlayerAccount,sddPlayerBetTime,sddPlayerBetProject,sddPlayerBetMoney,sddPlayerMoneyBefore,sddPlayerMoneyAfter) VALUES(?,?,?,?,?,?)",
      //會員帳號,累計投注項目金額,總投注額
      [
        sddPostThisPlayerAccount,
        sddPostNowTime,
        sddPostProject,
        sddPostBetMoney,
        sddPostMoneyBefore,
        sddPostMoneyAfter,
      ],
      function (err, result) {
        if (err) {
          throw err;
        } else {
          res.send("anthing");
        }
      }
    );
  });
  
  app.post("/dragonshoot/getGamehistory", function (req, res) {
    // 修改寫入投注明細
    var sddPostProject = req.body.sddPostProject;
    // 修改寫入投注總金額
    var sddPostBetMoney = req.body.sddPostBetMoney;
    // 修改寫入遊戲後餘額
    var sddPostMoneyAfter = req.body.sddPostMoneyAfter;
    // 輸贏金額
    var sddPostBetResult = req.body.sddPostBetResult;
    //中獎資訊
    var sddPostGameResult = req.body.sddPostGameResult;
  
    db.query(
      //會員帳號,累計投注項目金額,總投注額
      "UPDATE sddGamehistory SET sddPlayerBetProject = ? , sddPlayerBetMoney = ? , sddPlayerMoneyAfter = ? , sddPlayerBetResult = ? , sddGameResult = ? WHERE id IN (SELECT a.maxID FROM (SELECT max(id) maxID FROM sddGamehistory) a) ",
      //會員帳號,累計投注項目金額,總投注額
      [
        sddPostProject,
        sddPostBetMoney,
        sddPostMoneyAfter,
        sddPostBetResult,
        sddPostGameResult,
      ],
      function (err, result) {
        if (err) {
          throw err;
        } else {
          res.send("anthing");
        }
      }
    );
  });
  
  // // 重資料庫取得
  app.get("/dragonshoot/admin", function (req, res) {
    db.query(
      // "SELECT * FROM sddGamehistory WHERE id IN (SELECT a.maxID FROM (SELECT max(id) maxID FROM sddGamehistory) a)",
      "SELECT * FROM sddGamehistory",
      [],
      function (err, result) {
        // if(err){throw err};
        // res.send(JSON.stringify(result[0]));
        res.send(JSON.stringify(result));
      }
    );
  });


  /////

////////////tiger///////////////
app.get("/tiger/user", function (request, response) {

	connection.query('select * from tiger_users', 
		'',
		function(err, rows) {
			if (err)	{
				console.log(JSON.stringify(err));
				return;
			}
			
			response.send(JSON.stringify(rows));
		}
	);
    
})
app.get("/tiger/results", function (request, response) {

	connection.query('select * from results', 
		[],
		function(err, rows) {
			if (err)	{
				console.log(JSON.stringify(err));
				return;
			}
			
			response.send(JSON.stringify(rows));
		}
	);
    
})


app.post("/tiger/results", function (request, response) {

	connection.query(
		"insert into tiger_results set UserID = 1, BetTime = ?,Lay='All',Stake=?,AccountBalBE=?,GameResult=?,NetWin=?,AccountBalAF=? ", 
			[
				request.body.BetTime, 
				request.body.Stake,
				request.body.AccountBalBE,
				request.body.GameResult,
				request.body.NetWin,
				request.body.AccountBalAF

			]);
			// console.log(request)
	response.send("row inserted.");
    
})

app.get('/tiger/results', function (req, res) {
	res.send(render('./public/results.html'));
  })

app.put("/tiger/user", function (request, response) {

	connection.query(
		"update users set UserWallet = ? where UserId =1 " ,
		    
			[
				request.body.UserWallet 
				
			]);
	response.send("row updated.");
    
})


/////////fish///////////



// 將捕魚機傳來的資料送到資料庫
app.post("/uploadBetRecord", function (req, res) {

    let mysql = require('mysql')
    let conn = mysql.createConnection({
        user: "root",
        password: "",
        host: '127.0.0.1',
        port: 3306,
        database: 'fishshooter'
    });

    conn.connect();

    sql = `insert into betrecord
    values(
        ?
        )`
    data = [req.body.betRecord];

    conn.query(
        sql,
        data,
        function () {
            res.send("賭局完成")
        }
    )
})


// 簡易後台 檢視捕魚機下注紀錄
app.get("/fishShooter/betrecord", function (req, res) {
    conn.query(
        "select * from betrecord",
        function (err, rows) {
            res.render("fishShooter/betRecord", { rows: rows })
            // console.log(rows);
        }
    )

})

// 有做出分頁功能的簡易後台 檢視捕魚機下注紀錄

app.get("/fishShooter/page/:page([0-9]+)", function (req, res) {

    let page = req.params.page;

    let nums_per_page = 6;
    let offset = (page - 1) * nums_per_page;
    let sql = `SELECT * FROM betrecord LIMIT ${offset},${nums_per_page};
    SELECT COUNT(*) AS COUNT FROM betrecord;`;
    conn.query(sql, function (err, data) {
        if (err) {
            console.log(err);
        }

        let last_page = Math.ceil(data[1][0].COUNT / nums_per_page)

        if (page > last_page) {
            res.redirect('/fishShooter/page/' + last_page);
            return
        }

        res.render('fishShooter/betRecord_page', {
            rows: data[0],
            curr_page: page,
            total_nums: data[1][0].COUNT,
            last_page: last_page
        })

    })


})

/////////////////////////////////
/////////////billiard////////////

app.post("/billiard/gameStart", function (req, res) {
    // 投注項目/金額
    var postbeforemoney = req.body.postbeforemoney;
    var postbetmoney = req.body.postbetmoney;
    var postaccount = req.body.postaccount;
    var postaftermoney = req.body.postaftermoney;
    var postbetproject = req.body.postbetproject;
    var postbetresult = req.body.postbetresult;


    db.query(
      //會員帳號,累計投注項目金額,總投注額
      "INSERT INTO billiard_ball (beforemoney, betmoney, account, aftermoney, betproject, betresult) VALUES(?,?,?,?,?,?)",
      //會員帳號,累計投注項目金額,總投注額
      [postbeforemoney,postbetmoney,postaccount,postaftermoney,postbetproject,postbetresult],
      function (err, result) {
        if (err) {
          throw err;
        }else {
          res.send('anthing')
        }
      }
    );
  });


app.post("/billiard/gameafter",function(req,res){
  var postaftermoney = req.body.postaftermoney;
  var postgameresult = req.body.postgameresult;

db.query(
  "UPDATE billiard_ball SET aftermoney = ?, gameresult = ? WHERE id IN (SELECT a.maxID FROM (SELECT max(id) maxID FROM ball) a) ",
  [postaftermoney,postgameresult],
  function(err,result){
    if(err){
      throw err;
    } else {
      res.send("ok231232132133213123123");
    }
  }
);

});


// // 重資料庫取得
app.get("/billiard/admin", function (req, res) {
  db.query(
    // "SELECT * FROM sddGamehistory WHERE id IN (SELECT a.maxID FROM (SELECT max(id) maxID FROM sddGamehistory) a)",
    "SELECT * FROM billiard_ball",
  [],
    function (err, result) {
      // if(err){throw err};
    // res.send(JSON.stringify(result[0]));
    res.send(JSON.stringify(result));
  });
});

//////////////////////////


app.listen(3001,()=>{
    console.log("server runing 3001")
})