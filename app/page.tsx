import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Steps from "@/components/Steps";

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
      <Hero />
      <About data={data} />
      <Steps />
      <Footer />
    </div>
  );
}
