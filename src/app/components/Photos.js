"use client"
import { useEffect, useState } from "react"

const Photo = () => {
    const image = ["images/zakir.jfif", "images/dancer.jfif", "images/manish.jfif", "images/kaif-katrina.jpg"]
    const [count, setCount] = useState(1)


    return <>
        <div >
            <div className="box-1 " >
                <div className="gallery max-sm:w-[95vw] max-sm:h-[40vh]">
                    {count == 1 ?
                        <div className="box  h-[60vh] mx-auto max-sm:w-[95vw] max-sm:h-[40vh]" >
                            <span style={{ 'backgroundImage': `url(${image[3]})`, "backgroundSize": "cover" }} className=" bg-black rounded-tl-[70%] rounded-bl-[70%] rounded-tr-[70%]">
                            </span>

                            <span style={{ 'backgroundImage': `url(${image[0]})`, "backgroundSize": "cover" }} className=" bg-black rounded-lg  ">
                            </span>

                            <span style={{ 'backgroundImage': `url(${image[3]})`, "backgroundSize": "cover" }} className=" bg-black rounded-tl-[70%] rounded-bl-[70%] rounded-tr-[70%]">
                            </span>

                            <span style={{ 'backgroundImage': `url(${image[1]})`, "backgroundSize": "cover" }} className=" bg-black rounded-lg ">
                            </span>

                            <span style={{ 'backgroundImage': `url(${image[2]})`, "backgroundSize": "cover" }} className=" bg-black rounded-lg">
                            </span>

                            <span style={{ 'backgroundImage': `url(${image[1]})`, "backgroundSize": "cover" }} className=" bg-black ">
                            </span>

                            <span style={{ 'backgroundImage': `url(${image[3]})`, "backgroundSize": "cover" }} className=" bg-black rounded-lg">
                            </span>

                            <span style={{ 'backgroundImage': `url(${image[1]})`, "backgroundSize": "cover" }} className=" bg-black">
                            </span>
                        </div>
                        : count == 2 ?
                            <div className="box w-[50vw] h-[60vh] mx-auto max-sm:w-[95vw] max-sm:h-[40vh]" >
                                <span style={{ 'backgroundImage': `url(${image[2]})`, "backgroundSize": "cover" }} className=" bg-black rounded-tl-[70%] rounded-bl-[70%] rounded-tr-[70%]">
                                </span>

                                <span style={{ 'backgroundImage': `url(${image[1]})`, "backgroundSize": "cover" }} className=" bg-black rounded-lg  ">
                                </span>

                                <span style={{ 'backgroundImage': `url(${image[2]})`, "backgroundSize": "cover" }} className=" bg-black rounded-tl-[70%] rounded-bl-[70%] rounded-tr-[70%]">
                                </span>

                                <span style={{ 'backgroundImage': `url(${image[1]})`, "backgroundSize": "cover" }} className=" bg-black rounded-lg ">
                                </span>

                                <span style={{ 'backgroundImage': `url(${image[3]})`, "backgroundSize": "cover" }} className=" bg-black rounded-lg">
                                </span>

                                <span style={{ 'backgroundImage': `url(${image[2]})`, "backgroundSize": "cover" }} className=" bg-black ">
                                </span>

                                <span style={{ 'backgroundImage': `url(${image[0]})`, "backgroundSize": "cover" }} className=" bg-black rounded-lg">
                                </span>

                                <span style={{ 'backgroundImage': `url(${image[2]})`, "backgroundSize": "cover" }} className=" bg-black">
                                </span>
                            </div>

                            : count == 3 ?
                                <div className="box w-[50vw] h-[60vh] mx-auto max-sm:w-[95vw] max-sm:h-[40vh]" >

                                    <span style={{ 'backgroundImage': `url(${image[3]})`, "backgroundSize": "cover" }} className=" bg-black rounded-tl-[70%] rounded-bl-[70%] rounded-tr-[70%]">
                                    </span>

                                    <span style={{ 'backgroundImage': `url(${image[2]})`, "backgroundSize": "cover" }} className=" bg-black rounded-lg  ">
                                    </span>

                                    <span style={{ 'backgroundImage': `url(${image[3]})`, "backgroundSize": "cover" }} className=" bg-black rounded-tl-[70%] rounded-bl-[70%] rounded-tr-[70%]">
                                    </span>

                                    <span style={{ 'backgroundImage': `url(${image[2]})`, "backgroundSize": "cover" }} className=" bg-black rounded-lg ">
                                    </span>

                                    <span style={{ 'backgroundImage': `url(${image[0]})`, "backgroundSize": "cover" }} className=" bg-black rounded-lg">
                                    </span>

                                    <span style={{ 'backgroundImage': `url(${image[1]})`, "backgroundSize": "cover" }} className=" bg-black ">
                                    </span>

                                    <span style={{ 'backgroundImage': `url(${image[0]})`, "backgroundSize": "cover" }} className=" bg-black rounded-lg">
                                    </span>

                                    <span style={{ 'backgroundImage': `url(${image[2]})`, "backgroundSize": "cover" }} className=" bg-black">
                                    </span>
                                </div>
                                : count == 4 ?
                                    <div className="box w-[50vw] h-[60vh] mx-auto max-sm:w-[95vw] max-sm:h-[40vh]" >

                                        <span style={{ 'backgroundImage': `url(${image[0]})`, "backgroundSize": "cover" }} className=" bg-black rounded-tl-[70%] rounded-bl-[70%] rounded-tr-[70%]">
                                        </span>

                                        <span style={{ 'backgroundImage': `url(${image[1]})`, "backgroundSize": "cover" }} className=" bg-black rounded-lg  ">
                                        </span>

                                        <span style={{ 'backgroundImage': `url(${image[2]})`, "backgroundSize": "cover" }} className=" bg-black rounded-tl-[70%] rounded-bl-[70%] rounded-tr-[70%]">
                                        </span>

                                        <span style={{ 'backgroundImage': `url(${image[1]})`, "backgroundSize": "cover" }} className=" bg-black rounded-lg ">
                                        </span>

                                        <span style={{ 'backgroundImage': `url(${image[2]})`, "backgroundSize": "cover" }} className=" bg-black rounded-lg">
                                        </span>

                                        <span style={{ 'backgroundImage': `url(${image[1]})`, "backgroundSize": "cover" }} className=" bg-black ">
                                        </span>

                                        <span style={{ 'backgroundImage': `url(${image[2]})`, "backgroundSize": "cover" }} className=" bg-black rounded-lg">
                                        </span>

                                        <span style={{ 'backgroundImage': `url(${image[0]})`, "backgroundSize": "cover" }} className=" bg-black">
                                        </span>
                                    </div> :
                                    <div></div>
                    }

                </div>
            </div>

            <div className="bat border-black w-[80%] mx-auto flex justify-center max-sm:w-[95%]" >
                <div>
                    <button style={{ background: count === 1 ? "#fff" : "black", color: count === 1 ? "black" : "#fff" }} className="btn bg-black w-[8rem] max-sm:w-[3rem] h-2 m-4 max-sm:h-1 rounded-lg cursor-pointer" onClick={() => setCount(1)}></button>
                    <button style={{ background: count === 2 ? "#fff" : "black", color: count === 2 ? "black" : "#fff" }} className="btn bg-black w-[8rem] max-sm:w-[3rem] h-2 m-4 max-sm:h-1 rounded-lg cursor-pointer" onClick={() => setCount(2)}></button>
                    <button style={{ background: count === 3 ? "#fff" : "black", color: count === 3 ? "black" : "#fff" }} className="btn bg-black w-[8rem] max-sm:w-[3rem] h-2 m-4 max-sm:h-1 rounded-lg cursor-pointer" onClick={() => setCount(3)}></button>
                    <button style={{ background: count === 4 ? "#fff" : "black", color: count === 4 ? "black" : "#fff" }} className="btn bg-black w-[8rem] max-sm:w-[3rem] h-2 m-4 max-sm:h-1 rounded-lg cursor-pointer" onClick={() => setCount(4)}></button>
                </div>
            </div>
        </div>
    </>
}
export default Photo