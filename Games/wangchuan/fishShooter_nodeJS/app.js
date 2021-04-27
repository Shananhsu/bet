let express = require('express');
let app = express();//----------------
app.listen(3000);
app.use(express.static("public"));


let bodyParser = require('body-parser');//----------------
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let render = require('ejs');//----------------
app.set('view engine', 'ejs');

let mysql = require('mysql')//----------------
let conn = mysql.createConnection({
    user: "root",
    password: "",
    host: '127.0.0.1',
    port: 3306,
    database: 'fishshooter',
    multipleStatements: true//新增此項，同時執行兩個語句`,否則page路由的兩個query語句無法作用
});

// connect()是做什麼用的?
// connect()用來連接資料庫，
// 不使用這個method仍會連上資料庫可能是因為套件偵測到漏掉這個步驟而自動補上
conn.connect(function (err) {
    if (err) {
        console.log("連線錯誤");
    }
})


app.get("/", function (req, res) {

    conn.query(
        "select * from betrecord",
        function (err, result) {
            res.send(JSON.stringify(result));
        }
    )
})


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










