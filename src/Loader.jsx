import {Grid} from 'react-loader-spinner'
const Loader=({status})=>{
    return(
        status==='load'?(<Grid visible={true} height="80" width="80" color="red" ariaLabel="grid-loading" radius="12.5" wrapperStyle={{display:'flex',justifyContent:'center'}} wrapperClass="grid-wrapper"/>):(<></>)
    )
}
export default Loader