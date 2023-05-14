import Header from "@/components/Header";

export default function NFTsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[url('/images/background.jpg')] bg-cover bg-fixed bg-black/80 bg-blend-multiply">
      <Header />
      {children}
    </div>
  );
}
