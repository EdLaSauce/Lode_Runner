const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, 'Lode_Runner')));

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"/Lode_Runner/LodeRunner.htm"));
})

app.listen(3001, ()=>{console.log('listening on port 3001...')})