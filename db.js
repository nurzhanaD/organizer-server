const Pool = require("pg").Pool;
const pool = new Pool({
    user: "nuritron",
    password: "C2ZDSDi1bW4SnenYCijjPHJ8EwAkpRnf",
    host: "dpg-cjajtdqs9rhs73aldun0-a",
    port: 5432,
    database: "organizer_u5gx"
});
// const pool = new Pool({
//     user: 'postgres',
//     password: '',
//     host: 'localhost',
//     port: 5432,
//     database:'organizer'
// });

module.exports = pool;