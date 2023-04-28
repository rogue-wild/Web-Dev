const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost:27017/wikiDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const articleSchema = {
  title: String,
  content: String,
};

const Article = mongoose.model("Article", articleSchema);

app.get("/articles", async function (req, res) {
  try {
    const foundArticles = await Article.find();
    res.send(foundArticles);
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong.");
  }
});

app.post("/articles", function (req, res) {
  
    const newArticle = new Article({
        title: req.body.title,
        content: req.body.content
    });

    newArticle.save(function(err){
        if(!err){
            res.send("Successfully added a new article.");
        } else {
            res.send(err);
        }
    });
});

app.delete("/articles", async function(req, res){
    try {
        await Article.deleteMany();
        res.send("Successfully deleted all articles.");
    } catch (err) {
        res.send(err);
    }
});
 

///////////////////////////// Requests Targetting A Specific Article /////////////////////////////

app.route("/articles/:articleTitle")

.get(async function(req, res){
    try {
        const foundArticle = await Article.findOne({title: req.params.articleTitle});
        if(foundArticle){
            res.send(foundArticle);
        } else {
            res.send("No articles matching that title was found.");
        }
    } catch (err) {
        res.send(err);
    }
})

.put(async function(req, res){
    try {       
        await Article.update(
            {title: req.params.articleTitle},
            {title: req.body.title, content: req.body.content},
            {overwrite: true}
        );
        res.send("Successfully updated article.");
    } catch (err) {
          res.send(err);
    }

})

.patch(function(req, res){
    Article.update(
        {title: req.params.articleTitle},
        {
            $set: req.body
        })
        .then(function(){
            res.send("Successfully updated article.");
        }
    )
    .catch(function(err){
        res.send(err);
    });
}); 


app.listen(3000, function () {
  console.log("Server started on port 3000");
});
