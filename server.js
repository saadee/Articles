const express = require("express");
const connectDB = require("./config/db");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");

connectDB();
// dropbox setup

require('isomorphic-fetch'); // or another library of choice.
var Dropbox = require('dropbox').Dropbox  ;
var dbx = new Dropbox({ accessToken: 'OKcQlPoAlQAAAAAAAAACAiGi1KcRr9fVdI5LtdoXMmfLKpgzlXPQQcr4_4-roV-Y' });
// checking the user

// dbx.usersGetCurrentAccount()
//   .then(function(response) {
//     console.log(response);
//   })
//   .catch(function(error) {
//     console.error(error);
//   });

// requesting API

dbx.filesListFolder({path: ''})
  .then(function(response) {
    console.log(response.entries);
  })
  .catch(function(error) {
    console.log(error);
  });


// Connceting Database


app.use(express.json({ extended: false, limit: "10mb" }));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// app.use(function (req, res) {
//     res.setHeader('Content-Type', 'text/plain')
//     res.write('you posted:\n')
//     res.end(JSON.stringify(req.body, null, 2))
// })

//Defining all routes

app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));

// serve static assests in production
// if (process.env.NODE_ENV === "production") {
// set static folder
app.use(express.static("./client/build"));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});
// }
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server is running on ${PORT}`));
