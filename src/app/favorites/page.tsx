
import UploadButton from "../gallery/upload-button";
import cloudinary from "cloudinary";
import CloudinaryImages from "../gallery/cloudinary-images";
import { ForceRefresh } from "@/components/force-refresh";

export type SearchResult = {
public_id:string;
tages:string[];
};

export default async function GalleryPage(){
    const results = await cloudinary.v2.search
    .expression('resource_type:image AND tags=favorite')
    .sort_by('created_at','desc')
    .with_field("tags")
    .max_results(30)
    .execute() as { resources:SearchResult[] };
    console.log(results);
  
    return <section>

        <ForceRefresh/>
    <div className="flex flex-col gap-8">
        <div className=" flex justify-between">
        <h1 className="text-4xl font-bold">Favorites Images</h1>
    
        </div>

<div className="grid grid-cols-4 gap-4">

     {
        results.resources.map(result => (   
 <CloudinaryImages
 path="/favorites"
 key={result.public_id}
imageData = {result}
alt="an image of something"
width="400"
height="300"
 />
 )) 
      }

 </div>
    </div>
    </section>
}