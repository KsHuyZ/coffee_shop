const express = require("express")
const mongoose = require("mongoose")
const routerConfig = require("./src/config/routerConfig")
require("dotenv").config()
const cors = require("cors")
const morgan = require("morgan")
const configViewEngine = require("./src/config/viewEngineConfig")
const app = express();
app.use(cors());
app.options("*", cors());

app.use(morgan("tiny"));
const port = process.env.PORT || 5000;
app.use(express.json())
// router
routerConfig(app);
// config view engine
configViewEngine(app);
app.get("/",(req,res,next)=>{
  res.status(200).json({message: "Dumaaaa"})
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
const URI = process.env.URI;
mongoose.connect(
  URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("Connected to mongodb");
  }
);
