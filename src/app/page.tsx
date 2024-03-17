import DropZone from "@/components/dropzone";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <DropZone />
    </main>
  );
}
