import therapistAvatar from "../images/therapist-avatar.jpg";
import therapistAvatar2 from "../images/therapist-avatar-2.jpg";
import therapistAvatar3 from "../images/therapist-avatar-3.jpg";

export function Therapist() {
    return (
        <div className="mb-20 px-3 md:flex md:items-center md:gap-x-6 lg:w-3/4 lg:mx-auto lg:px-0">
            <div className="mb-4 md:w-1/2">{/* Text */}
                <p className="font-bold text-2xl mb-1">
                    <span className="block">Qualified Therapist</span>
                    <span className="block">Consultaion at Any</span>
                    <span className="block">Time at Any Place</span>
                </p>
                <p className="text-base mb-4 lg:w-5/6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nemo itaque facilis voluptatibus eaque saepe aut nesciunt? Placeat, omnis adipisci.
                </p>
                <div>
                    <button className="bg-primary text-white px-5 py-1 rounded-lg hover:bg-hover transition-all duration-300">Book now</button>
                </div>
            </div>
            <div className="h-56 md:w-1/2 w-96 mx-auto lg:w-96 lg:ml-auto"> {/*Avatar*/}
                <div className="h-1/2 flex gap-x-3 mb-3">{/** Row 1 */}
                    <div className="h-full w-1/2">
                        <img src={therapistAvatar} alt="" className="w-full h-full rounded-xl" />
                    </div>
                    <div className="h-full w-1/2">
                        <img src={therapistAvatar2} alt="" className="w-full h-full rounded-xl" />
                    </div>
                </div>
                <div className="h-1/2 flex">{/** Row 2 */}
                    <div className="h-full w-2/12"></div>
                    <div className="h-full w-6/12 mr-1">
                        <img src={therapistAvatar3} alt="" className="w-full h-full rounded-xl" />
                    </div>
                    <div className="h-full w-4/12">
                        <div className="bg-blue-300 h-full w-24 mx-auto rounded-br-full"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}