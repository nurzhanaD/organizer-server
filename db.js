const Pool = require("pg").Pool;
const pool = new Pool({
    user: "nuritron",
    password: "1EnTFTNCVOXUeUUAzWuZQ5CguS3tJ20L",
    host: "dpg-clf295bl00ks739v7qc0-a",
    port: 5432,
    database: "organizer_48nj"
});
// const pool = new Pool({
//     user: 'postgres',
//     password: '',
//     host: 'localhost',
//     port: 5432,
//     database:'organizer'
// });

module.exports = pool;