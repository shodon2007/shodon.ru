const mysql = require('mysql');

const conn = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    database: 'shodon.ru',
    password: 'root',
});

conn.connect(err => {
    if (err) return console.log('Ошибка в BD')
    console.log('база данных успешно запущен')
});

async function selectApps(type) {
    const query = `SELECT * FROM \`app-list\` WHERE type = "${type}"`
    const apps = await new Promise((res, rej) => conn.query(query, (err, apps) => {
        if (err) return console.log('Ошибка в запросе');
        res(apps);
    }));
    return apps;
}

function getApps(type) {
    return async function (req, res) {
        const apps = await selectApps(type);
        res.send(apps);
    }
}

module.exports = getApps;