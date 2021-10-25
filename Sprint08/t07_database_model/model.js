const mysql = require('mysql2')
const config = require('./config.json')
class Model {
    connection;
    constructor(table) {
        this.table = table
    }
   async find(id) {
       let query = `SELECT * FROM ${this.table} WHERE id = ${id};`
       let [rows, fields] = await this.connecting(query)
       if (rows) {
           rows.map((item) => {
               this.data.push(item)
           });
       }
       return this;
    }

   async delete() {
       if (!this.data[0]) {
            return false
       }
       let query = `SELECT * FROM ${this.table} WHERE id = ${this.data[0].id};`
       let [rows, fields] = await this.connecting(query)
       if (rows) {
           let query = `DELETE FROM ${this.table} WHERE id = ${this.data[0].id};`
           let [rows, fields] = await this.connecting(query)
           if (rows) {
               return true;
           } else {
               return false;
           }
       } else {
           return false
       }
   }

    async save(data) {
       let keys = [];
       let values = [];
       let update = [];
       let query;
       for (let key in data) {
           if (key !== 'id') {
               keys.push(key);
               values.push(`'${data[key]}'`);
               update.push(`${key}='${data[key]}'`);
           }
       }
       if (data.id) {
           query = `UPDATE ${this.table} SET ${update} WHERE id=${data.id};`
       } else {
           query = `INSERT INTO ${this.table} (${keys}) VALUES (${values});`
       }
        await this.connecting(query)
        console.log(query);
        return this;
    }
    
   async getAll() {
       let query = `SELECT * FROM ${this.table};`
       let [rows, fields] = await this.connecting(query)
       if (rows) {
        rows.map((item) => {
            this.data.push(item)
        });
    }
    return this;
   }
    
   async connecting(query) {
        this.connection = mysql.createConnection({
            host: config.db.host,
            user: config.db.user,
            database: config.db.database,
            password: config.db.password
        })

        this.connection.connect()
            let result;
            try {
                result = this.connection.promise().query(query);
            } catch (err) {
                console.error(err);
            }
            this.connection.end();
         return result;
    }
} 


module.exports = Model