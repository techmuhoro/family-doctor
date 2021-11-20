import mobileAvatar from "../images/mobile.png";

export function Mobile() {
    return(
        <div className="mb-20 md:flex md:items-center lg:w-3/4 mx-auto">
            <div className="mb-4 md:w-1/2 md:mb-0">
                <div className="w-80 h-80 bg-blue-300 flex items-center justify-center rounded-full">
                    <img src={mobileAvatar} alt="mobile" className="" />
                </div>
            </div>
            <div className="px-3 md:px-0 md:w-1/2">
                <p className="font-bold text-2xl mb-1">
                    <span className="block">Monitor yor family</span>
                    <span className="block">health and become</span>
                    <span className="block">a hero</span>
                </p>
                <p className="leading-1 text-gray-800">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque sit deserunt libero consequuntur in commodi vel veniam, culpa corrupti id natus amet laboriosam, repudiandae sapiente tempore dolor? Quae, placeat ducimus!
                </p>
            </div>
        </div>
    );
}