
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, CreditCard, Smartphone } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/components/ui/use-toast";
import { useCart } from "@/context/CartContext";

const CheckoutPage = () => {
  const { cartItems, getCartTotal, clearCart } = useCart();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    paymentMethod: "bkash",
    notes: ""
  });
  
  const [formStep, setFormStep] = useState(1);
  
  if (cartItems.length === 0) {
    return (
      <div className="container py-8">
        <div className="text-center py-16 border rounded-lg bg-muted/30">
          <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
          <p className="text-muted-foreground mb-8">
            You need to add items to your cart before checking out.
          </p>
          <Button asChild className="bg-shopBlue hover:bg-shopBlue-dark">
            <Link to="/">Start Shopping</Link>
          </Button>
        </div>
      </div>
    );
  }
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleRadioChange = (value: string) => {
    setFormData(prev => ({ ...prev, paymentMethod: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real application, this would submit to a Google Form or another backend
    // For demo purposes, we'll just show a success message
    
    toast({
      title: "Order Placed Successfully!",
      description: "Your order has been received and is being processed.",
    });
    
    // Clear cart and redirect to home page
    clearCart();
    
    // In a real application, you would redirect to a success page
    window.location.href = "/";
  };
  
  const continueToPayment = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.address || !formData.city) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }
    
    setFormStep(2);
  };
  
  const backToShipping = () => {
    setFormStep(1);
  };

  return (
    <div className="container py-8">
      {/* Breadcrumb */}
      <div className="flex items-center text-sm mb-6 text-muted-foreground">
        <Link to="/" className="hover:text-shopBlue">Home</Link>
        <ChevronRight className="h-4 w-4 mx-2" />
        <Link to="/cart" className="hover:text-shopBlue">Cart</Link>
        <ChevronRight className="h-4 w-4 mx-2" />
        <span className="text-foreground font-medium">Checkout</span>
      </div>
      
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Checkout Form */}
        <div className="md:col-span-2">
          <div className="border rounded-lg overflow-hidden">
            {/* Progress Steps */}
            <div className="bg-muted p-4 flex">
              <div className="flex items-center flex-1">
                <div className={`h-8 w-8 rounded-full flex items-center justify-center ${
                  formStep === 1 ? "bg-shopBlue text-white" : "bg-gray-300"
                }`}>
                  1
                </div>
                <span className="ml-2 font-medium">Shipping</span>
              </div>
              <div className="border-t border-gray-300 flex-1 self-center"></div>
              <div className="flex items-center flex-1">
                <div className={`h-8 w-8 rounded-full flex items-center justify-center ${
                  formStep === 2 ? "bg-shopBlue text-white" : "bg-gray-300"
                }`}>
                  2
                </div>
                <span className="ml-2 font-medium">Payment</span>
              </div>
            </div>
            
            {/* Form Content */}
            <div className="p-6">
              {formStep === 1 ? (
                <form onSubmit={continueToPayment}>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Name */}
                      <div>
                        <Label htmlFor="name">Full Name*</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      
                      {/* Email */}
                      <div>
                        <Label htmlFor="email">Email Address*</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your.email@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    
                    {/* Phone */}
                    <div>
                      <Label htmlFor="phone">Phone Number*</Label>
                      <Input
                        id="phone"
                        name="phone"
                        placeholder="Your phone number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    {/* Address */}
                    <div>
                      <Label htmlFor="address">Delivery Address*</Label>
                      <Textarea
                        id="address"
                        name="address"
                        placeholder="Enter your full delivery address"
                        rows={3}
                        value={formData.address}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    {/* City */}
                    <div>
                      <Label htmlFor="city">City*</Label>
                      <Input
                        id="city"
                        name="city"
                        placeholder="Your city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    {/* Notes */}
                    <div>
                      <Label htmlFor="notes">Order Notes (Optional)</Label>
                      <Textarea
                        id="notes"
                        name="notes"
                        placeholder="Special notes for delivery or the order"
                        rows={2}
                        value={formData.notes}
                        onChange={handleChange}
                      />
                    </div>
                    
                    <Button 
                      type="submit"
                      className="w-full bg-shopBlue hover:bg-shopBlue-dark"
                    >
                      Continue to Payment
                    </Button>
                  </div>
                </form>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    <h3 className="text-lg font-bold">Payment Method</h3>
                    
                    <RadioGroup 
                      value={formData.paymentMethod} 
                      onValueChange={handleRadioChange}
                      className="space-y-4"
                    >
                      <div className="flex items-center space-x-3 border p-4 rounded-lg">
                        <RadioGroupItem value="bkash" id="bkash" />
                        <Label htmlFor="bkash" className="flex items-center gap-2 cursor-pointer">
                          <Smartphone className="h-5 w-5 text-pink-600" />
                          bKash
                        </Label>
                      </div>
                      
                      <div className="flex items-center space-x-3 border p-4 rounded-lg">
                        <RadioGroupItem value="nagad" id="nagad" />
                        <Label htmlFor="nagad" className="flex items-center gap-2 cursor-pointer">
                          <Smartphone className="h-5 w-5 text-orange-500" />
                          Nagad
                        </Label>
                      </div>
                      
                      <div className="flex items-center space-x-3 border p-4 rounded-lg">
                        <RadioGroupItem value="cod" id="cod" />
                        <Label htmlFor="cod" className="flex items-center gap-2 cursor-pointer">
                          <CreditCard className="h-5 w-5 text-gray-600" />
                          Cash on Delivery
                        </Label>
                      </div>
                    </RadioGroup>
                    
                    <div className="text-sm text-muted-foreground">
                      <p>
                        For mobile payments (bKash/Nagad), after you place the order, you will 
                        receive payment instructions via email or SMS to complete your transaction.
                      </p>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button 
                        type="button" 
                        variant="outline" 
                        className="flex-1"
                        onClick={backToShipping}
                      >
                        Back to Shipping
                      </Button>
                      
                      <Button 
                        type="submit"
                        className="flex-1 bg-shopBlue hover:bg-shopBlue-dark"
                      >
                        Place Order
                      </Button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
        
        {/* Order Summary */}
        <div>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-4">Order Summary</h3>
              
              <div className="space-y-4">
                {/* Order Items */}
                <div className="space-y-3">
                  {cartItems.map((item) => {
                    const price = item.product.discount 
                      ? item.product.discountPrice || 0 
                      : item.product.price;
                      
                    return (
                      <div key={item.product.id} className="flex justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-10 h-10 border rounded overflow-hidden flex-shrink-0">
                            <img 
                              src={item.product.image} 
                              alt={item.product.name} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <span className="text-sm line-clamp-1">{item.product.name}</span>
                          <span className="text-sm text-muted-foreground">x{item.quantity}</span>
                        </div>
                        <span className="text-sm font-medium">৳{(price * item.quantity).toLocaleString()}</span>
                      </div>
                    );
                  })}
                </div>
                
                <Separator />
                
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-medium">৳{getCartTotal().toLocaleString()}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="font-medium">৳120</span>
                </div>
                
                <Separator />
                
                <div className="flex justify-between">
                  <span className="font-medium">Total</span>
                  <span className="font-bold text-lg">৳{(getCartTotal() + 120).toLocaleString()}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
