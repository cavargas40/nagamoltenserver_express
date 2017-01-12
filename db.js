var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('data/nmdb');

db.serialize(function(){
    db.run("CREATE TABLE IF NOT EXISTS counts(key TEXT, value INTEGER)");
    db.run("INSERT INTO counts (key, value) VALUES (?, ?)", "counter", 0);
});