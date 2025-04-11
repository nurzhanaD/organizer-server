const Pool = require("pg").Pool;
const pool = new Pool({
    user: "nuritron",
    host: "dpg-cvse53re5dus739297ag-a",
    database: "organizer_db_5lth",
    password: "2hJJdIuIVRVIAkLTVsddbyDwPvq5hbCb",
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