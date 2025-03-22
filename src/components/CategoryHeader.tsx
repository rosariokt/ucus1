
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface CategoryHeaderProps {
  category: string | undefined;
  formatCategoryName: (cat: string) => string;
}

const CategoryHeader = ({ category, formatCategoryName }: CategoryHeaderProps) => {
  return (
    <>
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link to="/" className="text-sm font-medium hover:underline">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          {category ? (
            <BreadcrumbItem>
              <BreadcrumbPage>{formatCategoryName(category)}</BreadcrumbPage>
            </BreadcrumbItem>
          ) : (
            <BreadcrumbItem>
              <BreadcrumbPage>All Categories</BreadcrumbPage>
            </BreadcrumbItem>
          )}
        </BreadcrumbList>
      </Breadcrumb>

      <div className="mb-10">
        <h1 className="text-4xl font-display font-bold tracking-tight mb-4">
          {category ? `${formatCategoryName(category)} Posts` : "All Posts"}
        </h1>
        <p className="text-muted-foreground text-lg">
          {category 
            ? `Browse our collection of articles about ${category}.` 
            : "Browse all of our articles across different categories."}
        </p>
      </div>
    </>
  );
};

export default CategoryHeader;
