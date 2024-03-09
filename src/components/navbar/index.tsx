import Link from "next/link";
import Container from "../ui/container";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import Image from "next/image";
import MimeShiftLogo from "@/assets/images/logo.png";

const routes = [
    {
        href: "/image-converter",
        label: "Image Converter"
    },
    {
        href: "/video-converter",
        label: "Video Converter"
    }
]

const Navbar = () => {
    return (
        <header className="sm:flex sm:justify-between py-3 px-4 border-b border-border/40 bg-[#111]">
            <Container>
                <div
                 className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full"
                >
                    <div className="flex items-center">
                        <Sheet>
                            <SheetTrigger>
                                <Menu className="h-6 md:hidden w-6 text-[#FFF]" />
                            </SheetTrigger>
                            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                                <nav className="flex flex-col gap-4">
                                {
                                routes.map((route, index) => (
                                    <Link
                                    key={index}
                                    href={route.href}
                                    className="block px-2 py-1 text-lg text-[#FFF]"
                                    >
                                    {route.label}
                                    </Link>
                                ))
                                }
                                </nav>
                            </SheetContent>
                        </Sheet>
                        <Link href="/" className="ml-4 lg:ml-0 flex items-center space-x-2">
                            <Image
                             src={MimeShiftLogo} 
                             alt="mime shift"
                             width={50}
                             height={50}
                            />
                            <h1 className="text-xl font-bold text-[#FFF]">MimeShift</h1>
                        </Link>
                    </div>
                    <nav className="mx-6 flex items-center space-x-4 lg:space-x-6 hidden md:block">
                        {
                            routes.map((route, index) => (
                                <Button asChild key={index} variant="ghost">
                                    <Link
                                     href={route.href}
                                     className="text-sm font-medium transition-colors text-[#FFF]"
                                    >{route.label}</Link>
                                </Button>
                            ))
                        }
                    </nav>
                    <div className="flex items-center">
                        <Button
                         variant="secondary"
                         size="sm"
                         className="mr-2"
                         aria-label="shopping cart"
                        >
                            <Link
                             href="https://twitter.com/izrajesh"
                             target="_blank"
                             className="text-sm font-medium transition-colors"
                            >Twitter</Link>
                        </Button>
                    </div>
                </div>
            </Container>
        </header>
    );
};

export default Navbar;