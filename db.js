const Pool = require("pg").Pool;
const pool = new Pool({
    user: "nuritron",
    host: "postgres://nuritron:NY21op9jPmPthvMCOlVjB4JwV8oE3rL8@dpg-clf4jtpil2ks738nmj90-a.oregon-postgres.render.com/dbname_xhz1",
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