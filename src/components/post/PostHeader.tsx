
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface PostHeaderProps {
  category?: string;
}

const PostHeader = ({ category }: PostHeaderProps) => {
  const formatCategoryName = (cat?: string) => {
    return cat ? cat.charAt(0).toUpperCase() + cat.slice(1) : "";
  };

  return (
    <div className="mb-6 animate-slide-down">
      <div className="flex items-center justify-between">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            {category && (
              <BreadcrumbItem>
                <BreadcrumbPage>{formatCategoryName(category)}</BreadcrumbPage>
              </BreadcrumbItem>
            )}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  );
};

export default PostHeader;
