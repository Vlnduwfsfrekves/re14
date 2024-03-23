import {ButtonL,DivL} from "./Button.styled";
const Button=({status,loadmore})=>{
    return (
        status==='alreadyLoad'?<DivL><ButtonL onClick={()=>loadmore()}>Load more</ButtonL></DivL>:<></>
    )
}
export default Button;
