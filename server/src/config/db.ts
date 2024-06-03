import mysql from 'mysql2'

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'todotest',
    namedPlaceholders: true
})

if(db){
    console.log('Sunucuya bağlanıldı')
}

export default db
