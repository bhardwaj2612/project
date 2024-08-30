const Squard = () => {
    const image = ["/images/image-1.png", "/images/image-3.png", "/images/image-4.png", "/images/image-5.png"]
    return <>
        <section>
            <div className="w-[100%]" >
                <div className="w-[80%] mx-auto main-wheel">
                    <div className="w-[40%]  mx-auto sub-wheel ">
                        Raghav

                        <img src={image[0]} className="wheel" />
                        {/* <img src={image[2]} className="wheel" />
                        <img src={image[1]} className="wheel" />
                        <img src={image[3]} className="wheel" /> */}
                    </div>

                </div>
            </div>
        </section>
    </>
}
export default Squard