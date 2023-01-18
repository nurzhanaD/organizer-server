const Pool = require("pg").Pool;
const pool = new Pool({
    user: "postgres",
    password: "3YKsM9RRXbxjR0Ec02365vCJGmS6ybtt",
    host: "dpg-cf41he1a6gdmd1idgh80-a",
    port: 5432,
    database: "organizer"
});

module.exports = pool;