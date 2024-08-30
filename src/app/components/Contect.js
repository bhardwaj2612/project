const Contect = () => {

    return <>
        <section>
            <div className="w-[100%] h-[100vh] flex justify-center items-center" >
                <div className="border-slate-100 border-r-2 border-t-2 w-[80%] bg-transparent relative cube flex justify-center  rounded-full  mx-auto">

                    <div className="rounded-full border-r-2 border-t-2 px-7 py-2 bg-slate-700 font-medium absolute text-white  left-[21%] bottom-[63%] origin-bottom -rotate-12" >Fun</div>
                    <div className="rounded-full border-r-2.r border-b-2 px-7 py-2 bg-slate-700 font-medium absolute text-white right-[22%] bottom-[78%] origin-top-left rotate-12 " >InClusive </div>

                    <div className="cube2 w-[80%] my-[90px] text-center ">

                        <h1 className="text-6xl text-white ">20+ Talented Folks</h1>

                        <div className="cube1 w-[50%] mx-auto my-11" >
                            <p className="text-white text-lg">
                                From passion-driven dedicated to impactfull contribution,
                                we do it all here. we are growing and will be excited to here
                                from you!
                            </p>
                        </div>

                        <button className="bor px-8 py-3 rounded-full bg-red-400 mb-5 text-white "><a href="#" >Join our team </a></button>
                    </div>

                </div>
            </div>
        </section>
    </>
}
export default Contect 