import Image from "next/image"
function Hero() {
    return (
        <div className="flex w-full h-[100vh]  ">
            <div className="w-[50vw]">
                <div className="text-black  text-xl mx-[85px] mt-[150px]  flex flex-col gap-9"><p className="text-6xl font-bold font-sans leading-[60Px]">TECH WISE COURSES </p> <p className=" mr-[20%] ">The affiiate partner of LWE is the Pakistan's largest program offering scholarships in various courses.</p></div>
            <button className="w-[200px] h-[50px] text-xl text-center text-white bg-red-500 m-[85px] rounded-md hover:bg-blue-500 duration-500 hover:text-white hover:rounded-2xl hover:text-xl">Enroll Now </button>
            </div>
            <div className="w-[50vw]">
                <Image src="/IMG-20241005-WA0091.jpg" alt="Main-img" height={600} width={500} className="m-[70px]"></Image>
            </div>
        </div>
    )
}
export default Hero;