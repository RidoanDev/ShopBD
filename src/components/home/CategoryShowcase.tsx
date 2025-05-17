
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function CategoryShowcase() {
  const categories = [
    {
      name: "Electronics",
      image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=301&q=80",
      path: "/category/electronics"
    },
    {
      name: "Fashion",
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      path: "/category/fashion"
    },
    {
      name: "Home & Living",
      image: "https://images.unsplash.com/photo-1584779989623-57ee00cdb864?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=462&q=80",
      path: "/category/home-living"
    },
    {
      name: "Beauty",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80",
      path: "/category/beauty"
    }
  ];

  return (
    <section className="py-12 bg-shopGray-light">
      <div className="container">
        <div className="flex justify-between items-baseline mb-8">
          <h2 className="text-3xl font-bold">Shop by Category</h2>
          <Link 
            to="/category"
            className="text-shopBlue font-medium flex items-center hover:underline"
          >
            View All <ArrowRight className="h-4 w-4 ml-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link 
              key={category.name}
              to={category.path}
              className="group rounded-lg overflow-hidden shadow-sm bg-white relative hover:shadow-md transition-shadow"
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 flex items-end">
                <div className="bg-gradient-to-t from-black/70 to-transparent w-full p-4 text-white">
                  <h3 className="font-bold text-lg">{category.name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
