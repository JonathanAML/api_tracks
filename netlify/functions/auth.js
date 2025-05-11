// netlify/functions/server.js
const express = require("express");
const serverless = require("serverless-http");
const cors = require("cors");
const {  getItems, getItem, createItem, deleteItem, updateItem } = require("../../app/controlles/tracks");

const app = express();
app.use(cors());

const router = express.Router()

const { loginCtrl } = require('../../app/controlles/auth')

//TODO: Login !
router.post('/login', loginCtrl)

router.get("/",getItems)

app.use("/.netlify/functions/auth", router);
module.exports.handler = serverless(app);