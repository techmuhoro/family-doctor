import articleAvatar1 from "../images/article-1.jpg"

export function Articles() {
    return(
        <div className="mb-20 lg:w-3/4 mx-auto">
            <p className="text-center font-bold text-3xl tracking-wide mb-8">Latest news & articles</p>
            <div className="flex flex-wrap gap-x-8 gap-y-5 mb-6">
                <div className ="w-72 px-2 py-2 rounded-md shadow-lg mx-auto mb-10 lg:mb-0">
                    <div className="mb-3">
                        <img src={articleAvatar1} alt="artcicle" className="rounded-md h-30 w-full" />
                    </div>
                    <button className="bg-blue-100 w-32 py-1 rounded-md text-blue-600 mb-3">New</button>
                    <p className="font-bold mb-1">Fruits are good for your health</p>
                    <p className = "mb-3 text-sm text-gray-700">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta deleniti impedit nam explicabo iste ullam fuga nulla est distinctio ratione.
                    </p>
                    <p className="mb-2">
                        <a href="#" className="text-primary">
                            <span>Read more</span>
                            <span className="text-sm ml-1"><i className="fas fa-arrow-right"></i></span>
                        </a>
                    </p>
                </div>
                <div className ="w-72 px-2 py-2 rounded-md shadow-lg mx-auto mb-10 lg:mb-0">
                    <div className="mb-3">
                        <img src={articleAvatar1} alt="artcicle" className="rounded-md h-30 w-full" />
                    </div>
                    <button className="bg-blue-100 w-32 py-1 rounded-md text-blue-600 mb-3">New</button>
                    <p className="font-bold mb-1">Fruits are good for your health</p>
                    <p className = "mb-3 text-sm text-gray-700">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta deleniti impedit nam explicabo iste ullam fuga nulla est distinctio ratione.
                    </p>
                    <p className="mb-2">
                        <a href="#" className="text-primary">
                            <span>Read more</span>
                            <span className="text-sm ml-1"><i className="fas fa-arrow-right"></i></span>
                        </a>
                    </p>
                </div>
                <div className ="w-72 px-2 py-2 rounded-md shadow-lg mx-auto mb-10 lg:mb-0">
                    <div className="mb-3">
                        <img src={articleAvatar1} alt="artcicle" className="rounded-md h-30 w-full" />
                    </div>
                    <button className="bg-blue-100 w-32 py-1 rounded-md text-blue-600 mb-3">New</button>
                    <p className="font-bold mb-1">Fruits are good for your health</p>
                    <p className = "mb-3 text-sm text-gray-700">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta deleniti impedit nam explicabo iste ullam fuga nulla est distinctio ratione.
                    </p>
                    <p className="mb-2">
                        <a href="#" className="text-primary">
                            <span>Read more</span>
                            <span className="text-sm ml-1"><i className="fas fa-arrow-right"></i></span>
                        </a>
                    </p>
                </div>
            </div>
            {/* <div className="flex justify-end">
                <div className="flex text-xl font-normal">
                    <p className="mr-4 cursor-pointer"><i className="fas fa-arrow-left"></i></p>
                    <p><i className="fas fa-arrow-right cursor-pointer"></i></p>
                </div>
            </div> */}
        </div>
    );
}