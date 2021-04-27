var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", express.static(__dirname + "/public"));

var mysql = require("mysql");
var conn = mysql.createConnection({
    user: "root",
    password: "root",
    host: "127.0.0.1",
    port: 8889,
    database: "blackjack"
})

app.get("/fetch", (req, res) => {
    conn.query("select * from records where id in (select a.maxID from (select max(id) maxID from records) a)", [], (err, result) => {
        if (err) throw err;
        res.send(JSON.stringify(result[0]))
    })
})

app.post("/store", function (req, res) {
    var account = req.body.account;
    var bet = req.body.bet;
    var moneyBefore = req.body.moneyBefore;
    var moneyAfter = req.body.moneyAfter;
    var betTime = req.body.betTime;
    var gameType = req.body.gameType;

    conn.query(
        "INSERT INTO records (account,bets,moneyBefore,moneyAfter,betTime,gameType) VALUES (?,?,?,?,?,?)", [account, bet, moneyBefore, moneyAfter, betTime, gameType], function (err, result) {
            if (err) { throw err } else {
                res.send('ok')
            }
        }
    )
})




app.listen(3100);