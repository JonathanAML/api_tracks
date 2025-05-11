// netlify/functions/hello.js
const { getItems, getItem, createItem, deleteItem, updateItem } = require('../controlles/tracks')

exports.handler = async (event, context) => {
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Hola desde app Function' }),
    };
  }