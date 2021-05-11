const express = require('express');


const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require("express-session");

// 引用moment固定資料庫時間格式
const moment = require('moment');

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
const SECRET = "account1237689password45699"
const expiresIn = "1h"
const createToken = payload => {
  return jwt.sign(payload, SECRET, { expiresIn })
}

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "games",
  // 阿川加的，為了可以同時使用多個sql雨具語句
  multipleStatements: true,
  // 阿川加的，為了可以同時使用多個sql雨具語句
});

app.use(express.json());
app.use(cors({
  origin: ["http://localhost:3000", "http://localhost:8080","http://localhost:3000/games/baccarat/index.html"],
  methods: ["GET", "POST", "PUT"],
  credentials: true
}));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(
  session({
    key: "userId",
    secret: "reactsuchdifficult",
    saveUninitialized: false,
    resave: false,
    cookie: {
      expires: 60 * 60 * 2400,
      user: "",
      loggedIn : false,
    }
  }));

// app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, Accept, Content-Type, Cookie")
//     res.setHeader("Access-Control-Allow-Origin", "*")
//     res.setHeader("Access-Control-Allow-Methods", "GET, HEAD, POST, PUT, DELETE, TRACE, OPTIONS, PATCH")
//     next();
// })



// app.get("/api/get",(req,res)=>{
//     const sqlwords = "select * from member_information "
//     db.query(sqlwords,(err,result)=>{
//         res.send(result)
//     });
// })


// 會員註冊
app.post("/api/register", (req, res) => {
  console.log("in api register")
  const account = req.body.account;
  const password = req.body.password;
  const username = req.body.username;
  const address = req.body.address;
  const phone = req.body.phone;
  const email = req.body.email;
  const risk_level = "D"
  const register_time = new Date()
  const sqlregister = "insert into  member_information ( account  ,password ,name ,address ,phone ,email,risk_level,register_time,identifyID ) values(?,?,?,?,?,?,?,?,?) "
  const identifyID = 0

  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      console.log(err)
    }

    db.query(sqlregister,
      [account, hash, username, address, phone, email, risk_level, register_time, identifyID], (err, result) => {
        if (err) {
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

// app.get('/games/baccarat/index.html', (req, res) => {
//   const cookie = req.get('Cookie')
//   console.log(cookie)
//   // res.render('test')
//  })
//會員登入
app.get("/login", (req, res) => {
  // console.log('///req.session.user////')
  // console.log(req.session)
  // console.log('///req.session.user////')
  // console.log(req.session.user)
  // console.log('///req.session.cookie////')
  // console.log(req.session.cookie)
  // console.log('////end///')
  if (req.session.user) {
    
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false });
  }
});



app.post("/api/login", (req, res) => {
  console.log('in api login')
  const account = req.body.account;
  const password = req.body.password;
  // const sqlwords = "select * from  member_information where account=? and value = ? "
  const sqllogin = "select * from  member_information where account=? ;"
  db.query(sqllogin,
    // [account  ,password ],
    account,
    (err, result) => {
      // console.log(result)
      if (err) {
        res.send({
          err: err
        });
      }
      if (result.length > 0) {
        // res.send(result);
        // console.log (result[0].password ===password)
        // 如果一開始insert到資料庫沒有Hash 就不能用bcrypt.compare 

        bcrypt.compare(password, result[0].password, (error, response) => {
          if (response) {
            // 不使用session了
            req.session.cookie.user = result[0].account;
            req.session.user = result;
            // console.log('store')
            // console.log(req.session.user)
            // console.log('store end')
            // res.send(result);
            // res.setHeader('Set-Cookie',req.session.user)
            // console.log("/////login session////")
            // console.log(req.session)
            res.send(result)
            
            // jwtoken可以傳特定的資料即可 暫時給定account balance
            // const {account,balance} = result[0]

            // const jwToken = createToken({account,balance})
            // console.log(jwToken)
            //  res.status(200).send(jwToken)
          } else {
            // console.log("Wrong username/password !")
            res.send({ message: "Wrong username/password !" })
            // const statu = 404;
            // const message = "Wrong username/password !";
            // return res.status(statu).json({statu,message})
            //  res.status(statu).send(message)
          }
        })
      } else {
        // console.log("User doesn't exist")
        res.send({ message: "User doesn't exist" })
        //     const statu = 403;
        //     const message = "User doesn't exist";
        //     return res.status(statu).json(
        //         { statu,message})
      }
    })

})

// 登出
app.get('/api/logout', function (req, res) {
  req.session.destroy(function (err) {
    // res.redirect('/');
  });
  res.send({ "true": true })
});

///////會員資訊//////
app.post("/api/getBalance", (req, res) => {
  // console.log('in api getbalance')
  const account = req.body.account;
  // console.log('///////account////////')
  // console.log(req.body)
  const sqllogin = "select * from  thirdpart_moneybag where account=? ;"
  db.query(sqllogin,
    // [account  ,password ],
    account,
    (err, result) => {
      // console.log(result)
      if (err) {
        res.send({
          err: err
        });
      }
      // console.log("//////")
      // console.log(result)
      // if (result.length > 0) {
        res.send(result);
      // }
    })
})
// 
// 錢包轉帳
app.post("/api/transform", (req, res) => {
  const turnout = req.body.turnout
  const turnout_balance = req.body.turnout_balance
  const turnin = req.body.turnin
  const turnin_balance = req.body.turnin_balance
  const account = req.body.account;
  // const sqlget

  // console.log([{[turnout]:turnout_balance,[turnin]:turnin_balance},account])
  const sqlTbalance = "UPDATE thirdpart_moneybag SET? WHERE account = ?;"
  const sqlSetMainTable = "UPDATE member_information SET balance = " +
    "(select main_balance from thirdpart_moneybag where account=?)" +
    "where account = ?"
  db.query(sqlTbalance,
    [{ [turnout]: turnout_balance, [turnin]: turnin_balance }, account],
    (err, result) => {

      if (err) { res.send({ err: err }); }
      console.log("第三方錢包更新")
      if (result.message) { res.send(result); }
    })
  db.query(sqlSetMainTable,
    [account, account],
    (err, result) => {
      if (err) { res.send({ err: err }); }
      console.log("主帳號金額更新")
      // if (result.message) {res.send(result);}
    })
})


//////////////存款////////////////
app.post("/api/deposit", (req, res) => {
  console.log('in api deposit')
  const account = req.body.account;
  const depositway = req.body.depositway;
  const point = req.body.point;
  const deposittime = req.body.deposittime;

  const sqlregister = "insert into  deposit_table ( account  ,depositway ,point ,deposittime,confirmflag  ) values(?,?,?,?,?) "
  const identifyID = 0
  console.log([account, depositway, point, deposittime])
  db.query(sqlregister,
      [account, depositway, point, deposittime, 0], (err, result) => {
        if (err) {
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


/////////////////遊戲區//////////////////////////////////
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
  var betTime = moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
  var gameType = req.body.gameType;

  db.query(
    "INSERT INTO blackjack_records (account,bets,moneyBefore,moneyAfter,betTime,gameType) VALUES (?,?,?,?,?,?)", [account, bet, moneyBefore, moneyAfter, betTime, gameType], function (err, result) {
      if (err) { throw err } else {
        res.send('ok')
      }
    }
  )
})

app.post("/blackjack/update", function (req, res) {
  let moneyAfter = req.body.moneyAfter;
  let result = req.body.result;
  let dealerCards = req.body.dealerCards;
  let playerCards = req.body.playerCards;
  let status = req.body.status;

  db.query(
    "UPDATE blackjack_records SET moneyAfter = ?, result = ?,dealerCards=?,playerCards=?,status=?  WHERE id IN (SELECT a.maxID FROM (SELECT max(id) maxID FROM blackjack_records) a)",
    [moneyAfter, result, dealerCards, playerCards, status],
    function (err, result) {
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

  db.query('select * from tiger_users',
    '',
    function (err, rows) {
      if (err) {
        console.log(JSON.stringify(err));
        return;
      }

      response.send(JSON.stringify(rows));
    }
  );

})
//取得tiger遊戲結果
app.get("/tiger/results", function (request, response) {

  db.query('select * from tiger_results',
    [],
    function (err, rows) {
      if (err) {
        console.log(JSON.stringify(err));
        return;
      }

      response.send(JSON.stringify(rows));
    }
  );

})

//寫入遊戲紀錄
app.post("/tiger/addresults", function (request, response) {

  db.query(
    // "insert into tiger_results set UserID = 1, BetTime = ?,Lay='All',Stake=?,AccountBalBE=?,GameResult=?,NetWin=?,AccountBalAF=? "
    "insert into tiger_results set betTime = ?,account='steven',gameType='拉霸',object='All',bets=?,moneyBefore=?,status=?,result=?,moneyAfter=? ",
    [
      // request.body.BetTime, 
      // request.body.Stake,
      // request.body.AccountBalBE,
      // request.body.GameResult,
      // request.body.NetWin,
      // request.body.AccountBalAF
      request.body.betTime,
      request.body.bets,
      request.body.moneyBefore,
      request.body.status,
      request.body.result,
      request.body.moneyAfter
    ]);
  // console.log(request)
  response.send("row inserted.");

})
//tiger後台
app.get('/tiger/gameresults', function (req, res) {
  res.send(render('./public/results.html'));
})

app.put("/tiger/user", function (request, response) {

  db.query(
    "update tiger_users set UserWallet = ? where UserId =1 ",

    [
      request.body.UserWallet

    ]);
  response.send("row updated.");

})


/////////fish///////////


// 將捕魚機傳來的資料送到資料庫
app.post("/fishShooter/uploadBetRecord", function (req, res) {


  sql = `insert into fishshooter_betrecord
(
  memberId, account, betTime,
   gameType,object, bets, moneyBefore,
    status, result, moneyAfter,
     fishHited, fishKilled, betOverTime
     )
values(?)`

  data = [req.body.betRecord];

  db.query(
    sql,
    data,
    function (err, row) {
      res.send("賭局完成")
    }
  )
})

// 有做出分頁功能的簡易後台 檢視捕魚機下注紀錄

app.get("/fishShooter/betrecord/:page([0-9]+)", function (req, res) {
  // 暫時先留著，之後說不定要改回來
  // if (req.params.page <= 0) {
  //   res.redirect('/fishShooter/betrecord/1')
  //   return
  // };

  let page = req.params.page;
  let nums_per_page = 10;
  let offset = (page - 1) * nums_per_page;

  sql = `
SELECT * FROM fishshooter_betrecord LIMIT ${offset},${nums_per_page};
SELECT COUNT(*) AS COUNT FROM fishshooter_betrecord;
`

  db.query(
    sql,
    function (err, data) {
      let last_page = Math.ceil(data[1][0].COUNT / nums_per_page)
      res.send({
        rows: data[0],
        total_nums: data[1][0].COUNT,
        curr_page: page,
        last_page: last_page
      });
      if (err) { console.log(err); }
    }
  )
})

/////////////////////////////////
/////////////billiard////////////

app.post("/gameStart", function(req, res) {
  // 投注項目/金額
  var postbeforemoney = req.body.postbeforemoney;
  var postbetmoney = req.body.postbetmoney;
  var postaccount = req.body.postaccount;
  var postaftermoney = req.body.postaftermoney;
  var postbetproject = req.body.postbetproject;
  var postbetresult = req.body.postbetresult;
  var postplaygameid = req.body.postplaygameid;
  var posttime = req.body.posttime;


  db.query(
      //會員帳號,累計投注項目金額,總投注額
      "INSERT INTO billiard_ball (moneyBefore, bets, account, moneyAfter, object, result, gameType, betTime) VALUES(?,?,?,?,?,?,?,?)",
      //會員帳號,累計投注項目金額,總投注額
      [postbeforemoney, postbetmoney, postaccount, postaftermoney, postbetproject, postbetresult, postplaygameid, posttime],
      function(err, result) {
          if (err) {
              throw err;
          } else {
              res.send('anthing')
          }
      }
  );
});


app.post("/gameafter", function(req, res) {
  var postaftermoney = req.body.postaftermoney;
  var postgameresult = req.body.postgameresult;

  db.query(
      "UPDATE billiard_ball SET moneyAfter = ?, status = ? WHERE id IN (SELECT a.maxID FROM (SELECT max(id) maxID FROM billiard_ball) a) ", [postaftermoney, postgameresult],
      function(err, result) {
          if (err) {
              throw err;
          } else {
              res.send("ok231232132133213123123");
          }
      }
  );

});


// // 重資料庫取得
app.get("/admin", function(req, res) {
 db.query(
      // "SELECT * FROM sddGamehistory WHERE id IN (SELECT a.maxID FROM (SELECT max(id) maxID FROM sddGamehistory) a)",
      "SELECT * FROM billiard_ball", [],
      function(err, result) {
          // if(err){throw err};
          // res.send(JSON.stringify(result[0]));
          res.send(JSON.stringify(result));
      });
});


app.get("/gameresult/:page([0-9]+)",function(req, res) {
let page = req.params.page;

// 每頁顯示資料筆數
let nums_per_page =5;
let offset = (page - 1)*nums_per_page;
sql=
// 從資料庫撈幾筆資料
`SELECT*FROM billiard_ball LIMIT ${offset},${nums_per_page};

SELECT COUNT(*) AS COUNT FROM billiard_ball;
`

db.query(
  sql,
  function(err, data){
      let last_page = Math.ceil(data[1][0].COUNT / nums_per_page)
      res.send({
          rows: data[0],
          total_nums: data[1][0].COUNT,
          curr_page: page,
          last_page:last_page
      });
      if(err){console.log(err);}}
)


})

//////////////////////////
////////niuniu/////////////
app.get("/niuniu/fetch", function (req, res) {
  db.query(
    "select * from niuniu_records where id in (select a.maxID from (select max(id) maxID from niuniu_records) a)", [],
    function (err, result) {
      if (err) {
        console.log(JSON.stringify(err));
        return;
      } else {
        res.send(JSON.stringify(result[0]))
      }
    }
  )
})

app.post("/niuniu/store", function (req, res) {
  var account = req.body.account;
  var bet = req.body.bet;
  var moneyBefore = req.body.moneyBefore;
  var moneyAfter = req.body.moneyAfter;
  var betTime = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
  var gameType = req.body.gameType;

  db.query(
    "INSERT INTO niuniu_records (account,bets,moneyBefore,moneyAfter,betTime,gameType) VALUES (?,?,?,?,?,?)", [account, bet, moneyBefore, moneyAfter, betTime, gameType], function (err, result) {
      if (err) { throw err } else {
        res.send('ok')
      }
    }
  )
})

app.post("/niuniu/update", function (req, res) {
  var moneyAfter = req.body.moneyAfter;
  var result = req.body.result;
  var dealerCards = req.body.dealerCards;
  var playerCards = req.body.playerCards;
  var status = req.body.status;

  db.query(
    "UPDATE niuniu_records SET moneyAfter = ?, result = ?,dealerCards=?,playerCards=?,status=?  WHERE id IN (SELECT a.maxID FROM (SELECT max(id) maxID FROM niuniu_records) a)",
    [moneyAfter, result, dealerCards, playerCards, status],
    function (err, result) {
      if (err) { throw err } else {
        res.send('ok')
      }
    }
  )
})

app.get("/niuniu/select", function (req, res) {
  db.query("select * from niuniu_records", [], function (err, result) {
    if (err) {
      console.log(JSON.stringify(err));
      return;
    }
    res.send(JSON.stringify(result))
  })
})
//////////////////////////////////////////
/////////////////baccarat/////////////////////////

app.post("/baccarat/playlist", function (req, res) {
  // console.log(req.body)

  var account = req.body.account;
  var bet = req.body.bet;
  var betTime = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
  var balance = req.body.balance;
  var playerHand1 = req.body.playerHand1;
  var playerHand2 = req.body.playerHand2;
  var playerHand3 = req.body.playerHand3;
  var bankerHand1 = req.body.bankerHand1;
  var bankerHand2 = req.body.bankerHand2;
  var bankerHand3 = req.body.bankerHand3;
  var playerScore = req.body.playerScore;
  var bankerScore = req.body.bankerScore;
  var isPlayerPairs = req.body.isPlayerPairs;
  var isBankPairs = req.body.isBankPairs;
  var isBig = req.body.isBig;
  var winner = req.body.winner;
  
  db.query(
    "INSERT INTO baccarat_gamelog"+
    "(account,bet,betTime,balance,playerHand1,playerHand2,playerHand3,"+
    "bankerHand1,bankerHand2,bankerHand3,playerScore,bankerScore,"+
    "isPlayerPairs,isBankPairs,isBig,winner) "+
    "VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)", 
    [account,bet,betTime,balance,playerHand1,playerHand2,playerHand3,
      bankerHand1,bankerHand2,bankerHand3,playerScore,bankerScore,
      isPlayerPairs,isBankPairs,isBig,winner], 
      function (err, result) {
      if (err) { throw err } else {
        res.send('ok')
      }
    }
  )
}) 

app.post("/baccarat/moneyUpdate", function (req, res) {
  let account = req.body.account;
  let balance = req.body.balance;
  db.query(
    "UPDATE thirdpart_moneybag SET baccarat_balance = ?  WHERE account =?",
    [balance, account],
    function (err, result) {
      if (err) { throw err } else {
        res.send('ok')
      }
    }
  )
})

app.post("/baccarat/gamelog", function (req, res) {
  // console.log("gamelog in")
  // console.log(req.body)
  let account = req.body.account;
  db.query(
    "SELECT *  from baccarat_gamelog  WHERE account =?",
    [account],
    function (err, result) {
      if (err) { throw err } else {
        res.send(result)
      }
    }
  )
})






////////////////////baccarat_end////////////////////////////

////////////////// Backend//////////////////
app.use(bodyParser.json());

const { query } = require('./db')

app.use((req, res, next) => {
  if (!app.locals.acc) {
    req.session.acc = "guest";
    app.locals.acc = "guest"
  }
  next();
})

// 後台登入
app.post("/backend/login", async (req, res) => {
  let backendAccount = req.body.account;
  let backendPassword = req.body.password;
  let re = await query(`select account, password from member_information where account='${backendAccount}'`);
  if (re[0] === undefined) {
    res.send('0')
  } else {
    let accResult = re[0].account;
    let pswResult = re[0].password;
    if (accResult === backendAccount) {
      if (backendPassword === pswResult) {
        console.log('login success');
        req.session.acc = backendAccount;
        app.locals.acc = req.session.acc;
        res.send('1');
      } else {
        console.log('passwrong is wrong');
        res.send('0')
      }
    } else {
      res.send('0')
    }
  }
})
app.get("/backend/login", (req, res) => {
  if (req.session.acc == 'guest') {
    res.send(app.locals.acc)
  } else {
    res.send(app.locals.acc)
  }
})

app.get('/backend/logout', (req, res) => {
  req.session.destroy();
  app.locals.acc = "";
})

// 後台資料
let sqlQuery = "";
let gameList = "";
let item = ['betTime', 'id', 'gameType', 'object', 'bets', 'moneyBefore', 'status', 'result', 'moneyAfter'];

// 縮短sql語句
function handleSql(event) {
  let apple = item.map(e => {
    let bee = `${event}.` + e;
    return bee;
  });
  return apple.toString();
}

app.post('/backend/gameList', async (req, res) => {
  let sqlQuery1 = "";
  let sqlQuery2 = "";
  gameList = req.body.gameList;
  time = req.body.time;
  switch (gameList.length) {
    case 1:
      sqlQuery1 = `select betTime,id,gameType,object,bets,moneyBefore,status,result,moneyAfter from ${gameList[0]}`;
      if (time !== undefined) {
        sqlQuery2 = `where betTime between '${time[0]}' and '${time[1]}'`
      } else {
        sqlQuery2 = ""
      }
      sqlQuery = sqlQuery1 + " " + sqlQuery2 + " order by betTime";
      break;
    case 2:
      sqlQuery1 = `
            select ${handleSql('a')} from ${gameList[0]} a 
            union
            select ${handleSql('b')} from ${gameList[1]} b 
            `;
      if (time !== undefined) {
        sqlQuery2 = `where betTime between '${time[0]}' and '${time[1]}' `
      } else {
        sqlQuery2 = ""
      }
      sqlQuery = sqlQuery1 + " " + sqlQuery2 + " order by betTime";
      break;
    case 3:
      sqlQuery1 = `
            select ${handleSql('a')} from ${gameList[0]} a 
            union
            select ${handleSql('b')} from ${gameList[1]} b 
            union 
            select ${handleSql('c')} from ${gameList[2]} c 
            `;
      if (time !== undefined) {
        sqlQuery2 = `where betTime between '${time[0]}' and '${time[1]}' `
      } else {
        sqlQuery2 = ""
      }
      sqlQuery = sqlQuery1 + " " + sqlQuery2 + " order by betTime";
      break;
    case 4:
      sqlQuery1 = `
            select ${handleSql('a')} from ${gameList[0]} a 
            union
            select ${handleSql('b')} from ${gameList[1]} b 
            union 
            select ${handleSql('c')} from ${gameList[2]} c 
            union
            select ${handleSql('d')} from ${gameList[3]} d 
            `;
      if (time !== undefined) {
        sqlQuery2 = `where betTime between '${time[0]}' and '${time[1]}' `
      } else {
        sqlQuery2 = ""
      }
      sqlQuery = sqlQuery1 + " " + sqlQuery2 + " order by betTime";
      break;
    case 5:
      sqlQuery1 = `
            select ${handleSql('a')} from ${gameList[0]} a 
            union
            select ${handleSql('b')} from ${gameList[1]} b 
            union 
            select ${handleSql('c')} from ${gameList[2]} c 
            union
            select ${handleSql('d')} from ${gameList[3]} d 
            union
            select ${handleSql('e')} from ${gameList[4]} e 
            `;
      if (time !== undefined) {
        sqlQuery2 = `where betTime between '${time[0]}' and '${time[1]}' `
      } else {
        sqlQuery2 = ""
      }
      sqlQuery = sqlQuery1 + " " + sqlQuery2 + " order by betTime";

      break;
    case 6:
      sqlQuery1 = `
            select ${handleSql('a')} from ${gameList[0]} a 
            union
            select ${handleSql('b')} from ${gameList[1]} b 
            union 
            select ${handleSql('c')} from ${gameList[2]} c 
            union
            select ${handleSql('d')} from ${gameList[3]} d 
            union
            select ${handleSql('e')} from ${gameList[4]} e 
            union
            select ${handleSql('f')} from ${gameList[5]} f 
            `;
      if (time !== undefined) {
        sqlQuery2 = `where betTime between '${time[0]}' and '${time[1]}' `
      } else {
        sqlQuery2 = ""
      }
      sqlQuery = sqlQuery1 + " " + sqlQuery2 + " order by betTime";
      break;
    case 7:
      sqlQuery1 = `
            select ${handleSql('a')} from ${gameList[0]} a 
            union
            select ${handleSql('b')} from ${gameList[1]} b 
            union 
            select ${handleSql('c')} from ${gameList[2]} c 
            union
            select ${handleSql('d')} from ${gameList[3]} d 
            union
            select ${handleSql('e')} from ${gameList[4]} e 
            union
            select ${handleSql('f')} from ${gameList[5]} f 
            union 
            select ${handleSql('g')} from ${gameList[6]} g 
            `;
      if (time !== undefined) {
        sqlQuery2 = `where betTime between '${time[0]}' and '${time[1]}' `
      } else {
        sqlQuery2 = ""
      }
      sqlQuery = sqlQuery1 + " " + sqlQuery2 + " order by betTime";
      break;
    case 8:
      sqlQuery1 = `
            select ${handleSql('a')} from ${gameList[0]} a 
            union
            select ${handleSql('b')} from ${gameList[1]} b 
            union 
            select ${handleSql('c')} from ${gameList[2]} c 
            union
            select ${handleSql('d')} from ${gameList[3]} d 
            union
            select ${handleSql('e')} from ${gameList[4]} e 
            union
            select ${handleSql('f')} from ${gameList[5]} f 
            union 
            select ${handleSql('g')} from ${gameList[6]} g 
            union 
            select ${handleSql('h')} from ${gameList[7]} h
            `;
      if (time !== undefined) {
        sqlQuery2 = `where betTime between '${time[0]}' and '${time[1]}' `
      } else {
        sqlQuery2 = ""
      }
      sqlQuery = sqlQuery1 + " " + sqlQuery2 + " order by betTime";
      break;
    case 9:
      sqlQuery1 = `
            select ${handleSql('a')} from ${gameList[0]} a 
            union
            select ${handleSql('b')} from ${gameList[1]} b 
            union 
            select ${handleSql('c')} from ${gameList[2]} c 
            union
            select ${handleSql('d')} from ${gameList[3]} d 
            union
            select ${handleSql('e')} from ${gameList[4]} e 
            union
            select ${handleSql('f')} from ${gameList[5]} f 
            union 
            select ${handleSql('g')} from ${gameList[6]} g 
            union 
            select ${handleSql('h')} from ${gameList[7]} h
            union 
            select ${handleSql('i')} from ${gameList[8]} i
            `;
      if (time !== undefined) {
        sqlQuery2 = `where betTime between '${time[0]}' and '${time[1]}' `
      } else {
        sqlQuery2 = ""
      }
      sqlQuery = sqlQuery1 + " " + sqlQuery2 + " order by betTime";
      break;
    default:
      break;
  }
})

// get會員資料
app.get('/backend/getMember', async (req, res) => {
  let re = await query("select * from member_information where account='steven'", []);
  res.send(JSON.stringify(re));
})

// get總下注金額
app.get('/backend/getTotalBets', async (req, res) => {
  let re = await query(`select sum(bets) bet from (${sqlQuery}) aaa`, []);
  res.send(JSON.stringify(re[0].bet));
})

// get注單數量
app.get('/backend/getCount', async (req, res) => {
  let re = await query(`select count(*) cnt from (${sqlQuery}) bbb`, []);
  res.send(JSON.stringify(re[0].cnt));
})

// get輸贏總金額
app.get('/backend/getResults', async (req, res) => {
  let re = await query(`select sum(result) results from (${sqlQuery}) ccc`, []);
  res.send(JSON.stringify(re[0].results));
})

// get遊戲明細
app.get('/backend/fetchGame', async (req, res) => {
  let re = await query(sqlQuery, []);
  res.send(JSON.stringify(re));
})

// get會員資訊
app.get('/backend/member', async (req, res) => {
  let re = await query('select * from member_information', []);
  res.send(JSON.stringify(re))
})
// get會員錢包
app.get('/backend/getThirdPartyMoney', async (req, res) => {
  let re = await query('select * from thirdpart_moneybag', []);
  console.log(JSON.stringify(re));
  res.send(JSON.stringify(re[0]));
})



//////////////////////////////////////////
app.listen(3001, () => {
  console.log("server runing 3001")
})