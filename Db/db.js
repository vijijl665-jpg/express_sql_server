//connectivity code server---> db

import mysql from 'mysql2/promise'
import dotenv from 'dotenv'

dotenv.config();

const db = mysql.createPool({ //help to maintain multile connnection and defining
    host:process.env.SQL_HOST,
    user: process.env.SQL_USER,
    password: process.env.SQL_PASS,
    database:process.env.SQL_DB,
    port: process.env.SQL_PORT,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
})

export const connectDB = async () => {
    try {
        const connection = await db.getConnection(); // connecting express and mysql
        console.log("mysql connected sucessfully");
        connection.release()
    } catch (err) {
        console.error("connection is not established", err);
        process.exit(1);
    }
}
export default db;




