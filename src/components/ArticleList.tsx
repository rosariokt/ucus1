
import React, { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import Container from "@/components/Container";
import { useArticles } from "@/hooks/useArticles";
import { 
  ArticleCard, 
  LatestUpdatesWidget, 
  ArticleListHeader,
  ArticleListFooter
} from "@/components/article";

const ArticleList = () => {
  const { posts, isLoading } = useArticles();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // During SSR or initial render, show a simplified version
  if (!isMounted) {
    return (
      <section className="py-12 md:py-16 bg-gradient-to-b from-background to-muted/30">
        <Container>
          <div className="w-full mb-12">
            <div className="space-y-6">
              {[1, 2, 3, 4, 5].map((i) => (
                <Skeleton 
                  key={i}
                  className="h-48 rounded-lg"
                />
              ))}
            </div>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-background to-muted/30">
      <Container>
        <div className="w-full mb-12">
          {/* Latest Updates Section */}
          <LatestUpdatesWidget />

          {/* Header Section */}
          <ArticleListHeader />
          
          {isLoading ? (
            <div className="space-y-6">
              {[1, 2, 3, 4, 5].map((i) => (
                <Skeleton 
                  key={i}
                  className="h-48 rounded-lg"
                />
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {/* First set of articles */}
              {posts.slice(0, 3).map((post, index) => (
                <ArticleCard
                  key={`${post.category}-${post.slug}`}
                  title={post.title}
                  excerpt={post.excerpt}
                  date={post.date}
                  slug={post.slug}
                  category={post.category}
                  author={post.author}
                  index={index}
                />
              ))}
              
              {/* Second set of articles */}
              {posts.slice(3, 7).map((post, index) => (
                <ArticleCard
                  key={`${post.category}-${post.slug}`}
                  title={post.title}
                  excerpt={post.excerpt}
                  date={post.date}
                  slug={post.slug}
                  category={post.category}
                  author={post.author}
                  index={index + 3}
                />
              ))}
              
              {/* Final set of articles */}
              {posts.slice(7, 10).map((post, index) => (
                <ArticleCard
                  key={`${post.category}-${post.slug}`}
                  title={post.title}
                  excerpt={post.excerpt}
                  date={post.date}
                  slug={post.slug}
                  category={post.category}
                  author={post.author}
                  index={index + 7}
                />
              ))}
              
              <ArticleListFooter />
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default ArticleList;
