import Link from "next/link";
import { Button } from "../ui/button";

const Hero = () => {
    return (
        <div className="bg-[#111] text-[#FFF] flex justify-center flex-col items-center h-[400px]">
            <h1 className="text-3xl md:text-5xl font-medium text-center uppercase px-4">
            file Converter with no boundaries
            </h1>
            <p className="text-[#A1A1AA] text-md md:text-lg text-center md:px-24 xl:px-44 2xl:px-52 px-4 py-2 mt-1 max-w-[80rem]">The Ultimate File Conversion Tool. With support for nearly all formats, including images, audio, video, documents, and much more. start converting your files and experience the power of MimeShift.</p>
            <Button variant="secondary" className="mt-4">
                <Link href="#">Get Started</Link>
            </Button>
        </div>
    );
};

export default Hero;