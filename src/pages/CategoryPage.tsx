import { useState, useEffect } from "react";
import { useParams, useSearchParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product/ProductCard";
import { useProducts } from "@/hooks/useProducts";
import { Product } from "@/types/product";
import { 
  Filter, 
  SlidersHorizontal, 
  ChevronDown, 
  ChevronRight,
  CheckSquare,
  Square,
  X
} from "lucide-react";
import { Separator } from "@/components/ui/separator";

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("q");

  const { products, getProductsByCategory, searchProducts } = useProducts();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  // Filter states
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 250000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState("featured");
  
  // Available categories for filters
  const categories = [
    { id: "electronics", name: "Electronics" },
    { id: "fashion", name: "Fashion" },
    { id: "home-living", name: "Home & Living" },
    { id: "beauty", name: "Beauty" }
  ];
  
  // Available subcategories for filters
  const subcategories = [
    { id: "smartphones", name: "Smartphones", parentId: "electronics" },
    { id: "laptops", name: "Laptops", parentId: "electronics" },
    { id: "audio", name: "Audio & Headphones", parentId: "electronics" },
    { id: "wearables", name: "Wearables", parentId: "electronics" },
    { id: "men", name: "Men's Fashion", parentId: "fashion" },
    { id: "women", name: "Women's Fashion", parentId: "fashion" },
    { id: "accessories", name: "Accessories", parentId: "fashion" },
    { id: "furniture", name: "Furniture", parentId: "home-living" },
    { id: "kitchen", name: "Kitchen", parentId: "home-living" },
    { id: "lighting", name: "Lighting", parentId: "home-living" },
    { id: "skincare", name: "Skincare", parentId: "beauty" },
    { id: "makeup", name: "Makeup", parentId: "beauty" }
  ];
  
  // Initialize products based on category or search
  useEffect(() => {
    let initialProducts: Product[];
    
    if (searchQuery) {
      initialProducts = searchProducts(searchQuery);
    } else if (category) {
      initialProducts = getProductsByCategory(category);
    } else {
      initialProducts = [...products];
    }
    
    if (category && category !== "featured") {
      setSelectedCategories([category]);
    }
    
    setFilteredProducts(initialProducts);
  }, [category, searchQuery, products]);
  
  // Apply filters and sorting
  const applyFilters = () => {
    let result = [...products];
    
    // Filter by category
    if (selectedCategories.length > 0) {
      result = result.filter(product => 
        selectedCategories.includes(product.category) || 
        (product.subcategory && selectedCategories.includes(product.subcategory))
      );
    }
    
    // Filter by price range
    result = result.filter(product => {
      const price = product.discount ? (product.discountPrice || 0) : product.price;
      return price >= priceRange[0] && price <= priceRange[1];
    });
    
    // Apply sorting
    switch (sortOption) {
      case "price-asc":
        result.sort((a, b) => {
          const priceA = a.discount ? (a.discountPrice || a.price) : a.price;
          const priceB = b.discount ? (b.discountPrice || b.price) : b.price;
          return priceA - priceB;
        });
        break;
      case "price-desc":
        result.sort((a, b) => {
          const priceA = a.discount ? (a.discountPrice || a.price) : a.price;
          const priceB = b.discount ? (b.discountPrice || b.price) : b.price;
          return priceB - priceA;
        });
        break;
      case "newest":
        result = result.filter(p => p.isNew).concat(result.filter(p => !p.isNew));
        break;
      case "popular":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "discount":
        result.sort((a, b) => {
          const discountA = a.discount 
            ? ((a.price - (a.discountPrice || 0)) / a.price) 
            : 0;
          const discountB = b.discount 
            ? ((b.price - (b.discountPrice || 0)) / b.price) 
            : 0;
          return discountB - discountA;
        });
        break;
      default: // featured
        // Keep default order
        break;
    }
    
    setFilteredProducts(result);
  };
  
  useEffect(() => {
    applyFilters();
  }, [selectedCategories, priceRange, sortOption]);
  
  // Toggle category selection
  const toggleCategory = (categoryId: string) => {
    setSelectedCategories(prev => 
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };
  
  // Clear all filters
  const clearFilters = () => {
    setPriceRange([0, 250000]);
    setSelectedCategories(category && category !== "featured" ? [category] : []);
    setSortOption("featured");
  };
  
  // Page title
  const getPageTitle = () => {
    if (searchQuery) {
      return `Search Results for "${searchQuery}"`;
    }
    
    if (category) {
      const categoryObj = categories.find(c => c.id === category);
      return categoryObj ? categoryObj.name : "Products";
    }
    
    return "All Products";
  };

  return (
    <div className="container py-8">
      {/* Breadcrumb */}
      <div className="flex items-center text-sm mb-6 text-muted-foreground">
        <Link to="/" className="hover:text-shopBlue">Home</Link>
        <ChevronRight className="h-4 w-4 mx-2" />
        <span className="text-foreground font-medium">{getPageTitle()}</span>
      </div>
      
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">{getPageTitle()}</h1>
        <Button 
          variant="outline" 
          className="flex items-center md:hidden"
          onClick={() => setIsFilterOpen(!isFilterOpen)}
        >
          <Filter className="h-4 w-4 mr-2" />
          Filters
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Filters Sidebar */}
        <aside className={`
          md:block
          ${isFilterOpen ? 'fixed inset-0 z-50 bg-background p-6 md:p-0 md:relative md:inset-auto' : 'hidden'}
        `}>
          <div className="md:hidden flex justify-between items-center mb-4">
            <h2 className="font-bold text-lg">Filters</h2>
            <Button 
              variant="outline" 
              size="icon"
              onClick={() => setIsFilterOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="font-bold flex items-center">
                <SlidersHorizontal className="h-4 w-4 mr-2" /> Filter Products
              </h3>
              <Button variant="ghost" size="sm" onClick={clearFilters}>
                Reset
              </Button>
            </div>
            
            {/* Categories Filter */}
            <div>
              <h4 className="font-medium mb-2 flex items-center">
                <ChevronDown className="h-4 w-4 mr-1" /> Categories
              </h4>
              <div className="space-y-2">
                {categories.map(cat => (
                  <div key={cat.id}>
                    <label className="flex items-center gap-2 cursor-pointer">
                      {selectedCategories.includes(cat.id) ? (
                        <CheckSquare className="h-4 w-4 text-shopBlue" />
                      ) : (
                        <Square className="h-4 w-4" />
                      )}
                      <span onClick={() => toggleCategory(cat.id)}>
                        {cat.name}
                      </span>
                    </label>
                    
                    {/* Subcategories */}
                    {selectedCategories.includes(cat.id) && (
                      <div className="ml-6 mt-1 space-y-2">
                        {subcategories
                          .filter(sub => sub.parentId === cat.id)
                          .map(sub => (
                            <label key={sub.id} className="flex items-center gap-2 cursor-pointer">
                              {selectedCategories.includes(sub.id) ? (
                                <CheckSquare className="h-4 w-4 text-shopBlue" />
                              ) : (
                                <Square className="h-4 w-4" />
                              )}
                              <span onClick={() => toggleCategory(sub.id)}>
                                {sub.name}
                              </span>
                            </label>
                          ))
                        }
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            <Separator />
            
            {/* Price Range Filter */}
            <div>
              <h4 className="font-medium mb-4 flex items-center">
                <ChevronDown className="h-4 w-4 mr-1" /> Price Range
              </h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>৳{priceRange[0].toLocaleString()}</span>
                  <span>৳{priceRange[1].toLocaleString()}</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <input 
                    type="range" 
                    min="0" 
                    max="250000" 
                    step="5000" 
                    value={priceRange[0]} 
                    onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                    className="w-full"
                  />
                </div>
                
                <div className="flex items-center gap-2">
                  <input 
                    type="range" 
                    min="0" 
                    max="250000" 
                    step="5000" 
                    value={priceRange[1]} 
                    onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                    className="w-full"
                  />
                </div>
              </div>
            </div>
            
            <Separator />
            
            {/* Mobile Only: Apply Filters Button */}
            <div className="md:hidden">
              <Button 
                className="w-full bg-shopBlue hover:bg-shopBlue-dark"
                onClick={() => setIsFilterOpen(false)}
              >
                Apply Filters
              </Button>
            </div>
          </div>
        </aside>
        
        {/* Products Grid */}
        <div className="md:col-span-3">
          {/* Sort & Filter Bar */}
          <div className="flex justify-between items-center mb-6 pb-4 border-b">
            <div>
              <p className="text-sm text-muted-foreground">
                {filteredProducts.length} products found
              </p>
            </div>
            <div className="flex items-center gap-2">
              <label htmlFor="sort" className="text-sm whitespace-nowrap">Sort by:</label>
              <select 
                id="sort" 
                className="text-sm p-1 border rounded-md"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="newest">Newest First</option>
                <option value="popular">Most Popular</option>
                <option value="discount">Biggest Discount</option>
              </select>
            </div>
          </div>
          
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-bold mb-2">No products found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your filters or search criteria
              </p>
              <Button onClick={clearFilters}>Clear Filters</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
