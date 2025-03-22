
import PostCard from "@/components/PostCard";

interface Post {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
  category: string;
}

interface PostsGridProps {
  posts: Post[];
  isLoading: boolean;
  category?: string;
}

const PostsGrid = ({ posts, isLoading, category }: PostsGridProps) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="animate-pulse p-6 border rounded-xl">
            <div className="h-4 bg-secondary rounded w-1/4 mb-4"></div>
            <div className="h-6 bg-secondary rounded w-3/4 mb-4"></div>
            <div className="space-y-2">
              <div className="h-4 bg-secondary rounded"></div>
              <div className="h-4 bg-secondary rounded"></div>
              <div className="h-4 bg-secondary rounded w-5/6"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-2xl font-display font-semibold mb-2">No posts found</h3>
        <p className="text-muted-foreground">
          {category 
            ? `There are no posts in the ${category} category yet.` 
            : "There are no posts available."}
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <PostCard
          key={`${post.category}-${post.slug}`}
          title={post.title}
          excerpt={post.excerpt}
          date={post.date}
          slug={post.slug}
          category={post.category}
        />
      ))}
    </div>
  );
};

export default PostsGrid;
