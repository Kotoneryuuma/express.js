var express = require("express");
console.log("Let's find out what express is", express);

var app = express();
console.log("Let's find out what app is", app);

app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

app.use(express.static(__dirname + "/static"));


app.get('/', function(request, response) {
    console.log("The request object", request);
    console.log("The response object", response);
    response.send("<h1>Hello Express</h1>");
})

app.get("/cats", function (request, response){
    response.render('cats');
})


app.get("/white", function (request, response){
    var white_array = [ 
        {name: "Joe"}, 
        {f_food: "Mexican"}, 
        {a_point: "snore"},
        {a_point: "bigshit"},
    ];
    response.render('white', {white: white_array});
})

app.get("/mike", function (request, response){
    var mike_array = [ 
        {name: "Helnandez"}, 
        {f_food: "Chinese"}, 
        {a_point: "loud voice"},
        {a_point: "big face"},
    ];
    response.render('mike', {mike: mike_array});
})

app.get("/black", function (request, response){
    var black_array = [ 
        {name: "Moman"}, 
        {f_food: "French"}, 
        {a_point: "small voice"},
        {a_point: "small hands"},
    ];
    response.render('black', {black: black_array});
})





app.listen(8000, function() {
  console.log("listening on port 8000");
})
