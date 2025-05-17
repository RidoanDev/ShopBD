
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Trash2, ChevronRight, CloudOff } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { toast } from "@/components/ui/sonner";
import { useState, useEffect } from "react";

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  
  useEffect(() => {
    const handleOnlineStatus = () => setIsOnline(true);
    const handleOfflineStatus = () => setIsOnline(false);

    window.addEventListener('online', handleOnlineStatus);
    window.addEventListener('offline', handleOfflineStatus);

    return () => {
      window.removeEventListener('online', handleOnlineStatus);
      window.removeEventListener('offline', handleOfflineStatus);
    };
  }, []);

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    if (newQuantity > 0) {
      updateQuantity(productId, newQuantity);
    }
  };

  // Function to handle checkout process
  const handleCheckout = () => {
    if (!isOnline) {
      toast("You're currently offline", {
        description: "Your cart will be saved for when you're back online",
        duration: 5000,
      });
      return;
    }

    // Get all product names and join them with commas
    const productNames = cartItems.map(item => `${item.product.name} (x${item.quantity})`).join(", ");
    
    // Copy product names to clipboard
    navigator.clipboard.writeText(productNames).then(() => {
      // Show success message
      toast("Product names copied to clipboard", {
        description: "Please paste this in the Google Form",
        duration: 5000,
      });
      
      // Open Google Form in a new tab
      window.open("https://forms.gle/JcwhDa9mjc71Cznb7", "_blank");
    }).catch(err => {
      console.error("Failed to copy text: ", err);
      toast("Failed to copy product names", {
        description: "Please proceed to checkout and enter product names manually"
      });
      
      // Open form anyway in a new tab
      window.open("https://forms.gle/JcwhDa9mjc71Cznb7", "_blank");
    });
  };

  return (
    <div className="container py-8">
      {/* Offline Banner */}
      {!isOnline && (
        <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-6 rounded-md flex items-center">
          <CloudOff className="h-5 w-5 text-amber-500 mr-2" />
          <div>
            <p className="font-medium text-amber-800">You're offline</p>
            <p className="text-amber-700 text-sm">Your cart is saved and will be available when you reconnect.</p>
          </div>
        </div>
      )}
      
      {/* Breadcrumb */}
      <div className="flex items-center text-sm mb-6 text-muted-foreground">
        <Link to="/" className="hover:text-shopBlue">Home</Link>
        <ChevronRight className="h-4 w-4 mx-2" />
        <span className="text-foreground font-medium">Shopping Cart</span>
      </div>
      
      <h1 className="text-3xl font-bold mb-8">Your Shopping Cart</h1>
      
      {cartItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="md:col-span-2">
            <div className="border rounded-lg overflow-hidden">
              <div className="bg-muted p-4 flex items-center">
                <span className="font-medium flex-1">Product</span>
                <span className="font-medium w-24 text-center hidden sm:block">Price</span>
                <span className="font-medium w-32 text-center">Quantity</span>
                <span className="font-medium w-24 text-center hidden sm:block">Subtotal</span>
                <span className="w-10"></span>
              </div>
              
              <div className="divide-y">
                {cartItems.map((item) => {
                  const price = item.product.discount 
                    ? item.product.discountPrice || 0 
                    : item.product.price;
                  const subtotal = price * item.quantity;
                  
                  return (
                    <div key={item.product.id} className="p-4 flex items-center">
                      {/* Product */}
                      <div className="flex flex-1 items-center">
                        <div className="w-16 h-16 border rounded overflow-hidden flex-shrink-0">
                          <img 
                            src={item.product.image} 
                            alt={item.product.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="ml-4">
                          <Link 
                            to={`/product/${item.product.id}`}
                            className="font-medium hover:text-shopBlue line-clamp-2"
                          >
                            {item.product.name}
                          </Link>
                        </div>
                      </div>
                      
                      {/* Price */}
                      <div className="w-24 text-center hidden sm:block">
                        ৳{price.toLocaleString()}
                      </div>
                      
                      {/* Quantity */}
                      <div className="w-32 text-center">
                        <div className="flex border rounded-md justify-center mx-auto">
                          <button
                            className="px-2 py-1 border-r"
                            onClick={() => handleQuantityChange(item.product.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                          >
                            -
                          </button>
                          <span className="px-4 py-1">{item.quantity}</span>
                          <button
                            className="px-2 py-1 border-l"
                            onClick={() => handleQuantityChange(item.product.id, item.quantity + 1)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      
                      {/* Subtotal */}
                      <div className="w-24 text-center font-medium hidden sm:block">
                        ৳{subtotal.toLocaleString()}
                      </div>
                      
                      {/* Remove Button */}
                      <button
                        className="w-10 text-center text-gray-500 hover:text-red-500"
                        onClick={() => removeFromCart(item.product.id)}
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="md:col-span-1">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-4">Order Summary</h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-medium">৳{getCartTotal().toLocaleString()}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="font-medium">Calculated at checkout</span>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex justify-between">
                    <span className="font-medium">Total</span>
                    <span className="font-bold text-lg">৳{getCartTotal().toLocaleString()}</span>
                  </div>
                </div>
              </CardContent>
              
              <CardFooter className="flex flex-col p-6 pt-0 gap-4">
                <Button 
                  className="w-full bg-shopBlue hover:bg-shopBlue-dark"
                  onClick={handleCheckout}
                  disabled={!isOnline}
                >
                  {isOnline ? 'Proceed to Checkout' : 'Checkout (Offline)'}
                </Button>
                
                <Button asChild variant="outline" className="w-full">
                  <Link to="/">Continue Shopping</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      ) : (
        <div className="text-center py-16 border rounded-lg bg-muted/30">
          <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
          <p className="text-muted-foreground mb-8">
            Looks like you haven't added any products to your cart yet.
          </p>
          <Button asChild className="bg-shopBlue hover:bg-shopBlue-dark">
            <Link to="/">Start Shopping</Link>
          </Button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
