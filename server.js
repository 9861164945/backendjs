const exprees=require('express');
const app=exprees();// app made by express like it is a sub class of express
const port=3000;
const dotenv=require('dotenv');//If we dotenv then no problem at the time of deploying the project.
dotenv.config();
app.get('/',(req,res)=>{//Req-Request.Res-Respond also called callback parameter
    res.send("Hey backend");

});
app.get('/sonu',(req,res)=>{
res.send("Sambit@gamil.com");
});
app.get('/login',(req,res) =>{
res.send('<h1>login</h1>');
});
app.get('/youtube',(req,res)=>{
res.send('Hey This is for youtube');
});

app.listen(process.env.PORT,()=>{
    console.log(`Server is listening on poort ${port }`)
})