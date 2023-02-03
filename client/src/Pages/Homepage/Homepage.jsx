import style from "./home.module.css";
import { Heading } from "@chakra-ui/react";
import { todoArr } from "../todoArr";
import {TodoList} from "../../features/Todo/TodoList/TodoList"
import {AddTodo} from "../../features/Todo/AddTodo/AddTodo"
import { useEffect } from "react";

let url = "https://jsonplaceholder.typicode.com/todos"
let us = "/all"
export function Homepage() {
    useEffect(()=>{
        console.log("useEffect")

        fetch(us)
        .then(res=>res.json())
        .then(res=>console.log(res))
        .catch(e=>console.log(e));
    },[]);
    return (<div className={style.home}>
        <Heading>Welcome to Todo App</Heading>
        <AddTodo/>
        {todoArr?.length!=0 ?
            <TodoList todoArr={todoArr}/>
        :
            <div>No Todo's</div>
        }
              
    </div>)
}