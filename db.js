const Pool = require("pg").Pool;
const pool = new Pool({
    user: "nuritron",
    host: "dpg-clfrlvef27hc739f0hfg-a",
    database: "dbname_gcwg",
    password: "UiNL4SWy5PtcGkpmEFGt33PvTip1wdtN",
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