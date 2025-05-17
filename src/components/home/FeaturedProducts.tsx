
import { useState } from "react";
import { ProductCard } from "@/components/product/ProductCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useProducts } from "@/hooks/useProducts";
import { Product } from "@/types/product";

export function FeaturedProducts() {
  const { products } = useProducts();
  const [activeTab, setActiveTab] = useState("popular");

  const getFilteredProducts = (): Product[] => {
    switch (activeTab) {
      case "popular":
        return [...products].sort((a, b) => b.rating - a.rating).slice(0, 8);
      case "new":
        return products.filter(product => product.isNew).slice(0, 8);
      case "discount":
        return products.filter(product => product.discount).slice(0, 8);
      default:
        return products.slice(0, 8);
    }
  };

  const filteredProducts = getFilteredProducts();

  return (
    <section className="py-12">
      <div className="container">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <h2 className="text-3xl font-bold">Featured Products</h2>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full sm:w-auto">
            <TabsList>
              <TabsTrigger value="popular">Popular</TabsTrigger>
              <TabsTrigger value="new">New Arrivals</TabsTrigger>
              <TabsTrigger value="discount">On Sale</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Button variant="outline" size="lg">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
}
