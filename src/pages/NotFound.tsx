
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Container, Header, PageTransition } from "@/components";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <Container size="small" className="text-center py-16">
            <AlertTriangle className="h-16 w-16 text-amber-500 mx-auto mb-4" />
            <h1 className="text-5xl font-bold mb-4">404</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Oops! The page you're looking for doesn't exist.
            </p>
            <Button asChild>
              <Link to="/">Return to Home</Link>
            </Button>
          </Container>
        </main>
      </div>
    </PageTransition>
  );
};

export default NotFound;
