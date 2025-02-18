import { Footer } from "@/components/footer";
import { HomeNavbar } from "@/components/home-navbar";

export default function Home() {
  return (
    <section className="max-w-[1440px] m-auto">
      <HomeNavbar />
      <Footer />
    </section>
  );
}
