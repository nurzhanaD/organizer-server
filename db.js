const Pool = require("pg").Pool;
const pool = new Pool({
    user: "nuritron",
    host: "dpg-crt60f8gph6c7394n7og-a",
    database: "organizer_db_qkji",
    password: "f8UXxlFyabhPRK93fNYefoNrh3VOMVlf",
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