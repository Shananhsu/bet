var express = require("express");
var bodyParser = require("body-parser");
var session = require("express-session");
var app = express();
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(__dirname + "/public"));
// app.use(express.static('public/router'));
// app.use(session);

var mysql = require("mysql");
var conn = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "root",
  database: "sddGame",
  port: 8889,
});

//sdd 開始時
app.post("/PostGameStart", function (req, res) {
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

  conn.query(
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

app.post("/getGamehistory", function (req, res) {
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

  conn.query(
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
app.get("/admin", function (req, res) {
  conn.query(
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

app.listen(3000);
