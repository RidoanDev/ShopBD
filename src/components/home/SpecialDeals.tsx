
import { useState, useEffect } from "react";
import { ProductCard } from "@/components/product/ProductCard";
import { Clock } from "lucide-react";
import { useProducts } from "@/hooks/useProducts";

export function SpecialDeals() {
  const { products } = useProducts();
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 36,
    seconds: 0,
  });

  // Deal countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds -= 1;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes -= 1;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours -= 1;
            } else {
              hours = 23;
              if (days > 0) {
                days -= 1;
              } else {
                // Reset timer when it reaches 0
                days = 2;
                hours = 14;
                minutes = 36;
                seconds = 0;
              }
            }
          }
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Get products with highest discount
  const dealProducts = products
    .filter(product => product.discount)
    .sort((a, b) => {
      const discountA = a.price - a.discountPrice;
      const discountB = b.price - b.discountPrice;
      return discountB - discountA;
    })
    .slice(0, 4);

  return (
    <section className="py-12 bg-red-50">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <h2 className="text-3xl font-bold text-red-600">Flash Sale</h2>
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-red-600" />
            <div className="flex items-center gap-1 text-red-600 font-mono font-bold">
              <div className="bg-red-600 text-white px-2 py-1 rounded">
                {timeLeft.days.toString().padStart(2, '0')}
              </div>
              <span>:</span>
              <div className="bg-red-600 text-white px-2 py-1 rounded">
                {timeLeft.hours.toString().padStart(2, '0')}
              </div>
              <span>:</span>
              <div className="bg-red-600 text-white px-2 py-1 rounded">
                {timeLeft.minutes.toString().padStart(2, '0')}
              </div>
              <span>:</span>
              <div className="bg-red-600 text-white px-2 py-1 rounded">
                {timeLeft.seconds.toString().padStart(2, '0')}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dealProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
