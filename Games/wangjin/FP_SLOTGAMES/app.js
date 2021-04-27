
// 以 Express 建立 Web 伺服器
var express = require("express");
var app = express();
var fs = require('fs');
// 允許跨域使用本服務
var cors = require("cors");
app.use(cors());


// 以 body-parser 模組協助 Express 解析表單與JSON資料
var bodyParser = require('body-parser');
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({extended: false}) );

// Web 伺服器的靜態檔案置於 public 資料夾
app.use( express.static( "public" ) );

// 以 express-session 管理狀態資訊
var session = require('express-session');
app.use(session({
    secret: 'secretKey',
    resave: false,
    saveUninitialized: true
}));

// 指定 esj 為 Express 的畫面處理引擎
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.set('views', __dirname + '/view');

// 一切就緒，開始接受用戶端連線
app.listen(3000);
console.log("Web伺服器就緒，開始接受用戶端連線.");
console.log("「Ctrl + C」可結束伺服器程式.");

// 建立資料庫連線
var mysql = require('mysql');
var connection = mysql.createConnection({
	host : '127.0.0.1',
	user : 'root',
	password : '',
	database : 'casino'
});

connection.connect(function(err) {
	// if (err) throw err;
	if (err) {
		console.log(JSON.stringify(err));
		return;
	}
});
function render(filename, params) {
	var data = fs.readFileSync(filename, 'utf8');
	for (var key in params) {
	  data = data.replace('{' + key + '}', params[key]);
	}
	return data;
  }
// 依 HTTP 的 Method (POST/GET/PUT/DELETE) 進行增查修刪

app.get("/game/user", function (request, response) {

	connection.query('select * from users', 
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
app.get("/game/results", function (request, response) {

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


app.post("/game/results", function (request, response) {

	connection.query(
		"insert into results set UserID = 1, BetTime = ?,Lay='All',Stake=?,AccountBalBE=?,GameResult=?,NetWin=?,AccountBalAF=? ", 
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

app.get('/results', function (req, res) {
	res.send(render('./public/results.html'));
  })

app.put("/game/user", function (request, response) {

	connection.query(
		"update users set UserWallet = ? where UserId =1 " ,
		    
			[
				request.body.UserWallet 
				
			]);
	response.send("row updated.");
    
})


app.delete("/home/news", function (request, response) {

	connection.query(
		"delete from news where newsId = " + request.body.newsId,
			[]
		);
	response.send("row deleted.");
    
})

