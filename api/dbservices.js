var MongoClient = require('mongodb').MongoClient;
var conn = require('./dbconfig');
var url = conn.url;

createCollection = function(name){
    MongoClient.connect(url, function(err, dbconn) {
        if (err) throw err;
        //creating connection
        var db = dbconn.db(conn.dbname);
        db.createCollection(name, (err,res)=>{
            if (err) throw err;
            console.log("collection " + name + " created");
        });
      });
}


//insert document
exports.insertDB = function(coll, obj){
    return new Promise((resolve,reject)=>{
    MongoClient.connect(url, function(err, dbconn) {
        if (err) throw err;
        var db = dbconn.db(conn.dbname);
        db.collection(coll).insertOne(obj, function(err, res) {
            if (err) throw err;
            console.log("1 document inserted");
            resolve({success:true});
          });
    });
    });
}

//insert many documents
exports.insertDBMany = function(collection,obj){
    MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, dbconn) {
        if (err) throw err;
        var db = dbconn.db(conn.dbname);
        db.collection(collection).insertMany(obj, function(err, res) {
            if (err) throw err;
            console.log(res.insertedCount+" documents inserted");
          });
    });
}

//select documents
exports.findDB = function(collection,query = null,projection = null){
    return new Promise((resolve,reject)=>{
    MongoClient.connect(url, { useNewUrlParser: true, 
        useUnifiedTopology: true }, function(err, dbconn) {
        if (err) throw err;
        var db = dbconn.db(conn.dbname);
        db.collection(collection).find(query,projection).limit(100).toArray(function(err, res) {
            if (err) throw err;
            console.log(res);
            resolve(res);
          });
    });
});
}

//update one document
exports.updateDB = function(collection, query, newval){
    MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, dbconn) {
        if (err) throw err;
        var db = dbconn.db(conn.dbname);
        db.collection(collection).updateOne(query, newval, function(err, res) {
            if (err) throw err;
            console.log("1 document updated");
          });
    });
}

// update documents
exports.updateDBMany = function(collection, query, newval){
    MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, dbconn) {
        if (err) throw err;
        var db = dbconn.db(conn.dbname);
        db.collection(collection).updateMany(query, newval, function(err, res) {
            if (err) throw err;
            console.log(res.result.nModified+" document(s) updated");
          });
    });
}

//delete one document
exports.deleteDB = function(collection, query){
    MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, dbconn) {
        if (err) throw err;
        var db = dbconn.db(conn.dbname);
        db.collection(collection).deleteOne(query, function(err, res) {
            if (err) throw err;
            console.log("1 document deleted");
          });
    });
}

// delete many documents - query must be a regex or multiple json
exports.deleteDBMany = function(collection, query){
    MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, dbconn) {
        if (err) throw err;
        var db = dbconn.db(conn.dbname);
        db.collection(collection).deleteOne(query, function(err, res) {
            if (err) throw err;
            console.log(res.result.n + " document(s) deleted");
          });
    });
}
