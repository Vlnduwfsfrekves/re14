import ImageGalleryItem from "./ImageGalleryItem"
import {Ul} from './ImageGallery.styled'
const ImageGallery = ({items,clickButton})=> {
    return(
        <Ul>{items.map((item)=>(<ImageGalleryItem clickButton={clickButton} image={item}/>))}</Ul>
    )
}
export default ImageGallery