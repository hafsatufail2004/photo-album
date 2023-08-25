"use client";

import { SearchResult } from "@/app/gallery/page";
import { ReactNode } from "react";

const MAX_COLUMNS = 4;
const MIN_COLUMNS = 1;

export function ImageGrid({
  images,
  getImage,
}: {
  images: SearchResult[];
  getImage: (imageData: SearchResult) => ReactNode;
}) {
  function getColumns(colIndex: number) {
    return images.filter((resource, idx) => idx % MAX_COLUMNS === colIndex);
  }

  function getCol(colIndexs: number) {
    return images.filter((resource, idx) => idx % MIN_COLUMNS === colIndexs);
  }
  return (<>
  <div className="hidden md:block">  
  <div className="grid grid-cols-4 gap-4">
      {[getColumns(0), getColumns(1), getColumns(2), getColumns(3)].map(
        (column, idx) => (
          <div key={idx} className="flex flex-col gap-4">
            {column.map(getImage)}
          </div>
        )
      )}
    </div>
    </div>


    <div className="block md:hidden">  
  <div className="grid grid-col gap-4">
      {[getColumns(0),].map(
        (column, idx) => (
          <div key={idx} className="flex flex-col gap-4">
            {column.map(getImage)}
          </div>
        )
      )}
    </div>
    </div>

    
 </> );
}