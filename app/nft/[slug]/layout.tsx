import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function NFTsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen bg-cover bg-fixed bg-gray-950">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
