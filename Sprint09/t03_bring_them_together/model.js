const mysql = require('mysql2');
const config = require('./config.json');

class Model {
    constructor(table) {
        this.table = table
    }
    async save(data) {
        let keys = [];
        let values = [];
        let query;
        for (let key in data) {
            if (key !== 'id') {
                keys.push(key)
                values.push(`'${data[key]}'`)
            }
        }
        if (!data.id) {
            query = `INSERT INTO ${this.table} (${keys}) VALUES (${values});`
        }
        await this.connect(query)
        return data
    }
    async findUser(email) {
        let query = `SELECT * FROM ${this.table} WHERE email = "${email}";`
        console.log(query);
        await this.connect(query)
        return email
    }

    async getAll(data) {
        let arr = [];
        for(let key in data) {
            if(key !== 'id') {
                arr.push(`${key}='${data[key]}'`);
            }
        }
        let query = `SELECT * FROM ${this.table} WHERE ${arr.join(' AND ')};`;
    
        let [rows,fields] = await this.connect(query);
        return rows;
      }

    async connect(query) {
        this.connection = mysql.createConnection({
            host: config.db.host,
            user: config.db.user,
            database: config.db.database,
            password: config.db.password,
        });
        this.connection.connect()
        let result;
            try {
                result = this.connection.promise().query(query);
            } catch (error) {
                console.log(error);
            }
        this.connection.end()
        return result
    }
}

module.exports = Model;