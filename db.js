const Pool = require("pg").Pool;
const pool = new Pool({
    user: "nuritron",
    host: "dpg-clf4jtpil2ks738nmj90-a",
    database: "dbname_xhz1",
    password: "NY21op9jPmPthvMCOlVjB4JwV8oE3rL8",
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