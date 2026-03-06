import HeroCarousel from "@/compontents/modules/home/Carousel";
import ProductsSection from "@/compontents/modules/Products/Products";
import { DesktopSidebar } from "@/compontents/shered/SideBar";

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <div className="flex">
        <DesktopSidebar />
        <ProductsSection />
      </div>
    </>
  );
}
