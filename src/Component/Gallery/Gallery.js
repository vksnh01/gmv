import React from 'react';
import {Container,Card} from "reactstrap"
import GalleryD from "./GalleryD"

const Gallery =()=>{
const [galleryImages,setGalleryImages]=React.useState(GalleryD);
    return(<>
    {/* <Container> */}
    <Card className="text-primary"><h2>Gallery</h2></Card>
        <Card className="d-flex" style={{flexDirection: 'row',flexWrap:'wrap'}}>
            {
            galleryImages.map((elem)=>{
                return(<>
                <div className="mt-3" key={elem.id} style={{width:"30vw",marginLeft:'2rem'}}>
                    <img src={elem.img} class="img-thumbnail" alt="..."></img>
                </div>
                </>)
            })
            }
        </Card>
    {/* </Container> */}
    </>)
}
export default Gallery;