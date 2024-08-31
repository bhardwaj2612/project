"use client"
import Image from "next/image"
import { useRef, useState } from "react";

const RecentShow = () => {
    const image = ["/images/image-1.png", "/images/image-3.png", "/images/image-4.png", "/images/image-5.png"]
    const info = [{ name: 'Nora', place: 'Pune' }, { name: 'Kapil', place: 'Delhi' }, { name: 'Zakir Khan', place: 'Pune for Meesho' }, { name: 'Arjit sing', place: 'Mumbai' }]
    const slidLeft = useRef();
    const [increment, setIncrement] = useState(0)
    function slid() {
        if (slidLeft.current) {
            slidLeft.current.style.scrollBehavior = "smooth"
            slidLeft.current.scrollLeft += 421
        }

        if (increment < 3) {
            setIncrement(increment + 1)
        }

    }
    function slidleft() {
        if (slidLeft.current) {
            slidLeft.current.style.scrollBehavior = "smooth"
            slidLeft.current.scrollLeft -= 421
        }
        if (increment > 0) {
            setIncrement(increment - 1)
        }
    }
    return <>
        <section>
            <div className="w-[100%] h-[100vh] flex flex-col items-center mt-[7%]">

                <div className=" w-[50%] text-center wrap3" >
                    <h1 className="text-white text-5xl max-sm:text-xl">  Recent show made Star-studded vis StarClinch </h1>
                </div>

                <div className="flex w-[70%] max-sm:w-[100%] my-[7%] justify-center items-center">

                    <Image onClick={() => slidleft()} src={"/images/back.png"} width={70} height={70} className="max-sm:hidden " />

                    <div ref={slidLeft} className="scrollHidden rounded-tl-[50%] rounded-tr-[50%] flex items-center ml-[20%] max-sm:ml-0  mr-3 w-[50%] bg-white overflow-x-scroll">

                        <img src={image[0]} className="w-[100%] flex-none" />
                        <img src={image[2]} className="w-[100%] flex-none" />
                        <img src={image[1]} className="w-[100%] flex-none" />
                        <img src={image[3]} className="w-[100%] flex-none" />

                    </div>

                    <div className="w-[20%] mr-3 max-sm:mr-1">
                        <p className="text-xl max-sm:text-base text-[#ffffff9f]">
                            <span className="text-3xl mr-1 max-sm:text-base text-[#fff]" >{info[increment].name}</span>
                            For an Event hosted by xyz preformed at
                            <span className="text-3xl ml-1 max-sm:text-base text-[#fff]">{info[increment].place}</span>
                        </p>
                    </div>

                    <Image src={"/images/next.png"} onClick={() => slid()} width={70} height={70} className="max-sm:hidden " />

                </div>
            </div>
        </section>
    </>
}
export default RecentShow