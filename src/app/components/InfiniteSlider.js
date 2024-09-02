import { FaStar } from "react-icons/fa";

const InfiniteSlider = () => {
    return <>
        <div className="slider" style={{ " --width": "100px", "--height": "30px", "--quantity": 4 }}>
            <div className="list">
                <div className="items text-white text-2xl font-bold" style={{ "--position": 1 }}>HeadLights<span className="flex items-center"><FaStar className="mX-2" /></span>HeadLights</div>
            </div>
        </div >

    </>
}
export default InfiniteSlider