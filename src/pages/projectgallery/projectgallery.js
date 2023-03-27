import React from "react"
import Gallery from "../../components/gallery/gallery"
import "./projectgallery.css"
import Title from "../../components/title/title"
import { Helmet } from "react-helmet-async"
import Spacersmall from "../../components/spacer/spacersmall"
import Spacer from "../../components/spacer/spacer"


export default function ProjectGallery() {
    return (
        <div className="projectgallerycontainer">
            <Helmet>
                <title>Project Gallery</title>
                <meta charset="utf-8" name="Project Gallery" content="Learn about Special Additions Construction products." />
                <link rel="canonical" href="/projectgallery" />
            </Helmet>

            <Title title="PROJECT GALLERY" />
            <Spacersmall />
            <Gallery />
            <Spacer />
        </div>
    )
}
