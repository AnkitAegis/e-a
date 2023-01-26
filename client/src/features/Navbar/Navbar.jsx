import { Link } from "react-router-dom";
import style from "./navbar.module.css";

let paths = [
    {to:"/",path:"Home"},
    {to:"/user",path:"SignUp/SignIn"},

]
export function Navbar(){
    return (<div className={style.nav}>
        {paths?.map((el,idx)=>{
            return <Link key={idx+1} to={el.to}>{el.path}</Link>
        })}
    </div>)
}