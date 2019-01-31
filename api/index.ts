const express = require('express');
import { json, urlencoded } from "body-parser";
import { Request, Response, Router } from "express";
import { publicRouter } from "./routes/public";

var cors = require('cors');
const app = express();
const path = require('path');
const port =  process.env.PORT || 8081;

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use("/api/public", publicRouter);



app.get('/api', function (req, res) {
    res.send('Hello World, How are you!');
});


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});
