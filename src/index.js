import express from "express"
import path from "path"
import { PORT } from "./env.js"
import { user } from "./routes/user.router.js"
const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())
//console.log(__dirname);
//console.log(process.cwd()+"\\public");
//console.log(path.join(process.cwd()+"/public"))
//! Make changes in react app then build it then pnpm addClient in backend

app.use(express.static(path.join(process.cwd()+"/public")));
//app.use(express.static(path.join(__dirname + ".././public")))
app.use("/userdata",user)

//app.get("/", (req, res) => res.send("Welcome to dummy todoApp"))
app.get("/all",async(req,res)=>{
    let one = new Todo(1,"Do Workout Daily")
    let two = new Todo(2,"Eat fruits")
    let three = new Todo(3,"Learn front Lever")
    let four = new Todo(4,"Buy Groceries")
    let five = new Todo(5,"Learn Handstand")
    let arr = [one,two,three,four,five];
    res.status(200).json(arr);
})
class Todo{
    constructor(id,todo,status=false){
        this.id = id
        this.todo = todo
        this.status = status
    }
}

app.listen(PORT, () => {console.log(`server started on port ${PORT}`)}) 