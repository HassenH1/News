const express = require("express");
const app = express();
const port = 5000;
const NewsAPI = require("newsapi");
const newsapi = new NewsAPI("e3ad3410d8a347d8b68935d9ee916902");
const cors = require("cors");

app.use(cors()); //to fix cors issue
app.use(express.json()); //like body-parser

app.get("/", (req, res) => {
  newsapi.v2
    .topHeadlines({
      language: "en",
      country: "us",
      sortBy: "relevancy",
    })
    .then((response) => {
      res.json({
        status: "ok",
        articles: response.articles, //adding object to array
      });
    });
});

app.get("/technology", (req, res) => {
  newsapi.v2
    .topHeadlines({
      category: "technology",
      language: "en",
      country: "us",
      sortBy: "relevancy",
    })
    .then((response) => {
      res.json({
        status: "ok",
        articles: response.articles, //adding object to array
      });
    });
});

app.get("/politics", (req, res) => {
  newsapi.v2
    .topHeadlines({
      category: "politics",
      language: "en",
      country: "us",
      sortBy: "relevancy",
    })
    .then((response) => {
      res.json({
        status: "ok",
        articles: response.articles, //adding object to array
      });
    });
});

app.get("/sports", (req, res) => {
  newsapi.v2
    .topHeadlines({
      category: "sports",
      language: "en",
      country: "us",
      sortBy: "relevancy",
    })
    .then((response) => {
      res.json({
        status: "ok",
        articles: response.articles, //adding object to array
      });
    });
});

app.get("/entertainment", (req, res) => {
  newsapi.v2
    .topHeadlines({
      category: "entertainment",
      language: "en",
      country: "us",
      sortBy: "relevancy",
    })
    .then((response) => {
      res.json({
        status: "ok",
        articles: response.articles, //adding object to array
      });
    });
});

//test for searching
app.post("/findArticle", async (req, res) => {
  try {
    if (req.body.find) {
      //getting the body
      newsapi.v2
        .everything({
          q: req.body.find, //searching for article
          language: "en",
        })
        .then((response) => {
          res.json({
            status: "found",
            article: response.articles,
          });
        })
        .catch((err) => console.log(err));
    } else {
      res.json({ msg: "Nothing was Selected" });
    }
  } catch (err) {
    console.log(err);
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
