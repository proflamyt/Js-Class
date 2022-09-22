import express, {Express ,Request, Response } from "express";


const PORT:number = 8000

var app: Express = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

var visited:number = 1;

app.use("/category/:name/:id", function(req:Request, res:Response, next){
    console.log(`you visited this page ${visited} times`)
    visited++

next()
});

app.get("/category/:name/:id", function(req:Request, res:Response){
      res.status(200)
      .json({"name": `${req.params.name}`,
                "id" : `${req.params.id}`});
});

app.get("*", function(req:Request, res:Response){
    res.status(404)
        .json({"response": "404 Not Found"});
});

async function startApp() {
    try {
        app.listen(PORT);
        console.log(`Server is running on ${PORT}`);
    } catch (error: any) { 
        console.log(error);
    }
}

startApp();

