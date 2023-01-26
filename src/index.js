import express from "express"
import path from "path"
import { PORT } from "./env.js"
import { user } from "./routes/user.router.js"
const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())
//console.log(__dirname);
//console.log(process.cwd()+"\\public");
app.use(express.static(path.join(process.cwd()+"\\public")));
//app.use(express.static(path.join(__dirname + ".././public")))
app.use("/user",user)

app.get("/", (req, res) => res.send("Welcome to dummy todoApp"))

app.listen(PORT, () => {console.log(`server started on port ${PORT}`)}) 