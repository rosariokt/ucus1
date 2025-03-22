
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MostReadList } from "@/components/popular";
import { MostCitedList } from "@/components/popular";

interface PopularTabsProps {
  posts: any[];
  isLoading: boolean;
}

const PopularTabs = ({ posts, isLoading }: PopularTabsProps) => {
  return (
    <Tabs defaultValue="most-read" className="w-full">
      <TabsList className="w-full max-w-md mx-auto grid grid-cols-2 mb-8">
        <TabsTrigger value="most-read">Most Read</TabsTrigger>
        <TabsTrigger value="most-cited">Most Cited</TabsTrigger>
      </TabsList>

      <TabsContent value="most-read" className="space-y-8">
        <MostReadList posts={posts} isLoading={isLoading} />
      </TabsContent>
      
      <TabsContent value="most-cited" className="space-y-8">
        <MostCitedList posts={posts} isLoading={isLoading} />
      </TabsContent>
    </Tabs>
  );
};

export default PopularTabs;
