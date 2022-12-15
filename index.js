const express = require('express');
const app = express();
const port=process.env.PORT || 5000;
const cors= require("cors")

//midelwere
app.use(express.json());
app.use(cors())

app.get('/', (req, res) => {
res.send("hello user")
})

app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})


const Category= require ("./data/Category.json")
const news= require("./data/news.json")

///all category
app.get("/category",(req,res)=>{
    res.send(Category)
})



//newsload id

app.get("/news/:id",(req,res)=>{
    const id=req.params.id
    const selectednews=news.find(n=>n._id=== id)
    res.send(selectednews)
})


///lod news category wise


app.get("/categorys/:id",(req,res)=>{
    const id=req.params.id
    const category=news.filter(n=>n.category_id===id)
    res.send(category)
})


///all news

app.get("/news",(req,res)=>{
    res.send(news)
})


