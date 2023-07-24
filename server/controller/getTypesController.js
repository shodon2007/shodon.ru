const mysql = require('mysql');

const conn = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    database: 'shodon.ru',
    password: 'root',
});

conn.connect(err => {
    if (err) return console.log('ОШибка в BD')
    console.log('база данных успешно запущен')
});


function getTypes(req, res) {
    const query = `SELECT DISTINCT type FROM \`app-list\``;
    conn.query(query, (err, apps) => {
        if (err) return console.log('Ошибка в getTypes запросе');
        apps = apps.map(item => item.type);
        res.send(apps);
    });
}


module.exports = getTypes;