
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Users, ExternalLink } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface PostAuthorsProps {
  author: string;
}

const PostAuthors = ({ author }: PostAuthorsProps) => {
  // Split multiple authors by comma
  const authors = author.split(',').map(name => name.trim());
  
  // Generate author initials for avatar
  const getAuthorInitials = (name: string): string => {
    return name
      .split(' ')
      .map(part => part[0])
      .slice(0, 2)
      .join('')
      .toUpperCase();
  };

  // Generate dummy profile data for demo purposes
  const generateAuthorRole = (name: string): string => {
    const roles = ['Professor', 'Researcher', 'PhD Candidate', 'Associate Professor', 'Lecturer'];
    // Use the author name to generate a consistent role for demo
    const roleIndex = name.length % roles.length;
    return roles[roleIndex];
  };

  return (
    <Card className="mt-12 mb-6 border-primary/10 transition-all duration-300 hover:border-primary/20">
      <CardHeader className="pb-2">
        <h3 className="text-lg font-medium flex items-center">
          <Users className="h-5 w-5 mr-2 text-primary/70" />
          {authors.length > 1 ? 'Authors' : 'Author'}
        </h3>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {authors.map((name, index) => (
            <div key={index} className="flex items-start space-x-4">
              <Avatar className="h-12 w-12 border-2 border-background shadow-sm">
                <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${name}`} alt={name} />
                <AvatarFallback className="bg-primary/10 text-primary text-xs font-medium">
                  {getAuthorInitials(name)}
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="text-base font-medium">{name}</h4>
                  <a href="#" className="text-xs text-primary flex items-center hover:underline">
                    <span>View profile</span>
                    <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </div>
                <p className="text-sm text-muted-foreground">{generateAuthorRole(name)}</p>
                <p className="text-sm mt-1">
                  {/* Generate random author bio based on name for demo */}
                  {name.length > 15 
                    ? 'Specializes in advanced research and has published numerous papers in peer-reviewed journals.'
                    : 'Focuses on applying theoretical frameworks to practical applications in the field.'}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default PostAuthors;
