import express from "express"
import userRoute from './routes/user.js'
const app = express() 

app.set('view engine','ejs')  

app.get('/' , (req,res) =>{
    // console.log("Hello Backend")
    // res.status(500).send("Hello Backend") // status has highest priority
    // res.status(200).send({error : "error message"})
    // res.json({express : "learning express"})
    // res.send("hello world")
    res.render("index",{text : "World"})
})  


app.use('/user',userRoute)
 
app.listen(3000);