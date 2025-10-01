const Pool = require("pg").Pool;
const pool = new Pool({
    user: "nuritron",
    host: "dpg-d3eegbbipnbc73bqn90g-a",
    database: "dbname_54lq",
    password: "l9EUETvrfbxv7sTfQ6b9Nj1MSBZLH5uH",
    port: 5432,
});
// const pool = new Pool({
//     user: 'postgres',
//     password: '',
//     host: 'localhost',
//     port: 5432,
//     database:'organizer'
// });

module.exports = pool;