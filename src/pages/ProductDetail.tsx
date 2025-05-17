
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ShoppingCart, 
  Star, 
  Truck, 
  Package, 
  CreditCard,
  CheckCircle,
  ChevronRight
} from "lucide-react";
import { useProducts } from "@/hooks/useProducts";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/components/ui/use-toast";
import { Badge } from "@/components/ui/badge";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { getProductById } = useProducts();
  const { addToCart } = useCart();
  const { toast } = useToast();
  
  const product = getProductById(id || "");
  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  
  if (!product) {
    return (
      <div className="container py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
        <p className="mb-8">Sorry, the product you are looking for does not exist.</p>
        <Button asChild>
          <Link to="/">Return to Home</Link>
        </Button>
      </div>
    );
  }
  
  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };
  
  const discountPercentage = product.discount
    ? Math.round(((product.price - (product.discountPrice || 0)) / product.price) * 100)
    : 0;

  return (
    <div className="container py-8">
      {/* Breadcrumb */}
      <div className="flex items-center text-sm mb-6 text-muted-foreground">
        <Link to="/" className="hover:text-shopBlue">Home</Link>
        <ChevronRight className="h-4 w-4 mx-2" />
        <Link to={`/category/${product.category}`} className="hover:text-shopBlue capitalize">
          {product.category}
        </Link>
        <ChevronRight className="h-4 w-4 mx-2" />
        <span className="text-foreground font-medium truncate">{product.name}</span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-square overflow-hidden rounded-lg border bg-white">
            <img 
              src={product.images[activeImageIndex]} 
              alt={product.name}
              className="w-full h-full object-contain p-4"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {product.images.map((image, index) => (
              <button 
                key={index}
                className={`border rounded-md overflow-hidden flex-shrink-0 w-20 h-20 ${
                  activeImageIndex === index ? 'border-shopBlue' : 'border-gray-200'
                }`}
                onClick={() => setActiveImageIndex(index)}
              >
                <img 
                  src={image} 
                  alt={`${product.name} - View ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
        
        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            
            {/* Ratings */}
            <div className="flex items-center mt-2">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    className={`h-5 w-5 ${
                      index < Math.floor(product.rating) 
                        ? "fill-yellow-400 text-yellow-400" 
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="ml-2 text-sm text-muted-foreground">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>
          </div>
          
          {/* Price */}
          <div className="space-y-1">
            {product.discount ? (
              <>
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-bold text-shopBlue-dark">
                    ৳{product.discountPrice?.toLocaleString()}
                  </span>
                  <Badge className="bg-red-500">{discountPercentage}% OFF</Badge>
                </div>
                <div className="text-muted-foreground">
                  <span className="line-through">৳{product.price.toLocaleString()}</span>
                  <span className="text-red-500 ml-2">
                    Save ৳{(product.price - (product.discountPrice || 0)).toLocaleString()}
                  </span>
                </div>
              </>
            ) : (
              <span className="text-3xl font-bold text-shopBlue-dark">
                ৳{product.price.toLocaleString()}
              </span>
            )}
            
            <div className="text-sm text-green-600 flex items-center">
              <CheckCircle className="h-4 w-4 mr-1" />
              In Stock
            </div>
          </div>
          
          {/* Description */}
          <p className="text-gray-600">{product.description}</p>
          
          {/* Quantity & Add to Cart */}
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <span className="font-medium">Quantity:</span>
              <div className="flex border rounded-md">
                <button
                  className="px-3 py-1 border-r"
                  onClick={() => setQuantity(prev => Math.max(prev - 1, 1))}
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <span className="px-4 py-1">{quantity}</span>
                <button
                  className="px-3 py-1 border-l"
                  onClick={() => setQuantity(prev => prev + 1)}
                >
                  +
                </button>
              </div>
            </div>
            
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-shopBlue hover:bg-shopBlue-dark"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>
          </div>
          
          {/* Shipping & Payment Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t">
            <div className="flex items-start space-x-2">
              <Truck className="h-5 w-5 text-shopBlue mt-0.5" />
              <div>
                <p className="font-medium">Free Shipping</p>
                <p className="text-sm text-muted-foreground">Nationwide delivery</p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <Package className="h-5 w-5 text-shopBlue mt-0.5" />
              <div>
                <p className="font-medium">Returns</p>
                <p className="text-sm text-muted-foreground">7 days return policy</p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <CreditCard className="h-5 w-5 text-shopBlue mt-0.5" />
              <div>
                <p className="font-medium">Secure Payment</p>
                <p className="text-sm text-muted-foreground">Multiple payment options</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Product Tabs */}
      <div className="mt-12 border-t pt-8">
        <Tabs defaultValue="details">
          <TabsList className="w-full sm:w-auto mb-8 grid grid-cols-3 sm:flex">
            <TabsTrigger value="details">Product Details</TabsTrigger>
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="reviews">Reviews ({product.reviewCount})</TabsTrigger>
          </TabsList>
          
          <TabsContent value="details" className="space-y-4">
            <h3 className="text-xl font-bold">Product Description</h3>
            <p>{product.description}</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget ultricies ultrices, nunc nisl aliquam nunc, vitae tincidunt nisl nunc eget nisl. Nullam euismod, nisl eget ultricies ultrices, nunc nisl aliquam nunc, vitae tincidunt nisl nunc eget nisl.
            </p>
            <p>
              Nulla facilisi. Sed in mauris eget lectus bibendum luctus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse potenti. Nulla facilisi. Sed in mauris eget lectus bibendum luctus.
            </p>
          </TabsContent>
          
          <TabsContent value="specifications">
            <h3 className="text-xl font-bold mb-4">Technical Specifications</h3>
            <div className="border rounded-lg overflow-hidden">
              <table className="w-full">
                <tbody>
                  {product.specifications && Object.entries(product.specifications).map(([key, value]) => (
                    <tr key={key} className="border-b last:border-b-0">
                      <td className="font-medium p-3 bg-gray-50 w-1/3">{key}</td>
                      <td className="p-3">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </TabsContent>
          
          <TabsContent value="reviews">
            <h3 className="text-xl font-bold mb-4">Customer Reviews</h3>
            <div className="space-y-6">
              {Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="border-b pb-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Customer {index + 1}</p>
                      <div className="flex mt-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < 5 - index % 2 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {new Date(2023, 5 - index, 15 - index).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget ultricies ultrices, nunc nisl aliquam nunc, vitae tincidunt nisl nunc eget nisl.
                  </p>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ProductDetail;
