
import { useNavigate } from "react-router-dom";
import Container from "@/components/Container";
import Header from "@/components/Header";

interface PostErrorProps {
  error: string;
}

const PostError = ({ error }: PostErrorProps) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12">
        <Container size="small">
          <div className="text-center space-y-6">
            <h1 className="text-3xl font-display font-bold">Post Not Found</h1>
            <p className="text-muted-foreground">{error}</p>
            <button
              onClick={() => navigate("/")}
              className="inline-flex items-center px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Back to Home
            </button>
          </div>
        </Container>
      </main>
    </div>
  );
};

export default PostError;
