// netlify/functions/server.js
const express = require("express");
const serverless = require("serverless-http");
const cors = require("cors");
const {  getItems, getItem, createItem, deleteItem, updateItem } = require("../../app/controlles/tracks");
//const checkOrigin = require('../middleware/origin')
const checkOrigin = require('../../app/middleware/origin')
const { validateCreate } = require('../../app/validators/users')

const app = express();
app.use(cors());

const router = express.Router();

router.get("/", getItems);

router.get('/:id', checkOrigin, getItem)

router.post('/', checkOrigin, validateCreate, createItem)

app.use("/.netlify/functions/tracks", router);
module.exports.handler = serverless(app);
