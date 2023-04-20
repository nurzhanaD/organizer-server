const Pool = require("pg").Pool;
const pool = new Pool({
    user: "nuritron",
    password: "ITPlHFG8kINOnyhGe94OpSchIz2Lj7e6",
    host: "dpg-ch0ht2bh4hsukp2rrah0-a",
    port: 5432,
    database: "organizer_jejy"
});
// const pool = new Pool({
//     user: 'postgres',
//     password: '',
//     host: 'localhost',
//     port: 5432,
//     database:'organizer'
// });

module.exports = pool;