const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const ejs = require("ejs");
const path = require("path");
const Post = require("./models/Post");
const postController = require("./controllers/postControllers");
const pageController = require("./controllers/pageControllers");

const app = express();

mongoose.connect("mongodb://localhost/cleanblog-test-db");

//TEMPLATE ENGINE
app.set("view engine", "ejs");

//MIDDLEWARES
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  methodOverride("_method", {
    methods: ["POST", "GET"],
  })
);

app.get("/", postController.getAllPosts);
app.get("/posts/:id", postController.getPost);
app.put("/posts/:id", postController.updatePost);
app.post("/posts", postController.createPost);
app.delete("/posts/:id", postController.deletePost);

app.get("/about", pageController.getAboutPage);
app.get("/add_post", pageController.getAddPage);
app.get("/posts/edit/:id", pageController.getEditPage);

const port = 3000;

app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı.`);
});
