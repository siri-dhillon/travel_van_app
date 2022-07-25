// Created by: Sirpreet K. Dhillon and Simran Nijjar 
// This file creates our backend and our REST APIs 

// imports
var Express = require("express");
var bodyParser = require("body-parser");


// creating an instance of express app 
var app = Express(); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// CORS
var cors = require("cors");
app.use(cors()); // can use corsOptions but will leave as is for travelvan project 


// MYSQL DB
var mysql = require("mysql");
const { request, response } = require("express");
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'travelvan'
});






















// APP listening on PORT = 49146 --> http://localhost:49146 
app.listen(49146, ()=>{
    connection.connect(function(err){
        if(err) throw err;
        console.log('Connected to TravelVan DB');
    });
});

// '/' means that it will be the root path/url
app.get('/', (request, response)=>{
    response.send('Travel Van Web Application Setup Tested!')
;})


// API Methods : GET POST PUT ... 
// Table1: user_table
app.get('/api/user_table',(request, response)=>{

    var query = `SELECT * FROM travelvan.user_table`;
    connection.query(query, function(err,rows,fields){
        if(err){
            response.send('Failed select query from user_table!');
        }
        response.send(rows);
    });

})

//Table2: Arriveby
app.get('/api/arriveby',(request, response)=>{

    var query = `SELECT * FROM travelvan.arriveby`;
    connection.query(query, function(err,rows,fields){
        if(err){
            response.send('Failed select query from arriveby!');
        }
        response.send(rows);
    });

});

//Table3: businessperson
app.get('/api/businessperson',(request, response)=>{

    var query = `SELECT * FROM travelvan.businessperson`;
    connection.query(query, function(err,rows,fields){
        if(err){
            response.send('Failed select query from businessperson!');
        }
        response.send(rows);
    });

});

//Table4: club
app.get('/api/club',(request, response)=>{

    var query = `SELECT * FROM travelvan.club`;
    connection.query(query, function(err,rows,fields){
        if(err){
            response.send('Failed select query from club!');
        }
        response.send(rows);
    });

});

//Table5: concert
app.get('/api/concert',(request, response)=>{

    var query = `SELECT * FROM travelvan.concert`;
    connection.query(query, function(err,rows,fields){
        if(err){
            response.send('Failed select query from concert!');
        }
        response.send(rows);
    });

});

//Table5: desirestogoto
app.get('/api/desirestogoto',(request, response)=>{

    var query = `SELECT * FROM travelvan.desirestogoto`;
    connection.query(query, function(err,rows,fields){
        if(err){
            response.send('Failed select query from desirestogoto!');
        }
        response.send(rows);
    });

});

//Table5: emergencymedicalservice
app.get('/api/emergencymedicalservice',(request, response)=>{

    var query = `SELECT * FROM travelvan.emergencymedicalservice`;
    connection.query(query, function(err,rows,fields){
        if(err){
            response.send('Failed select query from emergencymedicalservice!');
        }
        response.send(rows);
    });

});