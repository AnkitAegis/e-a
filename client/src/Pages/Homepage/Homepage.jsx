import style from "./home.module.css";
import { Heading } from "@chakra-ui/react";
import { todoArr } from "../todoArr";
import {TodoList} from "../../features/Todo/TodoList/TodoList"
import {AddTodo} from "../../features/Todo/AddTodo/AddTodo"


export function Homepage() {
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