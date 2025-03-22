
import Container from "@/components/Container";

const CategoryFooter = () => {
  return (
    <footer className="border-t py-8 mt-16">
      <Container>
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Minimal Blog. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default CategoryFooter;
