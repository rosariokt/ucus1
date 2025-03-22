
import React from "react";
import { Header, Footer } from "@/components";
import { Container } from "@/components";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, GraduationCap, PenTool, FileText, Users } from "lucide-react";

const AcademicResources = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        <div className="bg-primary/10 py-12">
          <Container>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="bg-primary/20 p-3 rounded-full mb-2">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-3xl md:text-4xl font-serif font-medium">Academic Resources</h1>
              <p className="text-muted-foreground max-w-2xl text-lg">
                Comprehensive guides and resources to enhance your academic research, writing, and publishing journey.
              </p>
            </div>
          </Container>
        </div>

        <Container className="py-12">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="w-full max-w-2xl mx-auto grid grid-cols-2 md:grid-cols-5 mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="citation">Citation</TabsTrigger>
              <TabsTrigger value="methodology">Methodology</TabsTrigger>
              <TabsTrigger value="writing">Writing</TabsTrigger>
              <TabsTrigger value="review">Peer Review</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-8">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-center mb-2">
                      <div className="bg-primary/10 p-2 rounded-full mr-3">
                        <BookOpen className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="font-serif">Citation Guidelines</CardTitle>
                    </div>
                    <CardDescription>
                      Master the art of proper academic citation with comprehensive style guides
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Learn how to properly cite sources using APA, MLA, Chicago, and other citation styles. Our detailed guides will help you maintain academic integrity.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/academic-resources/citation-guidelines">
                        Explore Citation Guidelines
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-center mb-2">
                      <div className="bg-primary/10 p-2 rounded-full mr-3">
                        <FileText className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="font-serif">Research Methodology</CardTitle>
                    </div>
                    <CardDescription>
                      Understanding research approaches, data collection, and analysis
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Discover various research methodologies, from qualitative to quantitative approaches. Learn about data collection techniques and analysis methods.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/academic-resources/research-methodology">
                        Explore Research Methodology
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-center mb-2">
                      <div className="bg-primary/10 p-2 rounded-full mr-3">
                        <PenTool className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="font-serif">Academic Writing</CardTitle>
                    </div>
                    <CardDescription>
                      Essential guides to effective scholarly writing and structure
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Enhance your academic writing skills with guides on structure, style, and clarity. Learn to craft compelling arguments and clear expositions.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/academic-resources/academic-writing">
                        Explore Academic Writing
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-center mb-2">
                      <div className="bg-primary/10 p-2 rounded-full mr-3">
                        <Users className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="font-serif">Peer Review Process</CardTitle>
                    </div>
                    <CardDescription>
                      Understanding the evaluation and publication process
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Learn about the peer review process, from submission to publication. Understand reviewer expectations and how to respond to feedback effectively.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/academic-resources/peer-review-process">
                        Explore Peer Review Process
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="citation">
              <div className="prose prose-blue dark:prose-invert max-w-none">
                <h2 className="font-serif">Citation Guidelines Preview</h2>
                <p>
                  Proper citation is crucial for academic integrity and giving credit to original authors. Our detailed guides cover:
                </p>
                <ul>
                  <li>APA Style (7th Edition)</li>
                  <li>MLA Style (9th Edition)</li>
                  <li>Chicago/Turabian Style</li>
                  <li>Harvard Referencing</li>
                  <li>IEEE Citation Style</li>
                </ul>
                <Button asChild>
                  <Link to="/academic-resources/citation-guidelines">
                    View Complete Citation Guidelines
                  </Link>
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="methodology">
              <div className="prose prose-blue dark:prose-invert max-w-none">
                <h2 className="font-serif">Research Methodology Preview</h2>
                <p>
                  Selecting the right research methodology is essential for valid and reliable results. Our resources cover:
                </p>
                <ul>
                  <li>Qualitative vs. Quantitative Research</li>
                  <li>Experimental Design</li>
                  <li>Survey Research</li>
                  <li>Case Studies</li>
                  <li>Data Analysis Techniques</li>
                </ul>
                <Button asChild>
                  <Link to="/academic-resources/research-methodology">
                    View Complete Research Methodology Guide
                  </Link>
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="writing">
              <div className="prose prose-blue dark:prose-invert max-w-none">
                <h2 className="font-serif">Academic Writing Preview</h2>
                <p>
                  Effective academic writing requires clarity, precision, and logical organization. Our guides cover:
                </p>
                <ul>
                  <li>Thesis Development</li>
                  <li>Structuring Academic Papers</li>
                  <li>Literature Review Writing</li>
                  <li>Argumentation Techniques</li>
                  <li>Academic Style and Tone</li>
                </ul>
                <Button asChild>
                  <Link to="/academic-resources/academic-writing">
                    View Complete Academic Writing Guide
                  </Link>
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="review">
              <div className="prose prose-blue dark:prose-invert max-w-none">
                <h2 className="font-serif">Peer Review Process Preview</h2>
                <p>
                  Understanding the peer review process helps researchers navigate publication and improve their work. Our resources cover:
                </p>
                <ul>
                  <li>Types of Peer Review</li>
                  <li>Reviewer Selection Process</li>
                  <li>Responding to Reviewer Comments</li>
                  <li>Revision Strategies</li>
                  <li>Publication Ethics</li>
                </ul>
                <Button asChild>
                  <Link to="/academic-resources/peer-review-process">
                    View Complete Peer Review Guide
                  </Link>
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </Container>
      </main>

      <Footer />
    </div>
  );
};

export default AcademicResources;
