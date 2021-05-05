const mysql = require('mysql')

const conn = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "root",
    port: 8889,
    database: "games"
})

let query = async function (sql) {
    return new Promise((resolve, reject) => {
        conn.query(sql, [], function (err, result) {
            if (err) {
                reject(err);
            } else {
                // console.log('connected');
                resolve(result);
                // console.log(result);
                return result
            }
            connection.end()
        })

    })

}

// const pool = mysql.createPool({
//     user: "root",
//     password: "root",
//     host: "127.0.0.1",
//     port: 8889,
//     database: "games"
// })

// let query = function (sql) {
//     console.log('enter db');
//     return new Promise((resolve, reject) => {
//         console.log('enter db 1');
//         pool.getConnection(function (err, connection) {
//             console.log('enter db 2');
//             if (err) {
//                 console.log(err, '1 reject');
//                 reject(err)
//             } else {
//                 connection.query(sql, [], (err, rows) => {
//                     if (err) {
//                         console.log(err, '2 reject');
//                         reject(err)
//                     } else {
//                         console.log(1, 'ok');
//                         resolve(rows)
//                         return rows
//                     }
//                     connection.release()
//                 })
//             }
//         })
//     })
// }

module.exports = { query }