
import { Link } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface CategoryTabsProps {
  categories: string[];
  category: string | undefined;
  formatCategoryName: (cat: string) => string;
}

const CategoryTabs = ({ categories, category, formatCategoryName }: CategoryTabsProps) => {
  return (
    <Tabs defaultValue={category || "all"} className="mb-8">
      <TabsList className="mb-6">
        <TabsTrigger 
          value="all" 
          asChild
        >
          <Link to="/categories">All</Link>
        </TabsTrigger>
        {categories.map((cat) => (
          <TabsTrigger 
            key={cat} 
            value={cat} 
            asChild
          >
            <Link to={`/categories/${cat}`}>{formatCategoryName(cat)}</Link>
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
};

export default CategoryTabs;
