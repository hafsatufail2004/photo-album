"use client";

import { ImageGrid } from "@/components/image-grid";
import { SearchResult } from "./page";
import CloudinaryImages from "./cloudinary-images";

export default function GalleryGrid({images}:{images:SearchResult[]}){
return (
    <ImageGrid
    images={images}
    getImage={(imageData:SearchResult)=>{

  return <CloudinaryImages

      key={imageData.public_id}
      imageData={imageData}
      width='400'
      height='300'
      alt="image of something"/>
    }}
    />
)
}