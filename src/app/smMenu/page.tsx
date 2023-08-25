
import Heart from "@/components/icons/heart"
import { Folder } from "lucide-react"
import Link from "next/link"
import { Home } from "lucide-react"

const page = () => {
 
  return (<div className='grid justify-center items-center text-center h-auto w-auto py-28'>

      
  <Link href={"/"}>
    <div className='hover:underline text-lg flex items-center  p-3 font-semibold'>
      <Home className="mr-2"/>
    Home    
        </div>
        </Link>

        <Link href={"/albums"}>
  <div className='hover:underline text-lg flex items-center p-3  font-semibold'>
      <Folder className="mr-2"/>
       Albums
        </div>
        </Link>

        <Link href={"/gallery"}>
        <div className='hover:underline text-lg flex items-center p-3  font-semibold'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mr-2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
</svg>
       Gallery 
        </div></Link>

        <Link href={"/favorites"}>
        <div className='hover:underline text-lg flex items-center p-3 font-semibold'>
    <Heart className="mr-2"/>
   Favorites
     </div></Link>
  

    </div>
  
  )

}

export default page