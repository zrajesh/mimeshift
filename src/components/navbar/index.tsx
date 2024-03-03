"use client"
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import MimeShiftLogo from "@/assets/images/logo.png";

const Navbar = () => {
    const TWITTER_LINK = "https://twitter.com/izrajesh";
    const redirectLink = (url: string) => {
        window.open(url, "self_blank");
    }
    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between p-3 md:p-4">
        <Link href="/" className="flex items-center space-x-1 md:space-x-3 rtl:space-x-reverse">
            <Image
             src={MimeShiftLogo} className="h-8" alt="Flowbite Logo"
             width={40}
             height={100}
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">MimeShift</span>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <Button
             onClick={
                () => redirectLink(TWITTER_LINK)
             }
            >Twitter</Button>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
            {/* <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                    <Link href="#" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</Link>
                </li>
                <li>
                    <Link href="#" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</Link>
                </li>
            </ul> */}
        </div>
        </div>
        </nav>
    );
};

export default Navbar;