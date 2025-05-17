
import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "1",
    name: "Samsung Galaxy S22 Ultra",
    description: "Experience the power of Galaxy S22 Ultra with a 6.8-inch Dynamic AMOLED display, powerful Snapdragon processor, 108MP camera, and long-lasting battery life. Includes S Pen support for productivity.",
    price: 145000,
    discount: true,
    discountPrice: 129999,
    category: "electronics",
    subcategory: "smartphones",
    image: "https://images.unsplash.com/photo-1610945264803-c22b62d2a7b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    images: [
      "https://images.unsplash.com/photo-1610945264803-c22b62d2a7b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1227&q=80",
      "https://images.unsplash.com/photo-1553179459-4514c0f52f41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    ],
    rating: 4.8,
    reviewCount: 125,
    inStock: true,
    specifications: {
      "Display": "6.8-inch Dynamic AMOLED, 120Hz",
      "Processor": "Qualcomm Snapdragon 8 Gen 1",
      "RAM": "12GB",
      "Storage": "256GB",
      "Battery": "5,000mAh",
      "Camera": "108MP + 12MP + 10MP + 10MP"
    }
  },
  {
    id: "2",
    name: "MacBook Pro M2 Pro",
    description: "The ultimate pro laptop. Available with the M2 Pro or M2 Max chip for unprecedented performance and battery life.",
    price: 220000,
    category: "electronics",
    subcategory: "laptops",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1626&q=80",
    images: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1626&q=80",
      "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1787&q=80"
    ],
    rating: 4.9,
    reviewCount: 86,
    inStock: true,
    specifications: {
      "Display": "14-inch Liquid Retina XDR display",
      "Processor": "Apple M2 Pro chip",
      "RAM": "16GB",
      "Storage": "512GB SSD",
      "Battery": "Up to 18 hours",
      "Ports": "3x Thunderbolt 4, HDMI, SDXC, MagSafe 3"
    }
  },
  {
    id: "3",
    name: "Men's Casual Shirt - Navy Blue",
    description: "A comfortable and stylish cotton casual shirt perfect for any occasion. Features a modern slim fit design.",
    price: 2500,
    discount: true,
    discountPrice: 1899,
    category: "fashion",
    subcategory: "men",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    images: [
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
      "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
    ],
    rating: 4.5,
    reviewCount: 42,
    inStock: true,
    specifications: {
      "Material": "100% Cotton",
      "Fit": "Slim fit",
      "Sleeve": "Full sleeve",
      "Collar": "Button-down",
      "Care": "Machine wash cold"
    }
  },
  {
    id: "4",
    name: "Women's Summer Dress - Floral",
    description: "Light and flowy summer dress with beautiful floral pattern. Perfect for beach vacations and casual outings.",
    price: 3200,
    category: "fashion",
    subcategory: "women",
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
    images: [
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
      "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=686&q=80",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80"
    ],
    rating: 4.7,
    reviewCount: 63,
    inStock: true,
    isNew: true,
    specifications: {
      "Material": "Polyester blend",
      "Length": "Midi",
      "Pattern": "Floral",
      "Neckline": "V-neck",
      "Care": "Hand wash cold"
    }
  },
  {
    id: "5",
    name: "Modern Coffee Table",
    description: "Stylish and minimalist coffee table with wooden top and metal legs. Perfect centerpiece for your living room.",
    price: 12000,
    discount: true,
    discountPrice: 9999,
    category: "home-living",
    subcategory: "furniture",
    image: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80",
    images: [
      "https://images.unsplash.com/photo-1532372320572-cda25653a26d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80",
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80",
      "https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1206&q=80"
    ],
    rating: 4.6,
    reviewCount: 28,
    inStock: true,
    specifications: {
      "Material": "Solid wood and metal",
      "Dimensions": "120 x 60 x 45 cm",
      "Weight": "15 kg",
      "Assembly": "Required (tools included)",
      "Weight Capacity": "50 kg"
    }
  },
  {
    id: "6",
    name: "Premium Skincare Set",
    description: "Complete skincare regimen with cleanser, toner, serum, and moisturizer. Made with natural ingredients for all skin types.",
    price: 4500,
    category: "beauty",
    subcategory: "skincare",
    image: "https://images.unsplash.com/photo-1556228578-8d89a00abb4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    images: [
      "https://images.unsplash.com/photo-1556228578-8d89a00abb4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1570194065650-d99fb4a8e9ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    ],
    rating: 4.9,
    reviewCount: 75,
    inStock: true,
    isNew: true,
    specifications: {
      "Skin Type": "All skin types",
      "Volume": "50ml each",
      "Ingredients": "Natural extracts, hyaluronic acid, vitamin C",
      "Benefits": "Hydrates, brightens, and rejuvenates skin",
      "Free from": "Parabens, sulfates, and artificial fragrances"
    }
  },
  {
    id: "7",
    name: "Wireless Noise Cancelling Headphones",
    description: "Premium headphones with active noise cancellation, 30-hour battery life, and crystal clear sound quality.",
    price: 18000,
    discount: true,
    discountPrice: 15499,
    category: "electronics",
    subcategory: "audio",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1165&q=80",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=684&q=80"
    ],
    rating: 4.7,
    reviewCount: 92,
    inStock: true,
    specifications: {
      "Type": "Over-ear",
      "Connectivity": "Bluetooth 5.0",
      "Battery Life": "30 hours",
      "Noise Cancellation": "Active",
      "Charging": "USB-C",
      "Weight": "250g"
    }
  },
  {
    id: "8",
    name: "Smart Watch - Fitness Tracker",
    description: "Track your health and fitness with this smart watch featuring heart rate monitor, sleep tracking, and various workout modes.",
    price: 9999,
    category: "electronics",
    subcategory: "wearables",
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
    images: [
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=627&q=80",
      "https://images.unsplash.com/photo-1617043786394-f977fa12eddf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    ],
    rating: 4.5,
    reviewCount: 58,
    inStock: true,
    isNew: true,
    specifications: {
      "Display": "1.3-inch AMOLED",
      "Battery Life": "Up to 14 days",
      "Water Resistance": "5 ATM",
      "Sensors": "Heart rate, accelerometer, gyroscope",
      "Connectivity": "Bluetooth 5.0, GPS",
      "Compatibility": "Android and iOS"
    }
  },
  {
    id: "9",
    name: "Premium Leather Wallet",
    description: "Handcrafted genuine leather wallet with multiple card slots and RFID protection. Perfect gift for any occasion.",
    price: 2200,
    discount: true,
    discountPrice: 1899,
    category: "fashion",
    subcategory: "accessories",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    images: [
      "https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
      "https://images.unsplash.com/photo-1606503825008-909a67e63c3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1620758980354-88910147684b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
    ],
    rating: 4.8,
    reviewCount: 37,
    inStock: true,
    specifications: {
      "Material": "Genuine leather",
      "Dimensions": "11.5 x 9.5 cm",
      "Card slots": "8",
      "Features": "RFID protection, bill compartment",
      "Color": "Brown"
    }
  },
  {
    id: "10",
    name: "Stainless Steel Water Bottle",
    description: "Eco-friendly double-walled insulated water bottle that keeps your drinks hot for 12 hours and cold for 24 hours.",
    price: 1800,
    category: "home-living",
    subcategory: "kitchen",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    images: [
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      "https://images.unsplash.com/photo-1589365278144-c9e705f843ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1167&q=80",
      "https://images.unsplash.com/photo-1575377569702-859196b6c883?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    ],
    rating: 4.6,
    reviewCount: 45,
    inStock: true,
    specifications: {
      "Material": "18/8 stainless steel",
      "Capacity": "750ml",
      "Insulation": "Double-wall vacuum",
      "Temperature Retention": "Hot 12 hours, Cold 24 hours",
      "Features": "Leak-proof, BPA-free",
      "Color": "Matte black"
    }
  },
  {
    id: "11",
    name: "Organic Face Mask Set",
    description: "Set of 5 organic face masks for different skin concerns. Made with natural ingredients to hydrate, brighten, and purify skin.",
    price: 3500,
    discount: true,
    discountPrice: 2999,
    category: "beauty",
    subcategory: "skincare",
    image: "https://images.unsplash.com/photo-1596001496559-7364b67e31ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=684&q=80",
    images: [
      "https://images.unsplash.com/photo-1596001496559-7364b67e31ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=684&q=80",
      "https://images.unsplash.com/photo-1567721913486-6585f069b332?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
      "https://images.unsplash.com/photo-1571781565036-d3f759314bab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
    ],
    rating: 4.7,
    reviewCount: 52,
    inStock: true,
    specifications: {
      "Quantity": "5 masks",
      "Weight": "25ml each",
      "Types": "Hydrating, Brightening, Purifying, Anti-aging, Soothing",
      "Skin Type": "All skin types",
      "Key Ingredients": "Aloe vera, green tea, vitamins, hyaluronic acid"
    }
  },
  {
    id: "12",
    name: "Elegant Table Lamp",
    description: "Modern ceramic table lamp with fabric shade. Perfect for bedside tables, living rooms, or office spaces.",
    price: 3800,
    category: "home-living",
    subcategory: "lighting",
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    images: [
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1540932239986-30128078f3c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    ],
    rating: 4.5,
    reviewCount: 31,
    inStock: true,
    isNew: true,
    specifications: {
      "Material": "Ceramic base, fabric shade",
      "Height": "45 cm",
      "Diameter": "25 cm",
      "Bulb Type": "E27, max 60W",
      "Cable Length": "1.5 meters",
      "Switch Type": "In-line switch"
    }
  }
];
