
import Container from "@/components/Container";
import Header from "@/components/Header";

const PostLoading = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12">
        <Container size="small">
          <div className="animate-pulse space-y-6">
            <div className="h-8 w-3/4 bg-secondary rounded"></div>
            <div className="h-6 w-1/4 bg-secondary rounded"></div>
            <div className="space-y-3">
              <div className="h-4 bg-secondary rounded"></div>
              <div className="h-4 bg-secondary rounded"></div>
              <div className="h-4 bg-secondary rounded"></div>
              <div className="h-4 w-4/5 bg-secondary rounded"></div>
            </div>
          </div>
        </Container>
      </main>
    </div>
  );
};

export default PostLoading;
