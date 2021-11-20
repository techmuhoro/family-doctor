import doctorImage from "../images/doctor-1.png"

export function Better() {
    return(
        <div className="mb-20 bg-blue-200 mx-2 rounded-md md:flex md:items-center lg:rounded-2xl lg:w-3/4 lg:mx-auto">
            <div className="mb-4 md:mb-0 lg:w-5/12 ">
                <img src={doctorImage} alt="female doctor" className="w-72 h-86 mx-auto" />
            </div>
            <div className="px-8 md:px-0 pb-6 md:pb-0 lg:w-7/12">
                <p className="capitalize font-bold text-2xl mb-2 md:text-3xl lg:tracking-wide">Better Health starts here</p>
                <p className="text-sm mb-4 lg:text-base text-gray-600">
                    <span className="block">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, quisquam.</span>
                    <span className="block">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                </p>
                <button className="bg-primary text-white w-36 py-2 shadow-xl rounded-md">Get started</button>
            </div>
        </div>
    );
}