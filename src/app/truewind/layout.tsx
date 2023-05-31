import Header from "@/components/truewind/header";
import Footer from "@/components/truewind/footer";

export const metadata = {
  title: "Truewind | Get Peace of Mind with Truewind",
  description: "Truewind",
};

export default function SlayerLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-screen bg-white text-black">
      <Header />
      {children}
      <Footer />
    </section>
  );
}
