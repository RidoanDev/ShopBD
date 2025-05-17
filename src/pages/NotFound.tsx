import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const NotFound = () => {
  return (
    <div className="container py-16">
      {/* Breadcrumb */}
      <div className="flex items-center text-sm mb-6 text-muted-foreground">
        <Link to="/" className="hover:text-shopBlue">Home</Link>
        <ChevronRight className="h-4 w-4 mx-2" />
        <span className="text-foreground font-medium">Page Not Found</span>
      </div>

      <div className="max-w-2xl mx-auto text-center py-16">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>
        <div className="space-x-4">
          <Button 
            asChild
            className="bg-shopBlue hover:bg-shopBlue-dark"
          >
            <Link to="/">Return to Home</Link>
          </Button>
          <Button 
            asChild
            variant="outline"
          >
            <Link to="/category">Browse Products</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;