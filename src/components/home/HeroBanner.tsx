
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function HeroBanner() {
  return (
    <section className="bg-gradient-to-r from-shopBlue-light to-blue-50 py-16">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Shop the Latest Trends
            <span className="text-shopBlue block mt-2">at Great Prices</span>
          </h1>
          <p className="text-lg text-gray-600 md:text-xl max-w-md">
            Discover amazing products with nationwide delivery and secure payment options.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-shopBlue hover:bg-shopBlue-dark">
              <Link to="/category/featured">Shop Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/category">Explore Categories</Link>
            </Button>
          </div>
          <div className="flex items-center gap-3 pt-4">
            <div className="flex -space-x-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center overflow-hidden">
                  <img 
                    src={`https://source.unsplash.com/random/100x100?face=${i}`} 
                    alt="Customer" 
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="text-sm">
              <span className="font-medium">Trusted by 10,000+</span>
              <span className="text-muted-foreground block">happy customers</span>
            </div>
          </div>
        </div>
        <div className="hidden lg:block">
          <img 
            src="https://images.unsplash.com/photo-1583744946564-b52d01e7f922?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=847&q=80" 
            alt="Shopping"
            className="rounded-lg shadow-lg max-h-[500px] w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
