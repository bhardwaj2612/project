"use client"
import { useState } from "react"

const Videos = () => {
    const image = ["images/singer1.jpg", "images/singer2.jfif", "images/singer3.jpg"]
    const [check, setCheck] = useState(1)

    return <>
        <div >
            <div className="box-1" >

                {check == 1 ?
                    <div className="gallery-video h-[60vh] mx-auto max-sm:w-[95vw] max-sm:h-[30vh]" >
                        <span style={{ 'backgroundImage': `url(${image[0]})`, "backgroundSize": "cover" }}>
                        </span>

                        <span style={{ 'backgroundImage': `url(${image[1]})`, "backgroundSize": "cover" }}>
                        </span>

                        <span style={{ 'backgroundImage': `url(${image[2]})`, "backgroundSize": "cover" }}>
                        </span>

                    </div>
                    : check == 2 ?
                        <div className="gallery-video  w-[50vw] h-[60vh] mx-auto max-sm:w-[95vw] max-sm:h-[30vh]" >

                            <span className=" bg-black " style={{ 'backgroundImage': `url(${image[2]})`, "backgroundSize": "cover" }}>
                            </span>

                            <span className=" bg-black" style={{ 'backgroundImage': `url(${image[1]})`, "backgroundSize": "cover" }}>
                            </span>

                            <span className=" bg-black " style={{ 'backgroundImage': `url(${image[0]})`, "backgroundSize": "cover" }}>
                            </span>

                        </div>

                        : check == 3 ?
                            <div className="gallery-video  w-[50vw] h-[60vh] mx-auto max-sm:w-[95vw] max-sm:h-[30vh]" >

                                <span className=" bg-black" style={{ 'backgroundImage': `url(${image[1]})`, "backgroundSize": "cover" }}>
                                </span>

                                <span className=" bg-black" style={{ 'backgroundImage': `url(${image[2]})`, "backgroundSize": "cover" }}>
                                </span>

                                <span className=" bg-black" style={{ 'backgroundImage': `url(${image[0]})`, "backgroundSize": "cover" }}>
                                </span>

                            </div>
                            : check == 4 ?
                                <div className="gallery-video  w-[50vw] h-[60vh] mx-auto max-sm:w-[95vw] max-sm:h-[30vh]" >

                                    <span className=" bg-black" style={{ 'backgroundImage': `url(${image[2]})`, "backgroundSize": "cover" }}>
                                    </span>

                                    <span className=" bg-black" style={{ 'backgroundImage': `url(${image[0]})`, "backgroundSize": "cover" }}>
                                    </span>

                                    <span className=" bg-black" style={{ 'backgroundImage': `url(${image[1]})`, "backgroundSize": "cover" }}>
                                    </span>

                                </div> :
                                <div></div>
                }


            </div>

            <div className="bat w-[80%] mx-auto flex justify-center max-sm:w-[95%]" >
                <div>
                    <button style={{ background: check === 1 ? "#fff" : "black", color: check === 1 ? "black" : "#fff" }} className="btn bg-black w-[8rem] max-sm:w-[3rem] h-2 m-4 max-sm:h-1 rounded-lg cursor-pointer" onClick={() => setCheck(1)}></button>
                    <button style={{ background: check === 2 ? "#fff" : "black", color: check === 2 ? "black" : "#fff" }} className="btn bg-black w-[8rem] max-sm:w-[3rem] h-2 m-4 max-sm:h-1 rounded-lg cursor-pointer" onClick={() => setCheck(2)}></button>
                    <button style={{ background: check === 3 ? "#fff" : "black", color: check === 3 ? "black" : "#fff" }} className="btn bg-black w-[8rem] max-sm:w-[3rem] h-2 m-4 max-sm:h-1 rounded-lg cursor-pointer" onClick={() => setCheck(3)}></button>
                    <button style={{ background: check === 4 ? "#fff" : "black", color: check === 4 ? "black" : "#fff" }} className="btn bg-black w-[8rem] max-sm:w-[3rem] h-2 m-4 max-sm:h-1 rounded-lg cursor-pointer" onClick={() => setCheck(4)}></button>
                </div>
            </div>
        </div>
    </>
}
export default Videos