const express = require("express");
const connectTodb = require("./db.js");
var cors = require('cors')
const port = 3001;
const app = express();
app.use(cors())
// respond with "hello world" when a GET request is made to the homepage
app.use(express.json());
connectTodb();
app.use("/api/user", require("./routes/user.routes.js"));
app.use("/api/data", require("./routes/data.routes.js"));
app.get("/", (req, res) => {
  res.send("hello world");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
