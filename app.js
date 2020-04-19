const express = require("express");


const app= express();
const path = require("path");


app.set("view engine","ejs");
app.set("views",path.resolve(__dirname, "views"));


const blogposts = require('./data/blog.json');

app.get("/", function(request,response){
response.render("home");
});

app.get('/kunstwerken', function(request, response){
response.render('kunstwerken', {

  posts: blogposts.blog

 });
});





app.get("/contact", function(request,response){
response.render("contact");
});


app.get('/blog/:postid', function(req,res){
  res.render('detail', {
    post: blogposts.blog[req.params.postid]
  });
});
app.set('port', (process.env.PORT || 5000));
app.listen(app.get('port'));


app.use(express.static('public'));
