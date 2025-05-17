
import { useState, useEffect } from "react";
import { products as initialProducts } from "@/data/products";
import { Product } from "@/types/product";

export function useProducts() {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulate API fetch
    setTimeout(() => {
      setProducts(initialProducts);
      setLoading(false);
    }, 300);
  }, []);

  const getProductById = (id: string): Product | undefined => {
    return products.find(product => product.id === id);
  };

  const getProductsByCategory = (category: string): Product[] => {
    return products.filter(product => 
      product.category.toLowerCase() === category.toLowerCase() || 
      product.subcategory?.toLowerCase() === category.toLowerCase()
    );
  };

  const searchProducts = (query: string): Product[] => {
    const searchTerm = query.toLowerCase().trim();
    return products.filter(product => 
      product.name.toLowerCase().includes(searchTerm) || 
      product.description.toLowerCase().includes(searchTerm) ||
      product.category.toLowerCase().includes(searchTerm) ||
      product.subcategory?.toLowerCase().includes(searchTerm)
    );
  };

  return {
    products,
    loading,
    error,
    getProductById,
    getProductsByCategory,
    searchProducts
  };
}
