import Footer from "@/components/slayerai/footer";
import Header from "@/components/slayerai/header";

export const metadata = {
  title: "Slayer - Podcast Generation",
  description: "Slayer",
};

export default function SlayerLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-screen bg-gray-100">
      <Header />
      {children}
      <Footer />
    </section>
  );
}
