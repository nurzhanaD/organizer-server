const Pool = require("pg").Pool;
const pool = new Pool({
    user: "nuritron",
    password: "NY21op9jPmPthvMCOlVjB4JwV8oE3rL8",
    host: "dpg-clf4jtpil2ks738nmj90-a",
    port: 5432,
    database: "dbname_xhz1"
});
// const pool = new Pool({
//     user: 'postgres',
//     password: '',
//     host: 'localhost',
//     port: 5432,
//     database:'organizer'
// });

module.exports = pool;