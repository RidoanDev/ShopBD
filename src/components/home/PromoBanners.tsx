
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function PromoBanners() {
  const banners = [
    {
      id: 1,
      title: "Summer Collection",
      description: "Save up to 30% on new arrivals",
      bgColor: "bg-amber-50",
      image: "https://images.unsplash.com/photo-1469228252629-cbe7cb7db2c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=450&q=80",
      link: "/category/fashion"
    },
    {
      id: 2,
      title: "Tech Gadgets",
      description: "Latest electronics at the best prices",
      bgColor: "bg-blue-50",
      image: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=450&q=80",
      link: "/category/electronics"
    }
  ];

  return (
    <section className="py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {banners.map((banner) => (
            <div 
              key={banner.id}
              className={`${banner.bgColor} rounded-lg overflow-hidden shadow-sm`}
            >
              <div className="flex flex-col md:flex-row items-center">
                <div className="p-6 md:p-8 flex-1">
                  <h3 className="text-2xl font-bold mb-2">{banner.title}</h3>
                  <p className="text-gray-600 mb-4">{banner.description}</p>
                  <Link 
                    to={banner.link}
                    className="inline-flex items-center text-shopBlue font-medium hover:underline"
                  >
                    Shop Now <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
                <div className="md:w-1/2">
                  <img 
                    src={banner.image} 
                    alt={banner.title}
                    className="w-full h-48 md:h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
