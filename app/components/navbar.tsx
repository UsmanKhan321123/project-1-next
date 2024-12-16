import Link from "next/link"

function Navbar() {

    return (
        
            <div className="flex justify-between w-full px-[50px] h-[60px] bg-red-400 shadow-md hover:shadow-red-400 shadow-blue-700 py-[15px] fixed hover:bg-blue-500 duration-500 hover:text-white group:" >
                <img src="./logo.jpg" className="w-[130px] h-[40px] bg-no-repeat bg-contain rounded-sm pb-1 "></img >
                <div className="flex justify-between gap-8 text-lg  ">
                    <Link href="/" className="hover:border-b-2  w-[60px] h-[30px] text-center ">Home</Link>
                    <Link href="" className="hover:border-b-2  w-[60px] h-[30px] text-center">About</Link>
                    <Link href="" className="hover:border-b-2  w-[60px] h-[30px] text-center">Contact</Link>
                </div>
            </div>
        
    )

}
export default Navbar