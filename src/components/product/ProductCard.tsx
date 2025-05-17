
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/components/ui/use-toast";
import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = () => {
    addToCart(product);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const discountPercentage = product.discount
    ? Math.round(((product.price - product.discountPrice) / product.price) * 100)
    : 0;

  return (
    <div className="product-card group">
      {/* Badge for discounts */}
      {product.discount && (
        <div className="badge badge-discount">-{discountPercentage}%</div>
      )}
      
      {/* Badge for new products */}
      {product.isNew && <div className="badge badge-new">New</div>}
      
      {/* Product Image */}
      <Link to={`/product/${product.id}`}>
        <div className="overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name}
            className="product-image"
          />
        </div>
      </Link>
      
      {/* Product Details */}
      <div className="p-3 space-y-2">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-medium line-clamp-2 hover:text-shopBlue transition-colors">{product.name}</h3>
        </Link>
        
        {/* Ratings */}
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              size={14}
              className={`${
                index < Math.floor(product.rating)
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-gray-300"
              }`}
            />
          ))}
          <span className="text-xs text-muted-foreground ml-1">
            ({product.reviewCount})
          </span>
        </div>
        
        {/* Price */}
        <div className="flex items-baseline gap-2">
          {product.discount ? (
            <>
              <span className="price">৳{product.discountPrice.toLocaleString()}</span>
              <span className="price-old">৳{product.price.toLocaleString()}</span>
            </>
          ) : (
            <span className="price">৳{product.price.toLocaleString()}</span>
          )}
        </div>
        
        {/* Add to Cart Button */}
        <Button 
          onClick={handleAddToCart} 
          className="w-full bg-shopBlue hover:bg-shopBlue-dark"
        >
          <ShoppingCart className="h-4 w-4 mr-2" /> Add to Cart
        </Button>
      </div>
    </div>
  );
}
