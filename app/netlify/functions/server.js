import express from "express"


var app= express()
app.use(cors());

var port= process.env.PORT || 3000;
const router = express.router;

router.get("/", function(req, res){
  JSON.stringify({ message: 'Hola desde mi app Function' });
});
