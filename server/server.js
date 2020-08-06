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
      // category: "technology",
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

app.get("/testing", (req, res) => {
  newsapi.v2
    .topHeadlines({
      // category: "technology",
      q:
        "Teladoc Health Merging with Livongo Health in Deal Worth $18.5 Billion - Motley Fool",
      language: "en",
      country: "us",
    })
    .then((response) => {
      console.log(response, "<-------does it find the article itself?");
    });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
