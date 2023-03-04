const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const empRouter = require("./routes/employee");
const userRouter = require("./routes/auth");
const cors = require("cors");

app.get("/home", function (req, res) {
  // console.log(req.body.id);
  res.send("Hello World");
});
// mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Database connection is successful!"))
  .catch((err) => {
    console.log(err);
  });
app.use(express.json());
app.use(cors({ origin: "*" }));
app.use("/api/employee", empRouter);
app.use("/api/user", userRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server is running on port  ${PORT}`));
