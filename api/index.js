const express = require("express");
const cors = require("cors")
const app = express();
const port = 2000;

app.use(cors())
app.use(express.json());


app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/convo",(req,res)=>{
    const data = req.body
    const stringData = JSON.stringify(data)
    res.send(stringData)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
})