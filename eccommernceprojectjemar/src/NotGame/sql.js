const express = require("express")
const sql= require("mssql")
const app = express()
const port = 3001
const cors= require('cors')

const sqlConfig = {
    server: '172.187.184.173',
    database: 'JEMARDB',
    user: 'sa',
    password: 'Cheesecake!1',
    pool: {
        min: 0,
        max: 10,
        idleTimeoutMillis: 30000
    },
    options: {
        encrypt: false,
        trustServerCertificate: true
    }
}

app.get('/DisplayInfo', async (req, res) => {
 

    try {
       
        await sql.connect(sqlConfig);
        var request = new sql.Request();
       
        const query = `
            SELECT *
            FROM DisplayInfo
        `;

        const result = await request.query(query);

        res.json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Error connecting to database."});
    }})

