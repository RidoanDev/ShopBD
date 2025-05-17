
import { HeroBanner } from "@/components/home/HeroBanner";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { CategoryShowcase } from "@/components/home/CategoryShowcase";
import { PromoBanners } from "@/components/home/PromoBanners";
import { SpecialDeals } from "@/components/home/SpecialDeals";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroBanner />
      <FeaturedProducts />
      <CategoryShowcase />
      <SpecialDeals />
      <PromoBanners />
    </div>
  );
};

export default Index;
