import { useState } from "react";
import SearchBox from "./SearchBox";
import PurpleButton from "./PurpleButton";

export default function Header() {
    const [navbar, setNavbar] = useState(false);

    return (
        <nav className="w-full mt-2">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-2">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <a href="#">
                            <img className="w-[85px] md:w-[90px] lg:w-[120px] xl:w-[130px]" width={130} height={40} src="https://s24.picofile.com/file/8455277342/Group_2199.png" alt="company-logo" />
                        </a>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-gray-700"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-gray-700"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                            }`}
                    >
                        <ul className="items-center justify-center text-gray-600 space-y-8 md:text-[13px] md:gap-x-2 md:flex md:space-x-2 md:space-y-0 xl:space-x-8 xl:text-[14px]">
                            <li className="hover:text-[#9D60EB]">
                                <a href="#">Home</a>
                                <span className="inline-flex relative top-5 right-6
                                 justify-center items-center w-2 h-2 text-xs font-semibold 
                                 text-blue-800 bg-[#9D60EB] rounded-full hidden md:inline-block">
                                </span>
                            </li>
                            <li className="hover:text-[#9D60EB]">
                                <a href="#">About</a>
                            </li>
                            <li className="hover:text-[#9D60EB]">
                                <a href="#">Portfolio</a>
                            </li>
                            <li className="hover:text-[#9D60EB]">
                                <a href="#">Product</a>
                            </li>
                            <li className="hover:text-[#9D60EB]">
                                <a href="#">Career</a>
                            </li>
                            <li className="hover:text-[#9D60EB]">
                                <a href="#">Blog</a>
                            </li>
                        </ul>

                        <div className="mt-3 space-y-2 lg:hidden md:inline-block md:hidden">
                            <PurpleButton title={"Contact Us"} width="w-full" />
                        </div>
                    </div>
                </div>
                <div className="hidden space-x-2 md:inline-block">
                    <div className="flex">
                        <div className="flex-initial w-64 md:hidden lg:inline-block">
                            <SearchBox />
                        </div>
                        <div className="flex-initial w-32 relative top-1">
                            <PurpleButton title={"Contact Us"} />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}