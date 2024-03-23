import {Li,Img} from './ImageGalleryItem.styled'
const ImageGalleryItem=({image,clickButton})=>{
    return(
        <Li class="gallery-item">
            <Img src={image.webformatURL} alt="" onClick={clickButton}/>
        </Li>
    )
}
export default ImageGalleryItem