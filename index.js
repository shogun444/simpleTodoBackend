const express = require("express")

const app = express();
let todos = []

app.use(express.json())
const port = 3000;

app.get('/todos',(req,res)=> { 

  res.status(200).json({msg : todos} )
})

app.post('/todos',(req,res)=> { 
  const {id,todo} = req.body

  todos.push({id,todo})
  res.status(201).json({msg : "Post request Successfull"})
})


app.delete('/todos',(req,res)=> {
  const {id} = req.body
 todos = todos.filter((itm)=>(itm.id!=id))
 res.status(201).json({todo : todos})
})

app.listen(port,console.log("listening to port",port))