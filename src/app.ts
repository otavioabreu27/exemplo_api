import express from "express";
import router from "./routes"

const app = express();
app.set("view engine", "ejs");

app.use(router);

app.listen(3000, () =>{
    console.log('Ouvindo a porta 3000')
})