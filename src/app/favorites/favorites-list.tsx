'use client'
import CloudinaryImages from "../gallery/cloudinary-images";
import { useEffect, useState } from "react";
import { ImageGrid } from "@/components/image-grid";

export type SearchResult = {
public_id:string;
tags:string[];
};

export default function FavoritesList({
    initialResourses,
}:{
    initialResourses:SearchResult[]
}){
const [resourses,setResourses] = useState(initialResourses);
useEffect(()=>{
setResourses(initialResourses);
},[initialResourses]);

return(
<ImageGrid
images={ resourses }
getImage={(imageData:SearchResult)=>{
    return(
        <CloudinaryImages
        key={imageData.public_id}
       imageData = {imageData}
       width="400"
       height="300" 
       alt="an image of something"
       onUnheart={(unheartedResourse)=>{
       setResourses((currentResourses=> 
           currentResourses.filter(resourse=>
               resourse.public_id !== unheartedResourse.public_id)
           ));
       }}
        />
    );
}}
/>
);
}

   
