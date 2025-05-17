
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t bg-shopGray-light">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Shop Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">ShopBD</h3>
            <p className="text-sm text-muted-foreground">
              Your one-stop shop for quality products at affordable prices in Bangladesh.
            </p>
          </div>

          {/* Shop Categories */}
          <div className="space-y-4">
            <h4 className="font-semibold">Categories</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/category/electronics" className="text-sm hover:text-shopBlue">
                  Electronics
                </Link>
              </li>
              <li>
                <Link to="/category/fashion" className="text-sm hover:text-shopBlue">
                  Fashion
                </Link>
              </li>
              <li>
                <Link to="/category/home-living" className="text-sm hover:text-shopBlue">
                  Home & Living
                </Link>
              </li>
              <li>
                <Link to="/category/beauty" className="text-sm hover:text-shopBlue">
                  Beauty
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h4 className="font-semibold">Customer Service</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-sm hover:text-shopBlue">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sm hover:text-shopBlue">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-sm hover:text-shopBlue">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-sm hover:text-shopBlue">
                  Returns & Exchanges
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Info */}
          <div className="space-y-4">
            <h4 className="font-semibold">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm hover:text-shopBlue">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm hover:text-shopBlue">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm hover:text-shopBlue">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} ShopBD. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">Payment Methods:</span>
            <div className="flex gap-2">
              <div className="bg-white p-1 rounded border">
                <span className="text-xs font-semibold">bKash</span>
              </div>
              <div className="bg-white p-1 rounded border">
                <span className="text-xs font-semibold">Nagad</span>
              </div>
              <div className="bg-white p-1 rounded border">
                <span className="text-xs font-semibold">COD</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
