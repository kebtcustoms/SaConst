import React from "react"
import Gallery from "../../components/gallery/gallery"
import "./productgallery.css"
import Title from "../../components/title/title"


export default function ProductGallery(){
    return(
        <div className="productgallerycontainer">
            <Title title="PRODUCT GALLERY"/>
           <Gallery />
        </div>
    )
}
