import About from "@/components/About";
import Hero from "@/components/Hero";
import NFTs from "@/components/NFTs";
import Image from "next/image";

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
    <div>
      <Hero />
      <About data={data} />
      <NFTs />
    </div>
  );
}
