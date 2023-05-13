import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Steps from "@/components/Steps";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const data = [
    {
      title: "Unique Characters",
      description:
        "Byte Bunch NFTs are distinct digital characters, each possessing their own individual traits and personalities.",
    },
    {
      title: "Limited Supply",
      description:
        "Byte Bunch NFTs are limited to 41 unique characters. Once they are gone, they are gone forever.",
    },
    {
      title: "Deferent Themes",
      description:
        "Byte Bunch NFTs are divided into different themes, each with their own unique traits and personalities.",
    },
  ];

  return (
    <div id="top">
      <div className="fixed z-20 bottom-0 right-[50%] left-[50%] m-auto py-10 flex justify-center itc">
        {/* view nfts circle button with image inside */}
        <Link href="/nfts">
          <div className="relative h-16 w-16 rounded-full bg-amber-600/40 flex justify-center items-center group">
            {/* tooltip */}
            <div className="absolute hidden group-hover:block bg-white/80 w-fit rounded-md p-2 -top-[60%] transition-all duration-300">
              <p className="text-black text-xs w-14 text-center">View NFTs</p>
            </div>
            <Image
              src="/images/logo-transparent.png"
              alt="Byte Bunch Logo"
              width={50}
              height={50}
              className="h-full w-full object-cover object-center rounded-full"
            />
          </div>
        </Link>
      </div>
      <Hero />
      <About data={data} />
      <Steps />
      <Footer />
    </div>
  );
}
