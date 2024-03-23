import {Backdrop,DivIm,Ima} from './Modal.styled'
const Modal=({hiddenIs,link,clBackdrop,input})=>{
    return(
        hiddenIs===false?(
        <Backdrop onClick={clBackdrop} className="overlay">
            <DivIm className="modal">
                <Ima alt={input} src={link}/>
            </DivIm>
        </Backdrop>
        ):(<></>)
    )
}
export default Modal