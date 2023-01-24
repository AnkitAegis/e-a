export const EXISTS_ERROR="User already Exists."

export const LOGIN_FAIL="Username/Password is correct"

const errorFormat=(res,status,message)=>{
    res.status(status).send({message})
}

//* 
// catch(err){
//     logging(err)
//     res.staus(500).message("Something went wrong on  our end, Please try again")
// }