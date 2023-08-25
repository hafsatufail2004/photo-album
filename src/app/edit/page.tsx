"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { CldImage } from "next-cloudinary";
import { useState } from "react";

export default function EditPage({
    searchParams:{publicID},
}:{
    searchParams:{
        publicID:string;
    }
}){

    const [transformation,setTransformation] = useState<
    | undefined
    | "generative-fill"
    | "blur"
    | "grayscale"
    | "pixelate"
    | "bg-remove"
    | "tint" 
    >();

    const [pendingPrompt,setPendingPrompt] = useState("");
    const [prompt,setPrompt] = useState("");

    return(
        <section>
                 <div className='flex flex-col gap-8 ml-10'>
<div className='flex justify-between'>
<h1 className='text-2xl lg:text-4xl font-bold'>
Edit {publicID}
</h1>
</div>

<div className="flex flex-wrap gap-4">
    <Button variant="ghost" onClick={()=> setTransformation(undefined)} className="border border-gray-700">Clear All</Button>

    <div className="flex flex-col gap-4 ">
        <Button 
        onClick={() => {
                setTransformation("generative-fill");
                setPrompt(pendingPrompt);
              }}
            >
              Apply Generative Fill
            </Button>
    </div>
    <Button onClick={() => setTransformation("blur")}>Apply Blur</Button>
          <Button onClick={() => setTransformation("grayscale")}>
            Convert to Gray
          </Button>
          <Button onClick={() => setTransformation("pixelate")}>
            Pixelate
          </Button>
          <Button onClick={() => setTransformation("tint")}>
         Tint
          </Button>

          <Button onClick={() => setTransformation("bg-remove")}>
            Remove Background
          </Button>

          <div className="flex items-center justify-center gap-3"><Label className="text-2xl">Prompt</Label>
            <Input
              value={pendingPrompt}
              onChange={(e) => setPendingPrompt(e.currentTarget.value)}/></div>
</div>

<div className="grid grid-col-1 md:grid-cols-2 gap-8">
          <CldImage src={publicID} width="500" height="400" alt="some image" />

          {transformation === "generative-fill" && (
            <CldImage
              src={publicID}
              width="500"
              height="400"
              alt="some image"
              crop="pad"
              fillBackground={{
                prompt,
              }}
            />
          )}

          {transformation === "blur" && (
            <CldImage
              src={publicID}
              width="1200"
              height="1400"
              blur="800"
              alt="some image"
            />
          )}

          {transformation === "grayscale" && (
            <CldImage
              src={publicID}
              width="1200"
              height="1400"
              grayscale
              alt="some image"
            />
          )}

          {transformation === "pixelate" && (
            <CldImage
              src={publicID}
              width="1200"
              height="1400"
              pixelate
              alt="some image"
            />
          )}

{transformation === "tint" && (
            <CldImage
              src={publicID}
              width="1200"
              height="1400"
              tint="70:blue:green:purple"
              alt="some image"
            />
          )}

{transformation === "bg-remove" && (
            <CldImage
              src={publicID}
              width="1200"
              height="1400"
        removeBackground
              alt="some image"
            />
          )}
        </div>

</div>
        </section>
    )
}