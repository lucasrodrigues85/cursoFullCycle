const express = require('express')
const app = express()
const port = process.env.APP_PORT || 3000

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}

const mysql = require('mysql')
const connection = mysql.createConnection(config)

app.get('/', (req, res) => {

    const addNames = ['Lucas', 'Maria', 'João'];

    addNames.forEach(nome => {
        connection.query(`INSERT IGNORE INTO people(name) VALUES(?)`, [nome], (error, results, fields) => {
            if (error) {
                console.error('Erro no banco de dados:', error);
                return res.status(500).json({ error: 'Erro ao inserir ou ignorar registro no banco de dados.' });
            }
        });
    });

    connection.query(`SELECT name FROM people`, (error, results, fields) => {
        if (error) {
            return res.status(500).json({ error: 'Erro ao obter dados do banco de dados.' });
        }

        res.send(`<h1>Full Cycle Rocks!<h1>
                <ol>${!!results.length ? results.map(el => `<li>${el.name}</li>`).join('') : ''}</ol>`);
    });
})

// Porta do servidor
app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})