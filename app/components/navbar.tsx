import Image from "next/image";

const Navbar = () => {
    return (
        <div className="top-0 fixed w-full flex p-5">
            <div className="w-full flex bg-gradient-to-b from-[#FF3179]/30 to-transparent z-10 relative rounded-lg shadow-sm">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/30 to-transparent backdrop-blur -z-10 rounded-lg"></div>
                <div className="container mx-auto p-5">
                    <div className="w-full flex items-center">

                    <div className="flex items-center">
                        <Image
                            src={"/logo.png"}
                            alt=""
                            width={80}
                            height={80}
                            />
                        <h1 className="text-gray-900 text-3xl ml-4">kahvana</h1>
                    </div>
                    <ul className="mx-auto items-center justify-center hidden lg:flex whitespace-nowrap">
                        <li className="text-gray-900 mx-3 hover:underline cursor-pointer">
                            Home
                        </li>
                        <li className="text-gray-900 mx-3 hover:underline cursor-pointer">
                            Portfolio
                        </li>
                        <li className="text-gray-900 mx-3 hover:underline cursor-pointer">
                            Behind The Scenes
                        </li>
                        <li className="text-gray-900 mx-3 hover:underline cursor-pointer">
                            Blog
                        </li>
                    </ul>
                    <ul className="items-center justify-center hidden lg:flex">
                        <li className="text-white bg-gray-900 hover:bg-gray-800 cursor-pointer rounded-full px-4 py-1 shadow-xl">
                            Contact
                        </li>
                    </ul>
                </div>
                            </div>
            </div>
            <div className="w-full pt-5 hidden lg:hidden">
                 <ul className="text-xl">
                        <li className="mb-2 p-1.5 bg-white/30 text-gray-700 rounded">
                            Home
                        </li>
                        <li className="mb-2 p-1.5 bg-white/30 text-gray-700 rounded">
                            Portfolio
                        </li>
                        <li className="mb-2 p-1.5 bg-white/30 text-gray-700 rounded">
                            Behind The Scenes
                        </li>
                        <li className="mb-2 p-1.5 bg-white/30 text-gray-700 rounded">
                            Blog
                        </li>
                    </ul>
            </div>
        </div>
    );
};

export default Navbar;
