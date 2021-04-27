var express = require("express");
var app = express();
var bodyParser = require('body-parser');
app.listen(3000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))

app.use("/", express.static(__dirname + "/public"));

var mysql = require("mysql");
const e = require("express");
var conn = mysql.createConnection({
    user: "root",
    password: "",
    host: "localhost",
    port: 3306,
    database: "game"
})


app.post("/gameStart", function (req, res) {
    // 投注項目/金額
    var postbeforemoney = req.body.postbeforemoney;
    var postbetmoney = req.body.postbetmoney;
    var postaccount = req.body.postaccount;
    var postaftermoney = req.body.postaftermoney;
    var postbetproject = req.body.postbetproject;
    var postbetresult = req.body.postbetresult;


    conn.query(
      //會員帳號,累計投注項目金額,總投注額
      "INSERT INTO ball (beforemoney, betmoney, account, aftermoney, betproject, betresult) VALUES(?,?,?,?,?,?)",
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


app.post("/gameafter",function(req,res){
  var postaftermoney = req.body.postaftermoney;
  var postgameresult = req.body.postgameresult;

conn.query(
  "UPDATE ball SET aftermoney = ?, gameresult = ? WHERE id IN (SELECT a.maxID FROM (SELECT max(id) maxID FROM ball) a) ",
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
app.get("/admin", function (req, res) {
  conn.query(
    // "SELECT * FROM sddGamehistory WHERE id IN (SELECT a.maxID FROM (SELECT max(id) maxID FROM sddGamehistory) a)",
    "SELECT * FROM ball",
  [],
    function (err, result) {
      // if(err){throw err};
    // res.send(JSON.stringify(result[0]));
    res.send(JSON.stringify(result));
  });
});



