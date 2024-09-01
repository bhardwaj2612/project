"use client"
import { useState } from "react"
import Photo from "./Photos"
import Videos from "./Videos"

const Profile = () => {
    const [show, setshow] = useState(true);
    return <>
        <section>

            <div className="semicircle w-[100%] h-[100vh]  max-sm:h-[80vh] relative flex justify-center" >

                <div className="w-[90%] my-10 absolute max-sm:mt-[20%]" >

                    <div className="text-white w-[25%] max-sm:w-[80%] rounded-full mx-auto bg-[#0e0e0eab] flex justify-center items-center gap-2 py-3 my-4 ">
                        <button style={{ background: show === true ? "#fff" : "black", color: show === true ? "black" : "#fff" }} className=" bg-black rounded-full px-6 py-3 text-xl cursor-pointer hover:border-black" onClick={() => setshow(true)}>Photo </button>
                        <button style={{ background: show === !true ? "#fff" : "black", color: show === !true ? "black" : "#fff" }} className=" bg-black rounded-full px-6 py-3 text-xl cursor-pointer hover:border-black" onClick={() => setshow(!true)}>Vedios </button>
                    </div>

                    {
                        show == true ? <Photo /> : <Videos />

                    }
                </div>
            </div>

        </section>
    </>
}
export default Profile