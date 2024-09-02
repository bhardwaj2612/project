import { FaArrowRightLong } from "react-icons/fa6";
const Contect = () => {

    return <>
        <section>
            <div className="  w-[100%] h-[100vh] mt-[15%] max-sm:mt-[20%] flex justify-center items-center" >

                <div className="cube   opacity-60 bg-gradient-to-b from-pink-900 via-pink-950 to-[#121212] -z-1 absolute left-0  w-[23%] max-sm:w-[35%] h-[90vh]" ></div >
                <div className="cube3  opacity-60 bg-gradient-to-r from-pink-900 via-pink-950 to-[#121212] -z-1 absolute right-0 w-[23%] max-sm:w-[35%] h-[90vh]" ></div >

                <div className="border-slate-100 border-r-2 border-t-2 w-[80%] max-sm:w-[95%] outline-[#121212] bg-[#0c0c0c91] relative flex justify-center rounded-full max-sm:rounded-lg ">

                    <div className="rounded-full border-r-2 text-lg border-t-2 px-7 py-2 bg-gradient-to-b from- from-slate-900 via-slate-800 to-slate-700 font-medium absolute text-white left-[15%]  max-sm:left-[8%] bottom-[63%] max-sm:bottom-[65%] origin-bottom -rotate-12" >Fun</div>
                    <div className="rounded-full border-r-2 text-lg border-b-2 px-7 py-2 bg-gradient-to-b from- from-slate-900 via-slate-800 to-slate-700 font-medium absolute text-white right-[16%] max-sm:right-[4%]  bottom-[82%] max-sm:bottom-[87%] origin-top-left rotate-12 " >InClusive </div>

                    <div className="w-[80%] max-sm:w-[90%] my-[80px] text-center ">

                        <h1 className="text-7xl max-sm:text-5xl text-white ">20+ Talented Folks</h1>

                        <div className="w-[50%] max-sm:w-[100%] mx-auto my-11" >
                            <p className="text-white text-xl max-sm:text-lg">
                                From passion-driven dedicated to impactfull contribution,
                                we do it all here. we are growing and will be excited to here
                                from you!
                            </p>
                        </div>

                        <div className="py-3 w-[35%] max-sm:w-[70%] flex items-center justify-center rounded-full bg-gradient-to-r from-red-500 via-red-400 to-pink-500 mb-5 text-xl text-white mx-auto"><a href="#" className="mr-2" >Join our team</a><FaArrowRightLong /> </div>
                    </div>

                </div>
            </div>
        </section>
    </>
}
export default Contect 