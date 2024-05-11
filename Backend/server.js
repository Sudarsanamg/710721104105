const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const port = 8000;
app.use(cors());
app.use(express.json());


app.use("/", require("./routes/categories"));

app.listen(port, (err) => {
  if (err) console.log(err.message);
  console.log(`Server is running on port ${port}`);
});