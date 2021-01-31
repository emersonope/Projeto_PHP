const fetch = require('node-fetch')

module.exports = function(){
    this.buscar = function(connection, callback){
        connection.query('select * from dados', callback);
    }


    /*this.inserir = function(dados, connection, callback) {
        connection.query('insert into dados set ?' , dados)
    }*/
    return this;
}
