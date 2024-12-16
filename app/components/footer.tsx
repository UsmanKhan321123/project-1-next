import Image from "next/image"
import Link from "next/link"
function Footer(){

    return(
        <div className="w-[100%] h-[40vh] mt-[30px] bg-red-400">
                    <h1 className="text-5xl font-bold text-center py-[20px]">Join Us</h1>
                    <div className="grid grid-cols-3 w-[50vw] gap-8 my-[45px] mx-[400px]">
                            
                            <Link href="https://www.facebook.com/TechWiseCourses" target="_blank" className="rounded-full bg-[url('/fblogo.png')] w-[60px] h-[60px] bg-cover"></Link>
                             <Link href="https://www.instagram.com/techwisecourses/" target="_blank" className="rounded-full bg-[url('/instagram.png')] w-[60px] h-[60px] bg-cover"></Link>
                             <Image src="/whatsAppp.webp" alt="whatsApp-logo" width="60" height="60"  className="rounded-full w-[60px] h-[60px] bg-cover"></Image > 
                             
                    </div>
            
        </div>
    )
}
export default Footer