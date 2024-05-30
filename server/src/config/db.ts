import mysql from 'mysql2'

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'todotest',
    namedPlaceholders: true
})

console.log(db)

export default db
