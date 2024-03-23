import styled from "styled-components";
export const Backdrop=styled.div`
    width: 100%;
    height: 100%;
    opacity: 1;
    z-index: 2;
    background: rgba(0, 0, 0, 0.2);
    padding: 15px;
    transition: opacity 0.25s cubic-bezier(0.4, 0, 0.2, 1) 0s;
    position: fixed;
    top: 0px;
    left: 0px;
`
export const DivIm=styled.div`
    transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1) 0s;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
`
export const Ima=styled.img`
    width:700px;
    height:500px;
`