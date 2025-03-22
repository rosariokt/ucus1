
import React from "react";
import { Header, Footer } from "@/components";
import { Container } from "@/components";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, ArrowLeft, Check, FileText, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const CitationGuidelines = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        <div className="bg-primary/10 py-10">
          <Container>
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="bg-primary/20 p-3 rounded-full mb-2">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-3xl md:text-4xl font-serif font-medium">Citation Guidelines</h1>
              <p className="text-muted-foreground max-w-2xl text-lg">
                Comprehensive guides to various citation styles for academic integrity and proper attribution.
              </p>
              <div className="pt-4">
                <Button variant="outline" size="sm" asChild className="gap-2">
                  <Link to="/academic-resources">
                    <ArrowLeft className="h-4 w-4" />
                    Back to Academic Resources
                  </Link>
                </Button>
              </div>
            </div>
          </Container>
        </div>

        <Container className="py-12">
          <Tabs defaultValue="apa" className="w-full">
            <TabsList className="w-full max-w-2xl mx-auto grid grid-cols-2 md:grid-cols-5 mb-8">
              <TabsTrigger value="apa">APA</TabsTrigger>
              <TabsTrigger value="mla">MLA</TabsTrigger>
              <TabsTrigger value="chicago">Chicago</TabsTrigger>
              <TabsTrigger value="harvard">Harvard</TabsTrigger>
              <TabsTrigger value="ieee">IEEE</TabsTrigger>
            </TabsList>

            <TabsContent value="apa" className="space-y-6">
              <div className="prose prose-blue dark:prose-invert max-w-none">
                <h2 className="font-serif text-2xl">APA (American Psychological Association) Style - 7th Edition</h2>
                <p>
                  APA Style is commonly used in the social sciences, education, and business. The current version is the 7th edition, published in 2019.
                </p>
                
                <h3 className="font-serif">Basic Format for Books</h3>
                <div className="bg-muted/50 p-4 rounded-md my-4 font-mono text-sm">
                  Author, A. A. (Year of publication). <em>Title of work: Capital letter also for subtitle</em>. Publisher.
                </div>
                
                <h3 className="font-serif">Basic Format for Journal Articles</h3>
                <div className="bg-muted/50 p-4 rounded-md my-4 font-mono text-sm">
                  Author, A. A., & Author, B. B. (Year). Title of article. <em>Title of Periodical</em>, volume(issue), pages. https://doi.org/xxxx
                </div>

                <h3 className="font-serif">Basic Format for Websites</h3>
                <div className="bg-muted/50 p-4 rounded-md my-4 font-mono text-sm">
                  Author, A. A., & Author, B. B. (Year, Month Day). Title of page. Site name. URL
                </div>

                <h3 className="font-serif">In-text Citations</h3>
                <p>APA Style uses the author-date method of citation:</p>
                <ul>
                  <li>One author: (Johnson, 2020)</li>
                  <li>Two authors: (Johnson & Smith, 2020)</li>
                  <li>Three or more authors: (Johnson et al., 2020)</li>
                  <li>Direct quote: (Johnson, 2020, p. 189)</li>
                </ul>
              </div>

              <div className="mt-10 bg-muted/30 rounded-lg p-6">
                <h3 className="text-lg font-medium font-serif mb-4 flex items-center">
                  <FileText className="h-5 w-5 mr-2 text-primary" />
                  Key Elements of APA Citations
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-2">Do Include:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-green-600 shrink-0 mt-0.5" />
                        <span>DOI (Digital Object Identifier) when available</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-green-600 shrink-0 mt-0.5" />
                        <span>Publisher location for books published before 2020</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-green-600 shrink-0 mt-0.5" />
                        <span>Issue numbers for all journals</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Don't Include:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <AlertCircle className="h-5 w-5 mr-2 text-destructive shrink-0 mt-0.5" />
                        <span>Publisher location for books published after 2020</span>
                      </li>
                      <li className="flex items-start">
                        <AlertCircle className="h-5 w-5 mr-2 text-destructive shrink-0 mt-0.5" />
                        <span>"Retrieved from" before URLs with a DOI</span>
                      </li>
                      <li className="flex items-start">
                        <AlertCircle className="h-5 w-5 mr-2 text-destructive shrink-0 mt-0.5" />
                        <span>Database names in most references</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="mla" className="space-y-6">
              <div className="prose prose-blue dark:prose-invert max-w-none">
                <h2 className="font-serif text-2xl">MLA (Modern Language Association) Style - 9th Edition</h2>
                <p>
                  MLA Style is commonly used in the humanities, especially in the fields of language and literature. The current version is the 9th edition, published in 2021.
                </p>
                
                <h3 className="font-serif">Basic Format for Books</h3>
                <div className="bg-muted/50 p-4 rounded-md my-4 font-mono text-sm">
                  Last Name, First Name. <em>Title of Book</em>. Publisher, Publication Date.
                </div>
                
                <h3 className="font-serif">Basic Format for Journal Articles</h3>
                <div className="bg-muted/50 p-4 rounded-md my-4 font-mono text-sm">
                  Last Name, First Name. "Title of Article." <em>Title of Journal</em>, Volume, Issue, Publication Date, page range.
                </div>

                <h3 className="font-serif">Basic Format for Websites</h3>
                <div className="bg-muted/50 p-4 rounded-md my-4 font-mono text-sm">
                  Last Name, First Name. "Title of Web Page." <em>Title of Website</em>, Publisher or Sponsor, Date of publication, URL. Accessed Day Month Year.
                </div>

                <h3 className="font-serif">In-text Citations</h3>
                <p>MLA Style uses parenthetical citations that typically include the author's last name and page number:</p>
                <ul>
                  <li>Basic citation: (Johnson 45)</li>
                  <li>Author mentioned in text: Johnson argues that "..." (45).</li>
                  <li>Multiple authors: (Johnson and Smith 45)</li>
                  <li>Three or more authors: (Johnson et al. 45)</li>
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="chicago" className="space-y-6">
              <div className="prose prose-blue dark:prose-invert max-w-none">
                <h2 className="font-serif text-2xl">Chicago Style - 17th Edition</h2>
                <p>
                  Chicago Style offers two documentation systems: notes-bibliography (commonly used in humanities) and author-date (used in sciences and social sciences).
                </p>
                
                <h3 className="font-serif">Notes-Bibliography System</h3>
                <p>This system uses footnotes or endnotes with a bibliography:</p>
                
                <h4 className="font-serif">Book Format (Note)</h4>
                <div className="bg-muted/50 p-4 rounded-md my-4 font-mono text-sm">
                  1. First Name Last Name, <em>Title of Book</em> (Place of Publication: Publisher, Year), page number.
                </div>
                
                <h4 className="font-serif">Book Format (Bibliography)</h4>
                <div className="bg-muted/50 p-4 rounded-md my-4 font-mono text-sm">
                  Last Name, First Name. <em>Title of Book</em>. Place of Publication: Publisher, Year.
                </div>

                <h3 className="font-serif">Author-Date System</h3>
                <p>This system uses parenthetical author-date citations with a reference list:</p>
                
                <h4 className="font-serif">In-text Citation</h4>
                <div className="bg-muted/50 p-4 rounded-md my-4 font-mono text-sm">
                  (Author Last Name Year, page number)
                </div>
                
                <h4 className="font-serif">Reference List Entry</h4>
                <div className="bg-muted/50 p-4 rounded-md my-4 font-mono text-sm">
                  Author Last Name, First Name. Year. <em>Title of Book</em>. Place of Publication: Publisher.
                </div>
              </div>
            </TabsContent>

            <TabsContent value="harvard" className="space-y-6">
              <div className="prose prose-blue dark:prose-invert max-w-none">
                <h2 className="font-serif text-2xl">Harvard Referencing Style</h2>
                <p>
                  Harvard style is widely used in universities and publications, particularly in the UK, Australia, and other countries. Unlike APA or MLA, it is not governed by a specific manual but has general conventions.
                </p>
                
                <h3 className="font-serif">Basic Format for Books</h3>
                <div className="bg-muted/50 p-4 rounded-md my-4 font-mono text-sm">
                  Last Name, Initial(s). (Year) <em>Title of Book</em>. Edition. Place of Publication: Publisher.
                </div>
                
                <h3 className="font-serif">Basic Format for Journal Articles</h3>
                <div className="bg-muted/50 p-4 rounded-md my-4 font-mono text-sm">
                  Last Name, Initial(s). (Year) 'Title of article', <em>Title of Journal</em>, Volume(Issue), page range.
                </div>

                <h3 className="font-serif">Basic Format for Websites</h3>
                <div className="bg-muted/50 p-4 rounded-md my-4 font-mono text-sm">
                  Last Name, Initial(s). (Year) 'Title of Web Page', <em>Title of Website</em> [Online]. Available at: URL (Accessed: Day Month Year).
                </div>

                <h3 className="font-serif">In-text Citations</h3>
                <p>Harvard style uses author-date citations:</p>
                <ul>
                  <li>One author: (Johnson, 2020)</li>
                  <li>Two authors: (Johnson and Smith, 2020)</li>
                  <li>Three or more authors: (Johnson et al., 2020)</li>
                  <li>Direct quote: (Johnson, 2020, p. 189)</li>
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="ieee" className="space-y-6">
              <div className="prose prose-blue dark:prose-invert max-w-none">
                <h2 className="font-serif text-2xl">IEEE (Institute of Electrical and Electronics Engineers) Citation Style</h2>
                <p>
                  IEEE style is widely used in technical fields, especially in electrical, electronic, and computer engineering publications.
                </p>
                
                <h3 className="font-serif">Basic Format for Citations</h3>
                <p>IEEE style uses a numbered citation system. References are numbered in the order they first appear in the text.</p>
                
                <h3 className="font-serif">Basic Format for Books</h3>
                <div className="bg-muted/50 p-4 rounded-md my-4 font-mono text-sm">
                  [#] A. A. Author and B. B. Author, <em>Title of Book</em>, xth ed. City of Publisher, State/Country: Publisher, Year.
                </div>
                
                <h3 className="font-serif">Basic Format for Journal Articles</h3>
                <div className="bg-muted/50 p-4 rounded-md my-4 font-mono text-sm">
                  [#] A. A. Author and B. B. Author, "Title of article," <em>Title of Journal</em>, vol. x, no. x, pp. xxx-xxx, Abbrev. Month, Year.
                </div>

                <h3 className="font-serif">In-text Citations</h3>
                <p>IEEE style uses square brackets with the reference number:</p>
                <ul>
                  <li>Basic citation: [1]</li>
                  <li>Multiple citations: [1], [3], [5]</li>
                  <li>Range of citations: [1]-[5]</li>
                </ul>
              </div>
            </TabsContent>
          </Tabs>
        </Container>

        <Container className="pb-12">
          <div className="bg-muted/30 rounded-lg p-6">
            <h3 className="text-xl font-medium font-serif mb-4">Citation Tools & Resources</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-serif">Citation Managers</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1 text-sm">
                    <li>• Zotero</li>
                    <li>• Mendeley</li>
                    <li>• EndNote</li>
                    <li>• RefWorks</li>
                    <li>• Citavi</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-serif">Online Citation Generators</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1 text-sm">
                    <li>• Cite This For Me</li>
                    <li>• EasyBib</li>
                    <li>• Citation Machine</li>
                    <li>• BibMe</li>
                    <li>• Scribbr Citation Generator</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-serif">Style Guides</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1 text-sm">
                    <li>• Purdue OWL</li>
                    <li>• APA Style Guide</li>
                    <li>• MLA Handbook</li>
                    <li>• Chicago Manual of Style</li>
                    <li>• IEEE Editorial Style Manual</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
};

export default CitationGuidelines;
