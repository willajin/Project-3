// dependencies
const express = require("express");
const path = require("path");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const users = require("./controllers/routes/api/users");
const profile = require("./controllers/routes/api/profile");
const posts = require("./controllers/routes/api/posts");
//./routes/api/posts"

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB Config
const db = require("./controllers/config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport Config
require("./controllers/config/passport")(passport);

// Use Routes
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);
// define middleware
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// serve static files from react app
app.use(express.static(path.join(__dirname, "client/build")));

// define API routes
// test API route
app.get("/api/getList", (req, res) => {
  var list = ["item1", "item2", "item3"];
  res.json(list);
  console.log("Sent list of items");
});

// send all other requests to react app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("App is listening on port " + PORT);
});
