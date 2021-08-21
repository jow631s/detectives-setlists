//index.js

const functions = require("firebase-functions");
const app = require("express")();

const { getAllTodos } = require("./APIs/todos");
const { getAllSongs } = require("./APIs/songs");

app.get("/todos", getAllTodos);
app.get("/songs", getAllSongs);
exports.api = functions.https.onRequest(app);
