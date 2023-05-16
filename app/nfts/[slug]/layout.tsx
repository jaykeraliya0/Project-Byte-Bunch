import Header from "@/components/Header";
import Image from "next/image";

export default function NFTsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen bg-cover bg-fixed bg-black/80 bg-blend-multiply">
      <Image
        width={1920}
        height={1080}
        className="fixed h-full top-0 bottom-0 object-center object-cover pointer-events-none -z-40"
        src="/images/background.jpg"
        alt="Background"
      />
      <Header />
      {children}
    </div>
  );
}
