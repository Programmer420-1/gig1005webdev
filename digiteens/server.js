const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;


if(process.env.NODE_DEV === "production"){
    app.get("*",(req,res)=>{
        req.sendFile(path.resolve(__dirname,"public","index.html"))
    })

}
app.listen(port, (err) => { if (err) return console.log(err) });