import React, { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import logo from "../../../../public/assets/logo/logo.png"
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        if (scrollPosition > 0) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    function IsActive(path: any) {
        const { pathname } = useRouter();
        return pathname === path;
    }

    const closeMenu = () => {
        setIsOpen(false);
    };
    return (
        <div className="">
            <nav
                className={`fixed top-0 z-50 w-full transition-colors duration-300 ${isScrolled
                    ? "md:bg-white bg-black text-black bg-opacity-80 backdrop-filter backdrop-blur-md shadow-2xl"
                    : "text-white bg-black bg-opacity-30"
                    }`}>
                <div className="mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-[85px]">
                        <div className="flex w-full lg:px-12 items-center justify-between">
                            <Link href="/" className="flex-shrink-0">
                                <Image className="h-16 w-32" src={logo} alt="Workflow" />
                            </Link>
                            <div className="hidden md:block">
                                <div className="flex items-baseline space-x-2 styletext">
                                    <Link
                                        href="/"
                                        className={IsActive('/') ? 'activelink text-primary-600' : 'ancor px-2 py-1 lg:text-lg hover:text-primary-500 font-semibold'}
                                    >
                                        Home
                                    </Link>

                                    <Link
                                        href="/about"
                                        className={IsActive('/about') ? 'activelink text-primary-600' : 'ancor px-2 py-1 lg:text-lg hover:text-primary-500 font-semibold'}
                                    >
                                        About Us
                                    </Link>

                                    <Link
                                        href="/service"
                                        className={IsActive('/service') ? 'activelink text-primary-600' : 'ancor px-2 py-1 lg:text-lg hover:text-primary-500 font-semibold'}
                                    >
                                        Service
                                    </Link>

                                    <Link
                                        href="/course"
                                        className={IsActive('/course') ? 'activelink text-primary-600' : 'ancor px-2 py-1 lg:text-lg hover:text-primary-500 font-semibold'}
                                    >
                                        Course
                                    </Link>

                                    <Link
                                        href="/contactUs"
                                        className={IsActive('/contactUs') ? 'activelink text-primary-600' : 'ancor px-2 py-1 lg:text-lg hover:text-primary-500 font-semibold'}
                                    >
                                        Contact Us
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className=" inline-flex items-center justify-center p-2 rounded-md text-primary-500 focus:outline-none "
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                    <svg
                                        className="block h-4 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="block h-4 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-300 transform"
                    enterFrom="opacity-0 translate-x-[-100%] scale-95"
                    enterTo="opacity-100 translate-x-0 scale-100"
                    leave="transition ease-in duration-200 transform"
                    leaveFrom="opacity-100 translate-x-0 scale-100"
                    leaveTo="opacity-0 translate-x-[100%] scale-95"
                >
                    {(ref) => (
                        <div className="md:hidden" id="mobile-menu">
                            <div ref={ref} className=" text-white bg-black bg-opacity-70 h-screen px-2 text-center pt-5 pb-3 space-y-1 sm:px-3">
                                <Link
                                    href="/"
                                    onClick={closeMenu}
                                    className={IsActive('/') ? 'activelink uppercas text-primary-500' : ' block px-2 py-4 text-base hover:text-white font-medium'}
                                >
                                    Home
                                </Link>

                                <Link
                                    href="/about"
                                    onClick={closeMenu}
                                    className={IsActive('/about') ? 'activelink uppercas text-primary-500' : ' block px-2 py-4 text-base hover:text-white font-medium'}
                                >
                                    About Us
                                </Link>

                                <Link
                                    href="/service"
                                    onClick={closeMenu}
                                    className={IsActive('/service') ? 'activelink uppercas text-primary-500' : ' block px-2 py-4 text-base hover:text-white font-medium'}
                                >
                                    Service
                                </Link>

                                <Link
                                    href="/course"
                                    onClick={closeMenu}
                                    className={IsActive('/course') ? 'activelink uppercas text-primary-500' : ' block px-2 py-4 text-base hover:text-white font-medium'}
                                >
                                    Course
                                </Link>
                                <Link
                                    href="/contactUs"
                                    onClick={closeMenu}
                                    className={IsActive('/contactUs') ? 'activelink uppercas text-primary-500' : ' block px-2 py-4 text-base hover:text-white font-medium'}
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    )}
                </Transition>
            </nav>
            <style jsx>{`
            .activelink {
            color: ${isScrolled ? "black" : "black"}
        }
        `}</style>
        </div>
    );
}

export default Header;
