import express from "express";
import bodyParser from "body-parser";
import ejs from "ejs";

const app = express();

// Set up EJS as templating engine
app.set("view engine", "ejs");

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// In-memory data store for blog posts
let posts = [
  {
    id: 1,
    title: "Getting Started with Node.js",
    content: "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.\n\nIn this post, we'll explore how to build a simple web application using Node.js and Express. Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.",
    snippet: "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine...",
    date: "May 8, 2025"
  },
  {
    id: 2,
    title: "The Power of EJS Templates",
    content: "EJS (Embedded JavaScript) is a simple templating language that lets you generate HTML markup with plain JavaScript. It's a great tool for creating dynamic web pages with Node.js.\n\nEJS is easy to use and has a gentle learning curve. It allows you to write JavaScript directly in your templates. You can also include partials, which are reusable components that help keep your code DRY (Don't Repeat Yourself).",
    snippet: "EJS (Embedded JavaScript) is a simple templating language that lets you generate HTML markup...",
    date: "May 9, 2025"
  }
];

// Routes

// Home page
app.get("/", (req, res) => {
  res.render("home", { posts: posts });
});

// About page
app.get("/about", (req, res) => {
  res.render("about");
});

// Contact page
app.get("/contact", (req, res) => {
  res.render("contact");
});

// Compose new post page
app.get("/compose", (req, res) => {
  res.render("compose");
});

// Handle new post submission
app.post("/compose", (req, res) => {
  const post = {
    id: posts.length + 1,
    title: req.body.postTitle,
    content: req.body.postContent,
    snippet: req.body.postContent.substring(0, 100) + "...",
    date: new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  };
  
  posts.push(post);
  res.redirect("/");
});

// Individual post page
app.get("/posts/:postId", (req, res) => {
  const requestedPostId = parseInt(req.params.postId);
  
  const post = posts.find(p => p.id === requestedPostId);
  
  if (post) {
    res.render("post", { post: post });
  } else {
    res.status(404).send("Post not found");
  }
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});