const routes = require("express").Router();
// const items = require("./items");
// const companies = require("./companies");
// const cart = require("./cart");

routes.get("/", (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      message: "Connected!",
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
});

routes.get("/stock", async (req, res) => {
  const body = JSON.parse(JSON.stringify(req.body));
  const { ticker, type } = body;
  console.log("stocks-api.js 14 | body", body.ticker);
  const request = await fetch(
    `https://finnhub.io/api/v1/company-news?token=bu3377n48v6pqlhnsqfg&symbol=AAPL&from=2020-01-01&to=2020-05-01`
  );
  // "/api/v1/company-news?token=bu3377n48v6pqlhnsqfg&symbol=AAPL&from=2020-01-01&to=2020-05-01"
  const data = await request.json();
  res.json({ data: data });
  console.log(data);
});

module.exports = routes;
