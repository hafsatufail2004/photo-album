'use client';

import { CldImage, CldUploadButton } from 'next-cloudinary';
import { useState } from 'react';

export type UploadResult = {
  info:{
public_id:string;
  },
  event:'success'
}

export default function Home() {
const [imageID,setImageID] = useState("");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
 
 <CldUploadButton
 onUpload = {(result:UploadResult)=>{
setImageID(result.info.public_id);
 }}
 uploadPreset="dxmscjbj" />

{imageID && (
 <CldImage
  width="500"
  height="300"
  src= {imageID}
  sizes="100vw"
  alt="Description of my image"
/>
  )}
    </main>
  )
}
