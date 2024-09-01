import Image from "next/image"

const AboutUs = () => {
    return <>
        <section>
            <div className="w-[100%] h-[100vh] mb-11 max-sm:mt-[20%]">

                <div className="sub-1  ml-[10%] mt-[8%] max-sm:ml-[5%]  ">
                    <div className="flex gap-9 max-sm:gap-2" >
                        <div className="mi flex items-end  w-[300px] max-sm:w-[150px]  ">
                            <p className=" wrap-text text-white text-4xl max-sm:text-base ">Late Night Maggie Party for the Boost</p>
                        </div>
                        <Image src={"/images/image-3.png"} width={250} height={150} className="img-wrap max-sm:w-[100px] object-cover rounded-lg" />
                    </div>
                </div>

                <div className="sub-1  ml-[25%] mt-[8%] max-sm:ml-[20%] ">
                    <div className="flex gap-9 max-sm:gap-2" >
                        <div className="mi flex items-end  w-[300px] max-sm:w-[150px]  ">
                            <p className=" wrap-text text-white text-4xl max-sm:text-base ">Late Night Maggie Party for the Boost</p>
                        </div>
                        <Image src={"/images/image-3.png"} width={250} height={150} className="img-wrap max-sm:w-[100px] object-cover rounded-lg" />
                    </div>
                </div>

                <div className="sub-1  ml-[10%] mt-[8%] max-sm:ml-[5%] ">
                    <div className="flex gap-9 max-sm:gap-2" >
                        <div className="mi flex items-end  w-[300px] max-sm:w-[150px]  ">
                            <p className=" wrap-text text-white text-4xl max-sm:text-base ">Late Night Maggie Party for the Boost</p>
                        </div>
                        <Image src={"/images/image-3.png"} width={250} height={150} className="img-wrap max-sm:w-[100px] object-cover rounded-lg" />
                    </div>
                </div>
                <div className="sub-1  ml-[25%] mt-[8%] max-sm:ml-[20%] ">
                    <div className="flex gap-9 max-sm:gap-2" >
                        <div className="mi flex items-end  w-[300px] max-sm:w-[150px]  ">
                            <p className=" wrap-text text-white text-4xl max-sm:text-base ">Late Night Maggie Party for the Boost</p>
                        </div>
                        <Image src={"/images/image-3.png"} width={250} height={150} className="img-wrap max-sm:w-[100px] object-cover rounded-lg" />
                    </div>
                </div>

            </div>
        </section>
    </>
}
export default AboutUs