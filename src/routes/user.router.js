import { Router } from "express"
import { userCreate, userUpdate, userGet } from "../controller/user.controller.js"

export const user = Router()

user.get("/:id",userGet)

user.post("/",userCreate)

user.patch("/id",userUpdate)
