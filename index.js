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

/* select all data from the table */
app.get('/api/user_table',(request, response)=>{

    var query = `SELECT * FROM travelvan.user_table`;
    connection.query(query, function(err,rows,fields){
        if(err){
            response.send('Failed select query from user_table!');
        }
        response.send(rows);
    });

})
/* insert single data into the table */
app.post('/api/user_table',(request, response)=>{

    var query = `INSERT into travelvan.user_table
                (Name, UserId, Phone) VALUES (?, ?, ?) `;
    var values = [request.body['Name'],request.body['UserId'],request.body['Phone']];
    
    connection.query(query, values,function(err,rows,fields){
        if(err){
            response.send('Failed to insert user in user_table!');
        }
        response.json('Added data into user_table');
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

//Table6: desirestogoto
app.get('/api/desirestogoto',(request, response)=>{

    var query = `SELECT * FROM travelvan.desirestogoto`;
    connection.query(query, function(err,rows,fields){
        if(err){
            response.send('Failed select query from desirestogoto!');
        }
        response.send(rows);
    });

});

//Table7: emergencymedicalservice
app.get('/api/emergencymedicalservice',(request, response)=>{

    var query = `SELECT * FROM travelvan.emergencymedicalservice`;
    connection.query(query, function(err,rows,fields){
        if(err){
            response.send('Failed select query from emergencymedicalservice!');
        }
        response.send(rows);
    });

});

//Table8: follows
app.get('/api/follows',(request, response)=>{

    var query = `SELECT * FROM travelvan.follows`;
    connection.query(query, function(err,rows,fields){
        if(err){
            response.send('Failed select query from follows!');
        }
        response.send(rows);
    });

});


//Table9: hadpersonalposts
app.get('/api/hadpersonalposts',(request, response)=>{

    var query = `SELECT * FROM travelvan.hadpersonalposts`;
    connection.query(query, function(err,rows,fields){
        if(err){
            response.send('Failed select query from hadpersonalposts!');
        }
        response.send(rows);
    });

});

//Table10: hadpictures
app.get('/api/hadpictures',(request, response)=>{

    var query = `SELECT * FROM travelvan.hadpictures`;
    connection.query(query, function(err,rows,fields){
        if(err){
            response.send('Failed select query from hadpictures!');
        }
        response.send(rows);
    });

});

//Table11: malls
app.get('/api/malls',(request, response)=>{

    var query = `SELECT * FROM travelvan.malls`;
    connection.query(query, function(err,rows,fields){
        if(err){
            response.send('Failed select query from malls!');
        }
        response.send(rows);
    });

});

//Table12: medicalservice
app.get('/api/medicalservice',(request, response)=>{

    var query = `SELECT * FROM travelvan.medicalservice`;
    connection.query(query, function(err,rows,fields){
        if(err){
            response.send('Failed select query from medicalservice!');
        }
        response.send(rows);
    });

});

//Table13: nonemergencymedicalservice
app.get('/api/nonemergencymedicalservice',(request, response)=>{

    var query = `SELECT * FROM travelvan.nonemergencymedicalservice`;
    connection.query(query, function(err,rows,fields){
        if(err){
            response.send('Failed select query from nonemergencymedicalservice!');
        }
        response.send(rows);
    });

});


//Table14: ownedplace
app.get('/api/ownedplace',(request, response)=>{

    var query = `SELECT * FROM travelvan.ownedplace`;
    connection.query(query, function(err,rows,fields){
        if(err){
            response.send('Failed select query from ownedplace!');
        }
        response.send(rows);
    });

});


//Table15: park
app.get('/api/park',(request, response)=>{

    var query = `SELECT * FROM travelvan.park`;
    connection.query(query, function(err,rows,fields){
        if(err){
            response.send('Failed select query from park!');
        }
        response.send(rows);
    });

});

//Table16: postedreviews
app.get('/api/postedreviews',(request, response)=>{

    var query = `SELECT * FROM travelvan.postedreviews`;
    connection.query(query, function(err,rows,fields){
        if(err){
            response.send('Failed select query from postedreviews!');
        }
        response.send(rows);
    });

});

//Table17: privatetransport
app.get('/api/privatetransport',(request, response)=>{

    var query = `SELECT * FROM travelvan.privatetransport`;
    connection.query(query, function(err,rows,fields){
        if(err){
            response.send('Failed select query from privatetransport!');
        }
        response.send(rows);
    });

});


//Table18: 	publictransport
app.get('/api/publictransport',(request, response)=>{

    var query = `SELECT * FROM travelvan.publictransport`;
    connection.query(query, function(err,rows,fields){
        if(err){
            response.send('Failed select query from publictransport!');
        }
        response.send(rows);
    });

});


//Table19: recreationcenters
app.get('/api/recreationcenters',(request, response)=>{

    var query = `SELECT * FROM travelvan.recreationcenters`;
    connection.query(query, function(err,rows,fields){
        if(err){
            response.send('Failed select query from recreationcenters!');
        }
        response.send(rows);
    });

});


//Table20: requires
app.get('/api/requires',(request, response)=>{

    var query = `SELECT * FROM travelvan.requires`;
    connection.query(query, function(err,rows,fields){
        if(err){
            response.send('Failed select query from requires!');
        }
        response.send(rows);
    });

});


//Table21: restaurant
app.get('/api/restaurant',(request, response)=>{

    var query = `SELECT * FROM travelvan.restaurant`;
    connection.query(query, function(err,rows,fields){
        if(err){
            response.send('Failed select query from restaurant!');
        }
        response.send(rows);
    });

});

//Table22: tourist
app.get('/api/tourist',(request, response)=>{

    var query = `SELECT * FROM travelvan.tourist`;
    connection.query(query, function(err,rows,fields){
        if(err){
            response.send('Failed select query from tourist!');
        }
        response.send(rows);
    });

});

//Table23: transport
app.get('/api/transport',(request, response)=>{

    var query = `SELECT * FROM travelvan.transport`;
    connection.query(query, function(err,rows,fields){
        if(err){
            response.send('Failed select query from transport!');
        }
        response.send(rows);
    });

});