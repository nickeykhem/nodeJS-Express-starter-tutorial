const express = require("express");
const app = express();

//serve all static files using the public folder
//this is a built in middleware
app.use(express.static("public"))
app.use(express.urlencoded( {extended: true }))
//allow your server to post json information to the server
//such as a fetch or call an API
app.use(express.json())

app.set("view engine", "ejs"); //Alternate Pug

//call the middleware function, positioned on top so all requests below automatically use the function
//app.use(logger) 


//route with request and response
//you can add middleware like logger directly so it runs when doing the get request
app.get("/", logger, (req, res) => {
  //console.log('test')
  //res.status(500).json({message: "error"})
  //res.json({ message:"error" })
  //res.download('server.js')
  res.render("index", { text1: "World" });
});

const userRouter = require("./routes/users");
app.use("/users", userRouter);

const postRouter = require("./routes/posts");
app.use("/posts", postRouter);

//setup a middleware function
function logger(req,res,next) {
    console.log(req.originalUrl)
    next()
}
app.listen(3000);
 