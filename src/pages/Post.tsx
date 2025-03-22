
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Container from "@/components/Container";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PageContentWrapper, ReadingProgress } from "@/components/ui";
import { 
  PostHeader,
  PostArticle,
  PostSidebar,
  PostLoading, 
  PostError 
} from "@/components/post";
import { usePostData } from "@/hooks/usePostData";

const Post = () => {
  const { category, slug } = useParams<{ category: string; slug: string }>();
  const { post, isLoading, error } = usePostData(category, slug);
  const [isMounted, setIsMounted] = useState(false);

  // Set isMounted state for client-side only rendering
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  // Set document title for better accessibility
  useEffect(() => {
    if (post) {
      document.title = `${post.title} | Jurnal Harian Regional`;
    }
  }, [post]);

  if (isLoading) {
    return <PostLoading />;
  }

  if (error) {
    return <PostError error={error} />;
  }

  const extractKeywords = () => {
    if (!post) return [];
    
    const combinedText = `${post.title} ${post.content}`;
    const words = combinedText.toLowerCase().match(/\b([a-z]{5,})\b/g) || [];
    return [...new Set(words)].slice(0, 10);
  };

  const keywords = extractKeywords();

  return (
    <PageContentWrapper>
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        {isMounted && <ReadingProgress targetId="article-content" />}
        <main id="main-content" className="flex-1 py-8 lg:py-12" tabIndex={-1}>
          <Container size="default">
            <PostHeader category={category} />
            
            {post && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-8 animate-blur-in">
                  <PostArticle post={post} category={category} keywords={keywords} />
                </div>
                
                <aside className="lg:col-span-4" aria-label="Sidebar content">
                  {isMounted && <PostSidebar post={post} keywords={keywords} category={category} slug={slug} />}
                </aside>
              </div>
            )}
          </Container>
        </main>

        <Footer />
      </div>
    </PageContentWrapper>
  );
};

export default Post;
