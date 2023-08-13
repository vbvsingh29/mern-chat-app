const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
//const cors = require("cors");

mongoose
  .connect(process.env.MONGO_URL, {
    useNewURLParser: true,
    useUnifiedTopology: true,
  })
  .then((data) => {
    console.log(`mongodb connection established ${data.connection.host}`);
  })
  .catch((error) => {
    console.log(`connection error: ${error}`);
  });
app.use(express.json());
//app.use(cors());

require("./routes/user.routes")(app);
app.listen(process.env.PORT, () => {
  console.log(`SERVER listening on port ${process.env.PORT}`);
});
