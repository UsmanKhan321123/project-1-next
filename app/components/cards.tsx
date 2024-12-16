import Image from "next/image"
function Cards() {

    return (
        <div>
            <h1 className="text-5xl font-bold text-center">Courses</h1>
            <div className="grid lg:grid-cols-2 w-[100vw] h-auto gap-5 lg:px-[250px]">
                <div className="m-[50px] hover:shadow-2xl duration-500 hover:shadow-red-400">
                    <img src="/IMG-20241005-WA0093.jpg" alt="graphics-designing" width={400} height={350}></img>
                    <button className="w-[130px] h-[40px] bg-red-400 mt-[30px] mx-[100px] my-[30px] text-2xl rounded-md hover:bg-blue-400 hover:text-white">Enroll</button>
                </div>
                <div className="m-[50px] hover:shadow-2xl duration-500 hover:shadow-red-400">
                    <img src="/IMG-20241005-WA0094.jpg" alt="graphics-designing" width={400} height={350}></img>
                    <button className="w-[130px] h-[40px] bg-red-400  my-[30px] mx-[100px] text-2xl rounded-md hover:bg-blue-400 hover:text-white duration-500">Enroll</button>
                </div> <div className="m-[50px] hover:shadow-2xl duration-500 hover:shadow-red-400">
                    <img src="/IMG-20241005-WA0095.jpg" alt="graphics-designing" width={400} height={350}></img>
                    <button className="w-[130px] h-[40px] bg-red-400 my-[30px] mx-[100px] text-2xl rounded-md hover:bg-blue-400 hover:text-white duration-500">Enroll</button>
                </div> <div className="m-[50px] hover:shadow-2xl duration-500 hover:shadow-red-400">
                    <img src="/IMG-20241005-WA0096.jpg" alt="graphics-designing" width={400} height={350}></img>
                    <button className="w-[130px] h-[40px] bg-red-400 my-[30px] mx-[100px] text-2xl rounded-md hover:bg-blue-400 hover:text-white duration-500">Enroll</button>
                </div> <div className="m-[50px] hover:shadow-2xl duration-500 hover:shadow-red-400">
                    <img src="/IMG-20241005-WA0097.jpg" alt="graphics-designing" width={400} height={350}></img>
                    <button className="w-[130px] h-[40px] bg-red-400 my-[30px] mx-[100px] text-2xl rounded-md hover:bg-blue-400 hover:text-white duration-500">Enroll</button>
                </div> <div className="m-[50px] hover:shadow-2xl duration-500 hover:shadow-red-400">
                    <img src="/IMG-20241005-WA0098.jpg" alt="graphics-designing" width={400} height={350}></img>
                    <button className="w-[130px] h-[40px] bg-red-400 my-[30px] mx-[100px] text-2xl rounded-md hover:bg-blue-400 hover:text-white duration-500">Enroll</button>
                </div> <div className="m-[50px] hover:shadow-2xl duration-500 hover:shadow-red-400">
                    <img src="/IMG-20241005-WA0099.jpg" alt="graphics-designing" width={400} height={350}></img>
                    <button className="w-[130px] h-[40px] bg-red-400 my-[30px] mx-[100px] text-2xl rounded-md hover:bg-blue-400 hover:text-white duration-500">Enroll</button>
                </div>
                <div className="m-[50px] hover:shadow-2xl duration-500 hover:shadow-red-400">
                    <img src="/IMG-20241005-WA0101.jpg" alt="graphics-designing" width={400} height={350}></img>
                    <button className="w-[130px] h-[40px] bg-red-400 my-[30px] mx-[100px] text-2xl rounded-md hover:bg-blue-400 hover:text-white duration-500">Enroll</button>
                </div> <div className="m-[50px] hover:shadow-2xl duration-500 hover:shadow-red-400">
                    <img src="/IMG-20241005-WA0103.jpg" alt="graphics-designing" width={400} height={350}></img>
                    <button className="w-[130px] h-[40px] bg-red-400 my-[30px] mx-[100px] text-2xl rounded-md hover:bg-blue-400 hover:text-white duration-500">Enroll</button>
                </div>
                <div className="m-[50px] hover:shadow-2xl duration-500 hover:shadow-red-400">
                    <img src="/IMG-20241005-WA0100C.jpg" alt="graphics-designing" width={400} height={350}></img>
                    <button className="w-[130px] h-[40px] bg-red-400 my-[30px] mx-[100px] text-2xl rounded-md hover:bg-blue-400 hover:text-white duration-500">Enroll</button>
                </div>
            </div>


        </div>
    )
}
export default Cards