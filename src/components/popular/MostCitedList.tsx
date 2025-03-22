
import React from "react";
import { BookOpen } from "lucide-react";
import { PostCardPopular } from "@/components/popular";

interface MostCitedListProps {
  posts: any[];
  isLoading: boolean;
}

const MostCitedList = ({ posts, isLoading }: MostCitedListProps) => {
  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-serif font-medium flex items-center">
            <BookOpen className="h-6 w-6 mr-2 text-primary" />
            Most-Cited Publications
          </h2>
          <p className="text-muted-foreground mt-1">
            Academic articles with the highest citation counts
          </p>
        </div>
      </div>

      {isLoading ? (
        <div className="space-y-6">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="animate-pulse h-32 rounded-lg bg-secondary"></div>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {posts
            .sort((a, b) => (b.citations || 0) - (a.citations || 0))
            .slice(0, 10)
            .map((post, index) => (
              <PostCardPopular
                key={`${post.category}-${post.slug}`}
                post={post}
                index={index}
                isCitation={true}
              />
            ))}
        </div>
      )}
    </>
  );
};

export default MostCitedList;
