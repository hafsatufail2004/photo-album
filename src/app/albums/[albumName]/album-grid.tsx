"use client";

import { ImageGrid } from "@/components/image-grid";
import CloudinaryImages from "@/app/gallery/cloudinary-images";
import { SearchResult } from "@/app/gallery/page";

export default function AlbumGrid({images}:{images:SearchResult[]}){
return(
 
    <ImageGrid
    images={images}
    getImage={(imageData:SearchResult)=>{
        return(
            <CloudinaryImages
            key={imageData.public_id}
           imageData = {imageData}
           width="400"
           height="300" 
           alt="an image of something"
            />        
        );
    }}
    />
);
}