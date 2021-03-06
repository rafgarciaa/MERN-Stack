const express = require('express');
const mongoose = require('mongoose');
const users = require("./routes/api/users");
const events = require("./routes/api/events");
const bodyParser = require('body-parser');

const app = express();
const db = require('./config/keys').mongoURI;

mongoose
    .connect(db)
    .then( () => console.log("Connected to MongoDB successfully"))
    .catch( err => console.log(err));

app.get("/", (req, res) => res.send("WADDUP!!"));
app.use("/api/users/", users);
app.use("/api/events", events);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));