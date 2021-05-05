var express = require("express");
var app = express();
var bodyParser = require('body-parser');
app.listen(3100);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.set('view engine', 'html');
// app.engine('html', require('ejs').renderFile);
app.use("/", express.static(__dirname + "/public"));


var mysql = require("mysql");
var conn = mysql.createConnection({
    user: "root",
    password: "root",
    host: "127.0.0.1",
    port: 8889,
    database: "niuniu"
})

app.get("/fetch", function (req, res) {
    conn.query(
        "select * from records where id in (select a.maxID from (select max(id) maxID from records) a)", [], function (err, result) {
            if (err) {
                console.log(JSON.stringify(err));
                return;
            }
            res.send(JSON.stringify(result[0]));
        }
    )
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

app.post("/update", function (req, res) {
    var moneyAfter = req.body.moneyAfter;
    var result = req.body.result;
    var dealerCards = req.body.dealerCards;
    var playerCards = req.body.playerCards;
    var status = req.body.status;

    conn.query(
        "UPDATE records SET moneyAfter = ?, result = ?,dealerCards=?,playerCards=?,status=?  WHERE id IN (SELECT a.maxID FROM (SELECT max(id) maxID FROM records) a)",
        [moneyAfter, result, dealerCards, playerCards, status],
        function (err, result) {
            if (err) { throw err } else {
                res.send('ok')
            }
        }
    )
})


app.get("/admin", function (req, res) {
    res.redirect("data.html")
    // res.render("data.html")
})

app.get("/select", function (req, res) {
    conn.query("select * from niuniu_records", [], function (err, result) {
        if (err) {
            console.log(JSON.stringify(err));
            return;
        }
        res.send(JSON.stringify(result))
    })
})
