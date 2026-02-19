const port = 8080; // We'll run the server on port 8080

// IMPORTS
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const {getBlogList, convertMarkdown} = require("./modules/markdown-helpers")
const pathToBlogFolder = __dirname + '/blog/';

// MIDDLEWARE

app.use(express.static('public'));

app.set('view engine', 'ejs');

// allow the app to get data for form submits
app.use(bodyParser.urlencoded({ extended: true }));

// ROUTES
app.get('/', (req, res) => {
  res.render('home', {
     title: "My Home Page"
  });
});

app.get('/blog', (req, res)=>{
  const blogList = getBlogList(pathToBlogFolder);
  res.render('blog-list', {
    title: "Blog",
    posts: blogList
  });
});

app.get("/blog/:post", (req, res) => {
  try{
    const pathToFile = pathToBlogFolder + req.params.post + ".md";
    console.log("Markdown file: " + pathToFile);
    const obj = convertMarkdown(pathToFile);
    res.render('blog-post', {
       title: obj.data.title,
       description: obj.data.description,
       author: obj.data.author,
       published: obj.data.published,
       content: obj.html
    });
  }catch(error){
    console.log(error);
    res.status(404).redirect("/404");
  }
});

app.get('/contact', (req, res) => {
  res.render('contact', {
     title: "Contact Me"
  });
});

app.post('/contact/submit', (req, res) => {
  res.send("<h1>TODO: Handle contact form posts</h1>" + JSON.stringify(req.body));
});

// START THE SERVER
const server = app.listen(port, () => {
   console.log("Waiting for requests on port %s", port);
});