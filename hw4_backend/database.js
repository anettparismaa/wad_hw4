 // database.js
 const Pool = require('pg').Pool;
 const pool = new Pool({
     user: "postgres",
     password: "", //password for postgres
     database: "hw4",
     host: "localhost",
     port: "5432"
 });

 const execute = async(query) => {
    try {
        await pool.connect(); // create a connection
        await pool.query(query); // executes a query
        return true;
    } catch (error) {
        console.error(error.stack);
        return false;
    }
};

//if users table does mot exist
const createTblQueryUsers = `
    CREATE TABLE IF NOT EXISTS "users" (
        id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
        email VARCHAR(200) NOT NULL UNIQUE,
        password VARCHAR(200) NOT NULL 
    );`;

//if post table does not exist
const createTblQueryPosttable = `
    CREATE TABLE IF NOT EXISTS "posttable" (
	    "id" SERIAL PRIMARY KEY,         
	    "title" VARCHAR(200) NOT NULL,
	    "body" VARCHAR(200) NOT NULL,
        "urllink" VARCHAR(200), 
        "time" VARCHAR(50)  
    );`;

execute(createTblQueryUsers).then(result => {
    if (!result) {
        console.log('Table "users" is created.');
    }
});

execute(createTblQueryPosttable).then(result => {
    if (!result) {
        console.log('Table "posttable" is created.');
    }
});

module.exports = pool;