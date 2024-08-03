const Pool = require("pg").Pool;
const pool = new Pool({
    user: "nuritron",
    host: "dpg-cqn3cttsvqrc73fikcl0-a",
    database: "dbname_fryo",
    password: "K41PCn2WHx3hN46ywCBR1gI9HPZUxpYU",
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