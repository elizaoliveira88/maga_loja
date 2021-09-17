const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const mysql = require('mysql')

const db = mysql.createPool({
  host:"",
  user:"",
  password:"",
  database:""
})

app.use(cors())
app.use(express.json())
app.post(express.urlencoded({extended:true}))

app.post("/api/insert",(req, res)=>{

  const formStore = req.body.formStore
  const formProduct = req.body.formProduct

  const sqlInsert = "INSERT INTO NEW_STORE(nameStore, productStore) VALUES (?,?)"
  db.query(sqlInsert, [formStore, formProduct], (err, result)=>{
    console.log(result)
  })
})

app.listen(3001,()=>{
  console.log('running on port 3001')
})