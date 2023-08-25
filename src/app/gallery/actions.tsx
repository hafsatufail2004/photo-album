"use server"
import cloudinary from "cloudinary";

export async function setAsFavoriteAction(publicID:string,isFavorite:boolean){
    if(isFavorite){
        await cloudinary.v2.uploader.add_tag('favorite',[publicID]);

    }else{
 await cloudinary.v2.uploader.remove_tag('favorite',[publicID]);
    }
    
}