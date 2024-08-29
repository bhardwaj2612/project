// import Image from "next/image"

// const Artist = () => {
//     return <>
//         <section>
//             <div className="">
//                 <div className="relative flex flex-col gap-10 justify-center items-center">
//                     <div style={{ willChange: "transform", transform: "translateY(0px)" }}  >
//                         <div className="w-full h-[7500px] my-34 relative" style={{ scrollBehavior: "smooth" }}>

//                             <div className="w-full resize-none h-fit md:h-[100vh] sticky top-20 md:top-0 left-0 lg:flex items-center justify-center gap-20">
//                                 <div className="text-white z-20 capitalize ">
//                                     <p className="rotate-fade-out absolute text-[90px]  font-normal z-40 fade-in ">Anchor</p>
//                                     <p className="rotate-fade-out absolute text-[90px] font-normal z-40 fade-out">comedian</p>
//                                     <p className="rotate-fade-out absolute text-[90px] font-normal z-40 ">live band</p>
//                                     <p className="rotate-fade-out absolute text-[90px] font-normal z-40 ">singer</p>
//                                 </div>

//                                 <div style={{ background: "linear-gradient(132.67deg, rgba(241, 102, 51, 0.8) -5.44%, rgba(253, 45, 125, 0.8) 101.81%)" }}
//                                     className="w-300 h-300 sm:w-[500px] sm:h-[500px] md:w-[700px] md:h-[700px] lg:w-[600px] lg:h-[600px]
//                                      rounded-full p-3 overflow-hidden relative road">

//                                     <div className="rounded-full w-full h-full overflow-hidden">

//                                         <Image src="/images/comedian-one.jpg" width={200} height={200} alt="comedian" className="w-full h-full object-cover
//                                          duration-500 transition-opacity ease-linear opacity-100" />
//                                         <Image src="/images/hero-image.png" width={200} height={200} alt="comedian" className="w-full h-full object-cover
//                                          duration-500 transition-opacity ease-linear opacity-100" />


//                                         <div className="hsuuev">
//                                             <div className="containerwe" style={{ transform: "translate(-50%, -50%) rotate(-1219.29deg)" }}>
//                                                 <div className="circle "></div>
//                                                 <div className="circle"></div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>

//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </section>
//     </>
// }
// export default Artist
"use client"
import { useState, useEffect } from "react";
import Image from "next/image";

const Artist = () => {
    const [currentImage, setCurrentImage] = useState("/images/comedian.jfif");
    const [artist, setArtist] = useState("Comedian");

    const handleScroll = () => {
        const scrollY = window.scrollY;

        if (scrollY < 500) {
            setCurrentImage("/images/dancer.jfif");
            setArtist("c")
        } else if (scrollY >= 500 && scrollY < 1000) {
            setCurrentImage("/images/comedian-one.jpg");
            setArtist("Comedian")
        } else if (scrollY >= 1000 && scrollY < 1500) {
            setCurrentImage("/images/singer.jfif")
            setArtist("Singer")
        }
        // Add more conditions if you have more images and scroll ranges.
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section>
            <div className="">
                <div className="relative flex flex-col gap-10 justify-center items-center">
                    <div style={{ willChange: "transform", transform: "translateY(0px)" }}  >
                        <div className="w-full h-[7500px] my-34 relative" style={{ scrollBehavior: "smooth" }} >
                            <div className="w-full resize-none h-fit md:h-[100vh] sticky top-20 md:top-0 left-0 lg:flex items-center justify-center gap-20">
                                <div className="text-white z-20 capitalize ">
                                    <p className="rotate-fade-out absolute xs:-left-48 sm:-left-10 md:left-2 lg:left-2 xl:-left-2 xxl:-left-48
               top-44 lg:top-96 text-[40px] sm:text-[60px] md:text-[80px] lg:text-[90px] xl:text-[100px] xxl:text-[104px] font-normal z-40 fade-in ">Comedian</p>
                                    <p className="rotate-fade-out absolute xs:-left-48 sm:-left-10 md:left-2 lg:left-2 xl:-left-2 xxl:-left-48
               top-44 lg:top-96 text-[40px] sm:text-[60px] md:text-[80px] lg:text-[90px] xl:text-[100px] xxl:text-[104px] font-normal z-40 fade-out">Dancer</p>
                                    <p className="rotate-fade-out absolute xs:-left-48 sm:-left-10 md:left-2 lg:left-2 xl:-left-2 xxl:-left-48
               top-44 lg:top-96 text-[40px] sm:text-[60px] md:text-[80px] lg:text-[90px] xl:text-[100px] xxl:text-[104px] font-normal z-40 ">Comedian</p>
                                    <p className="rotate-fade-out absolute xs:-left-48 sm:-left-10 md:left-2 lg:left-2 xl:-left-2 xxl:-left-48
               top-44 lg:top-96 text-[40px] sm:text-[60px] md:text-[80px] lg:text-[90px] xl:text-[100px] xxl:text-[104px] font-normal z-40 ">singer</p>
                                </div>

                                <div style={{ background: "linear-gradient(132.67deg, rgba(241, 102, 51, 0.8) -5.44%, rgba(253, 45, 125, 0.8) 101.81%)" }}
                                    className="w-300 h-300 sm:w-[500px] sm:h-[500px] md:w-[700px] md:h-[700px] lg:w-[600px] lg:h-[600px] 
                                    rounded-full p-3 overflow-hidden relative road">

                                    <div className="rounded-full w-full h-full overflow-hidden object-cover">
                                        <Image src={currentImage} width={200} height={200} alt="artist" className="w-full h-full 
                                         duration-500 transition-opacity ease-linear opacity-100" />

                                        <div className="hsuuev">
                                            <div className="containerwe" style={{ transform: "translate(-50%, -50%) rotate(-1219.29deg)" }}>
                                                <div className="circle "></div>
                                                <div className="circle"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="xxl:w-[30%] xl:w-[30%] lg:w-[30%] md:w-[100%] sm:w-[100%] w-[100%] mt-10 md:mt-0 pl-10 md:pl-0 ">
                                    <p class="text-white text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] font-normal leading-tight 
                                    mb-6 sm:mb-7 md:mb-8 lg:mb-9 "><span class="text-[#838387]">Choose <br />
                                        </span>10+ <br /> categories</p><a class="sub_heading text-[20px] sm:text-[25px] md:text-[30px] 
                                    bg-gradient-to-r from-[#a56b81] from-20% via-[#FF8DB9] via-30% to-[#ff5b24] to-100% bg-clip-text text-transparent"
                                            href="/browse">Explore all categories --&gt;</a></div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Artist;
