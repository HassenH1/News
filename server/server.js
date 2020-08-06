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

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
