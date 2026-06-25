const Pool = require("pg").Pool;
const pool = new Pool({
    user: "db_6k3m_user",
    host: "dpg-d8udsdbaml3c73df5qg0-a",
    database: "db_6k3m",
    password: "fJOZywioYxXMWE2YfR9FMOBiUQbj9CiY",
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
