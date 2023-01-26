import { IoIosOptions } from "react-icons/io";
import {Actions} from "../Actions"
import style from "./todoitem.module.css";

export function TodoItem({ idx, id, todo, status }) {
    return (<tr key={id}>
        <td>{idx}.</td>
        <td>{todo}</td>
        {status ? <td className={style.done}>Done</td> : <td className={style.pending}>Pending</td>}
        <td className={style.options}>
            <IoIosOptions className={style.allActs}/>
            <Actions cssname={style.TodoOpt} id={id} todo={todo} status={status}/>
        </td>
    </tr>)
}