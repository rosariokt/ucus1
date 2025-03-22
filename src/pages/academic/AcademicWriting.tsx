
import React from "react";
import { Header, Footer, BackButton } from "@/components";
import { Container } from "@/components";
import { PenTool, ArrowLeft, BookOpen, Check, FileText, AlertCircle, BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

const AcademicWriting = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        <div className="bg-primary/10 py-10">
          <Container>
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="bg-primary/20 p-3 rounded-full mb-2">
                <PenTool className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-3xl md:text-4xl font-serif font-medium">Academic Writing</h1>
              <p className="text-muted-foreground max-w-2xl text-lg">
                Essential principles and practical techniques for effective scholarly writing.
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
          <Tabs defaultValue="principles" className="w-full">
            <TabsList className="w-full max-w-2xl mx-auto grid grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="principles">Principles</TabsTrigger>
              <TabsTrigger value="structure">Structure</TabsTrigger>
              <TabsTrigger value="style">Style Guide</TabsTrigger>
              <TabsTrigger value="common-issues">Common Issues</TabsTrigger>
            </TabsList>

            <TabsContent value="principles" className="space-y-6">
              <div className="prose prose-blue dark:prose-invert max-w-none">
                <h2 className="font-serif">Principles of Academic Writing</h2>
                <p>
                  Academic writing is characterized by its formal tone, precision, objectivity, and evidence-based arguments. Understanding these core principles will help you produce scholarly work that meets the standards of academic discourse.
                </p>
                
                <h3 className="font-serif">Key Characteristics of Academic Writing</h3>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <CardTitle className="font-serif">Clarity and Precision</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      Academic writing aims for clear and precise communication of complex ideas. Use specific terminology appropriate to your field, define key terms, and avoid vague language or generalizations.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <CardTitle className="font-serif">Objectivity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      Present information from a balanced perspective based on evidence rather than personal bias. Limit the use of first-person pronouns and emotional language unless specifically relevant to your research approach.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <CardTitle className="font-serif">Evidence-Based Arguments</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      Support claims with appropriate evidence from credible sources. Properly cite all sources to acknowledge others&apos; work and allow readers to verify information.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <CardTitle className="font-serif">Formality</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      Maintain a formal tone throughout your writing. Avoid contractions, slang, colloquialisms, and overly casual language. Use complete sentences and proper grammar.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <CardTitle className="font-serif">Logical Organization</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      Structure your writing with clear organization, logical flow between ideas, and explicit transitions. Each paragraph should present a single main idea that contributes to your overall argument.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <CardTitle className="font-serif">Critical Thinking</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      Demonstrate analytical depth by evaluating information from multiple perspectives, considering limitations, and addressing counterarguments. Show that you&apos;ve thought deeply about your topic.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-muted/30 rounded-lg p-6 mt-6">
                <h3 className="text-xl font-medium font-serif mb-4">The Academic Writing Process</h3>
                <ol className="space-y-4">
                  <li className="flex">
                    <span className="font-mono bg-primary/10 text-primary h-6 w-6 rounded-full flex items-center justify-center mr-3 shrink-0">1</span>
                    <div>
                      <h4 className="font-medium">Planning and Preparation</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Understand the assignment, select a topic, conduct preliminary research, and create an outline.
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex">
                    <span className="font-mono bg-primary/10 text-primary h-6 w-6 rounded-full flex items-center justify-center mr-3 shrink-0">2</span>
                    <div>
                      <h4 className="font-medium">Researching</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Gather relevant information from credible sources, take comprehensive notes, and organize your research findings.
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex">
                    <span className="font-mono bg-primary/10 text-primary h-6 w-6 rounded-full flex items-center justify-center mr-3 shrink-0">3</span>
                    <div>
                      <h4 className="font-medium">Drafting</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Write a first draft following your outline, focusing on getting ideas down rather than perfection.
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex">
                    <span className="font-mono bg-primary/10 text-primary h-6 w-6 rounded-full flex items-center justify-center mr-3 shrink-0">4</span>
                    <div>
                      <h4 className="font-medium">Revising</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Review your draft for logical flow, argument strength, and overall coherence. Reorganize and refine as needed.
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex">
                    <span className="font-mono bg-primary/10 text-primary h-6 w-6 rounded-full flex items-center justify-center mr-3 shrink-0">5</span>
                    <div>
                      <h4 className="font-medium">Editing and Proofreading</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        Check for grammatical errors, punctuation, spelling, and consistent formatting. Ensure citations are correct.
                      </p>
                    </div>
                  </li>
                </ol>
              </div>
            </TabsContent>

            <TabsContent value="structure" className="space-y-6">
              <div className="prose prose-blue dark:prose-invert max-w-none">
                <h2 className="font-serif">Structure of Academic Papers</h2>
                <p>
                  Most academic papers follow a standard structure that helps organize information logically and makes it easier for readers to locate specific information. While variations exist across disciplines, the following structure is commonly used.
                </p>

                <h3 className="font-serif">Common Sections in Academic Papers</h3>
              </div>

              <div className="space-y-6">
                <div className="bg-primary/5 rounded-lg p-6 border border-primary/10">
                  <h3 className="text-xl font-medium font-serif mb-2 flex items-center">
                    <BookOpen className="h-5 w-5 mr-2 text-primary" />
                    Title and Abstract
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    The title should be concise yet descriptive. The abstract provides a brief overview of your paper&apos;s purpose, methods, findings, and conclusions (typically 150-250 words).
                  </p>
                  <div className="bg-white/70 dark:bg-black/10 p-4 rounded text-sm border border-muted/50">
                    <strong>Example Abstract Structure:</strong>
                    <ol className="list-decimal ml-5 mt-2 space-y-1">
                      <li>Background/context (1-2 sentences)</li>
                      <li>Research question/purpose (1 sentence)</li>
                      <li>Methodology (1-2 sentences)</li>
                      <li>Key findings (2-3 sentences)</li>
                      <li>Conclusions and implications (1-2 sentences)</li>
                    </ol>
                  </div>
                </div>

                <div className="bg-primary/5 rounded-lg p-6 border border-primary/10">
                  <h3 className="text-xl font-medium font-serif mb-2 flex items-center">
                    <BookOpen className="h-5 w-5 mr-2 text-primary" />
                    Introduction
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    The introduction establishes the context, significance, and purpose of your research. It should provide any necessary background information and clearly state your research question or thesis.
                  </p>
                  <div className="bg-white/70 dark:bg-black/10 p-4 rounded text-sm border border-muted/50">
                    <strong>Key Elements:</strong>
                    <ul className="list-disc ml-5 mt-2 space-y-1">
                      <li>Background and context</li>
                      <li>Research problem or gap in knowledge</li>
                      <li>Significance/relevance of the study</li>
                      <li>Research questions or objectives</li>
                      <li>Brief overview of methodology</li>
                      <li>Outline of paper structure (optional)</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-primary/5 rounded-lg p-6 border border-primary/10">
                  <h3 className="text-xl font-medium font-serif mb-2 flex items-center">
                    <BookOpen className="h-5 w-5 mr-2 text-primary" />
                    Literature Review
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    The literature review situates your research within the existing body of knowledge. It analyzes and synthesizes relevant work in your field, highlighting gaps or limitations that your research addresses.
                  </p>
                  <div className="bg-white/70 dark:bg-black/10 p-4 rounded text-sm border border-muted/50">
                    <strong>Organizational Approaches:</strong>
                    <ul className="list-disc ml-5 mt-2 space-y-1">
                      <li>Chronological: Tracing the development of the topic over time</li>
                      <li>Thematic: Organizing literature by themes or theoretical concepts</li>
                      <li>Methodological: Grouping studies by the methods used</li>
                      <li>Theoretical: Organizing by different theoretical approaches</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-primary/5 rounded-lg p-6 border border-primary/10">
                  <h3 className="text-xl font-medium font-serif mb-2 flex items-center">
                    <BookOpen className="h-5 w-5 mr-2 text-primary" />
                    Methodology
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    The methodology section describes how you conducted your research in sufficient detail for others to potentially replicate your study. It explains your research design, data collection, and analysis methods.
                  </p>
                  <div className="bg-white/70 dark:bg-black/10 p-4 rounded text-sm border border-muted/50">
                    <strong>Components to Include:</strong>
                    <ul className="list-disc ml-5 mt-2 space-y-1">
                      <li>Research design and rationale</li>
                      <li>Participants/subjects/sample</li>
                      <li>Materials/instruments/measures</li>
                      <li>Procedures</li>
                      <li>Data analysis methods</li>
                      <li>Ethical considerations</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-primary/5 rounded-lg p-6 border border-primary/10">
                  <h3 className="text-xl font-medium font-serif mb-2 flex items-center">
                    <BookOpen className="h-5 w-5 mr-2 text-primary" />
                    Results
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    The results section presents your findings without interpretation. Use tables, figures, and clear descriptions to present data in a logical and accessible manner.
                  </p>
                  <div className="bg-white/70 dark:bg-black/10 p-4 rounded text-sm border border-muted/50">
                    <strong>Best Practices:</strong>
                    <ul className="list-disc ml-5 mt-2 space-y-1">
                      <li>Present results in logical order (often following research questions)</li>
                      <li>Use headings and subheadings for organization</li>
                      <li>Include visual representations (figures, charts) when appropriate</li>
                      <li>Report statistical tests and significance levels clearly</li>
                      <li>Focus on reporting, not interpreting results</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-primary/5 rounded-lg p-6 border border-primary/10">
                  <h3 className="text-xl font-medium font-serif mb-2 flex items-center">
                    <BookOpen className="h-5 w-5 mr-2 text-primary" />
                    Discussion and Conclusion
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    The discussion interprets your results in relation to your research questions and existing literature. The conclusion summarizes key findings and discusses their implications and contributions.
                  </p>
                  <div className="bg-white/70 dark:bg-black/10 p-4 rounded text-sm border border-muted/50">
                    <strong>Elements to Include:</strong>
                    <ul className="list-disc ml-5 mt-2 space-y-1">
                      <li>Summary of key findings</li>
                      <li>Interpretation of results in context of literature</li>
                      <li>Discussion of implications (theoretical and practical)</li>
                      <li>Limitations of the study</li>
                      <li>Recommendations for future research</li>
                      <li>Concluding statements on significance</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-primary/5 rounded-lg p-6 border border-primary/10">
                  <h3 className="text-xl font-medium font-serif mb-2 flex items-center">
                    <BookOpen className="h-5 w-5 mr-2 text-primary" />
                    References and Appendices
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    The references section lists all sources cited in your paper. Appendices contain supplementary material that would disrupt the flow of the main text but may be valuable to readers.
                  </p>
                  <div className="bg-white/70 dark:bg-black/10 p-4 rounded text-sm border border-muted/50">
                    <strong>Important Notes:</strong>
                    <ul className="list-disc ml-5 mt-2 space-y-1">
                      <li>Format references according to your required citation style</li>
                      <li>Include only sources directly cited in your paper</li>
                      <li>Label appendices clearly (Appendix A, B, etc.)</li>
                      <li>Include appendices only if they add substantial value</li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="style" className="space-y-6">
              <div className="prose prose-blue dark:prose-invert max-w-none">
                <h2 className="font-serif">Academic Writing Style Guide</h2>
                <p>
                  Academic writing has its own distinct style that prioritizes clarity, precision, and formality. This guide highlights key style elements to improve the quality and effectiveness of your scholarly writing.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="bg-muted/30 rounded-lg p-5">
                    <h3 className="text-lg font-medium font-serif mb-3">Language and Tone</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-green-600 shrink-0 mt-0.5" />
                        <span>Use formal vocabulary and avoid colloquialisms, slang, or idioms</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-green-600 shrink-0 mt-0.5" />
                        <span>Maintain an objective tone; limit personal opinions unless specifically relevant</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-green-600 shrink-0 mt-0.5" />
                        <span>Use discipline-specific terminology accurately</span>
                      </li>
                      <li className="flex items-start">
                        <AlertCircle className="h-5 w-5 mr-2 text-destructive shrink-0 mt-0.5" />
                        <span>Avoid emotive language and sweeping generalizations</span>
                      </li>
                      <li className="flex items-start">
                        <AlertCircle className="h-5 w-5 mr-2 text-destructive shrink-0 mt-0.5" />
                        <span>Limit contractions (use &quot;do not&quot; instead of &quot;don&apos;t&quot;)</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-muted/30 rounded-lg p-5">
                    <h3 className="text-lg font-medium font-serif mb-3">Sentence Structure</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-green-600 shrink-0 mt-0.5" />
                        <span>Vary sentence length for readability, but maintain clarity</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-green-600 shrink-0 mt-0.5" />
                        <span>Use complex sentence structures appropriately to express complex ideas</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-green-600 shrink-0 mt-0.5" />
                        <span>Maintain subject-verb agreement</span>
                      </li>
                      <li className="flex items-start">
                        <AlertCircle className="h-5 w-5 mr-2 text-destructive shrink-0 mt-0.5" />
                        <span>Avoid run-on sentences or sentence fragments</span>
                      </li>
                      <li className="flex items-start">
                        <AlertCircle className="h-5 w-5 mr-2 text-destructive shrink-0 mt-0.5" />
                        <span>Don&apos;t overuse passive voice, though it has appropriate uses in academic writing</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-muted/30 rounded-lg p-5">
                    <h3 className="text-lg font-medium font-serif mb-3">Paragraph Structure</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-green-600 shrink-0 mt-0.5" />
                        <span>Begin paragraphs with a clear topic sentence</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-green-600 shrink-0 mt-0.5" />
                        <span>Focus each paragraph on a single main idea</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-green-600 shrink-0 mt-0.5" />
                        <span>Use appropriate transitions between sentences and paragraphs</span>
                      </li>
                      <li className="flex items-start">
                        <AlertCircle className="h-5 w-5 mr-2 text-destructive shrink-0 mt-0.5" />
                        <span>Avoid extremely long paragraphs (&gt;300 words) or very short ones (&lt;3 sentences)</span>
                      </li>
                      <li className="flex items-start">
                        <AlertCircle className="h-5 w-5 mr-2 text-destructive shrink-0 mt-0.5" />
                        <span>Don&apos;t introduce new topics without proper transitions</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-muted/30 rounded-lg p-5">
                    <h3 className="text-lg font-medium font-serif mb-3">Word Choice and Precision</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-green-600 shrink-0 mt-0.5" />
                        <span>Use precise language and specific rather than general terms</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-green-600 shrink-0 mt-0.5" />
                        <span>Define technical terms or jargon when first introduced</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-green-600 shrink-0 mt-0.5" />
                        <span>Be consistent with terminology throughout your paper</span>
                      </li>
                      <li className="flex items-start">
                        <AlertCircle className="h-5 w-5 mr-2 text-destructive shrink-0 mt-0.5" />
                        <span>Avoid vague expressions (e.g., &quot;a lot,&quot; &quot;things,&quot; &quot;stuff&quot;)</span>
                      </li>
                      <li className="flex items-start">
                        <AlertCircle className="h-5 w-5 mr-2 text-destructive shrink-0 mt-0.5" />
                        <span>Be cautious with absolute terms (e.g., &quot;always,&quot; &quot;never,&quot; &quot;all&quot;)</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-muted/30 rounded-lg p-5">
                    <h3 className="text-lg font-medium font-serif mb-3">Citations and References</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-green-600 shrink-0 mt-0.5" />
                        <span>Cite all sources accurately and consistently in the required style</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-green-600 shrink-0 mt-0.5" />
                        <span>Integrate citations smoothly into your text</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-green-600 shrink-0 mt-0.5" />
                        <span>Use direct quotes sparingly; paraphrase and synthesize instead</span>
                      </li>
                      <li className="flex items-start">
                        <AlertCircle className="h-5 w-5 mr-2 text-destructive shrink-0 mt-0.5" />
                        <span>Avoid excessive quotations or overreliance on a single source</span>
                      </li>
                      <li className="flex items-start">
                        <AlertCircle className="h-5 w-5 mr-2 text-destructive shrink-0 mt-0.5" />
                        <span>Never present others&apos; ideas as your own (plagiarism)</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-muted/30 rounded-lg p-5">
                    <h3 className="text-lg font-medium font-serif mb-3">Formatting and Presentation</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-green-600 shrink-0 mt-0.5" />
                        <span>Follow discipline-specific formatting guidelines</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-green-600 shrink-0 mt-0.5" />
                        <span>Use headings and subheadings to organize content logically</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-green-600 shrink-0 mt-0.5" />
                        <span>Present visuals (tables, figures) clearly with appropriate labels</span>
                      </li>
                      <li className="flex items-start">
                        <AlertCircle className="h-5 w-5 mr-2 text-destructive shrink-0 mt-0.5" />
                        <span>Avoid excessive use of bold, italics, or underlining for emphasis</span>
                      </li>
                      <li className="flex items-start">
                        <AlertCircle className="h-5 w-5 mr-2 text-destructive shrink-0 mt-0.5" />
                        <span>Don&apos;t use informal formatting features like emoticons or excessive exclamation points</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="common-issues" className="space-y-6">
              <div className="prose prose-blue dark:prose-invert max-w-none">
                <h2 className="font-serif">Common Issues in Academic Writing</h2>
                <p>
                  Even experienced writers face challenges with academic writing. Being aware of common issues can help you avoid them and improve the quality of your work.
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-muted/30 rounded-lg p-6">
                  <h3 className="text-xl font-medium font-serif mb-4">Clarity and Coherence Issues</h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="bg-destructive/10 rounded-md p-4 border border-destructive/20">
                        <h4 className="font-medium text-destructive flex items-center">
                          <AlertCircle className="h-5 w-5 mr-2" />
                          Jargon Overload
                        </h4>
                        <p className="text-sm mt-1">
                          Excessive use of technical terminology without proper explanation can alienate readers, even those in your field.
                        </p>
                        <div className="mt-3 pt-3 border-t border-destructive/20">
                          <p className="text-xs font-medium text-destructive/80">Instead:</p>
                          <p className="text-xs mt-1">
                            Define key terms when first introduced and use plain language when possible without sacrificing precision.
                          </p>
                        </div>
                      </div>
                      
                      <div className="bg-destructive/10 rounded-md p-4 border border-destructive/20">
                        <h4 className="font-medium text-destructive flex items-center">
                          <AlertCircle className="h-5 w-5 mr-2" />
                          Weak Transitions
                        </h4>
                        <p className="text-sm mt-1">
                          Abrupt shifts between ideas or paragraphs without clear connections can confuse readers and disrupt flow.
                        </p>
                        <div className="mt-3 pt-3 border-t border-destructive/20">
                          <p className="text-xs font-medium text-destructive/80">Instead:</p>
                          <p className="text-xs mt-1">
                            Use transitional phrases and sentences to guide readers from one idea to the next and show relationships between concepts.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="bg-destructive/10 rounded-md p-4 border border-destructive/20">
                        <h4 className="font-medium text-destructive flex items-center">
                          <AlertCircle className="h-5 w-5 mr-2" />
                          Overly Complex Sentences
                        </h4>
                        <p className="text-sm mt-1">
                          Excessively long, convoluted sentences with multiple clauses can obscure meaning and lose readers.
                        </p>
                        <div className="mt-3 pt-3 border-t border-destructive/20">
                          <p className="text-xs font-medium text-destructive/80">Instead:</p>
                          <p className="text-xs mt-1">
                            Aim for clarity. Break down complex ideas into manageable sentences. Vary sentence length for rhythm.
                          </p>
                        </div>
                      </div>
                      
                      <div className="bg-destructive/10 rounded-md p-4 border border-destructive/20">
                        <h4 className="font-medium text-destructive flex items-center">
                          <AlertCircle className="h-5 w-5 mr-2" />
                          Unfocused Paragraphs
                        </h4>
                        <p className="text-sm mt-1">
                          Paragraphs that address multiple unrelated points or lack a clear focus dilute argument strength.
                        </p>
                        <div className="mt-3 pt-3 border-t border-destructive/20">
                          <p className="text-xs font-medium text-destructive/80">Instead:</p>
                          <p className="text-xs mt-1">
                            Structure each paragraph around a single main idea with a clear topic sentence, supporting evidence, and concluding thought.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-muted/30 rounded-lg p-6">
                  <h3 className="text-xl font-medium font-serif mb-4">Argumentation and Evidence Issues</h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="bg-destructive/10 rounded-md p-4 border border-destructive/20">
                        <h4 className="font-medium text-destructive flex items-center">
                          <AlertCircle className="h-5 w-5 mr-2" />
                          Unsupported Claims
                        </h4>
                        <p className="text-sm mt-1">
                          Making assertions without providing sufficient evidence or citing credible sources undermines credibility.
                        </p>
                        <div className="mt-3 pt-3 border-t border-destructive/20">
                          <p className="text-xs font-medium text-destructive/80">Instead:</p>
                          <p className="text-xs mt-1">
                            Support all significant claims with evidence from credible, relevant sources. Cite properly.
                          </p>
                        </div>
                      </div>
                      
                      <div className="bg-destructive/10 rounded-md p-4 border border-destructive/20">
                        <h4 className="font-medium text-destructive flex items-center">
                          <AlertCircle className="h-5 w-5 mr-2" />
                          Overreliance on One Source
                        </h4>
                        <p className="text-sm mt-1">
                          Excessive dependence on a single source can indicate insufficient research and create a biased perspective.
                        </p>
                        <div className="mt-3 pt-3 border-t border-destructive/20">
                          <p className="text-xs font-medium text-destructive/80">Instead:</p>
                          <p className="text-xs mt-1">
                            Draw from diverse, credible sources to establish a well-rounded understanding of your topic and strengthen your argument.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="bg-destructive/10 rounded-md p-4 border border-destructive/20">
                        <h4 className="font-medium text-destructive flex items-center">
                          <AlertCircle className="h-5 w-5 mr-2" />
                          Neglecting Counterarguments
                        </h4>
                        <p className="text-sm mt-1">
                          Failing to acknowledge opposing viewpoints or potential criticisms weakens the overall argument.
                        </p>
                        <div className="mt-3 pt-3 border-t border-destructive/20">
                          <p className="text-xs font-medium text-destructive/80">Instead:</p>
                          <p className="text-xs mt-1">
                            Acknowledge significant counterarguments and either refute them or explain why your position remains valid despite them.
                          </p>
                        </div>
                      </div>
                      
                      <div className="bg-destructive/10 rounded-md p-4 border border-destructive/20">
                        <h4 className="font-medium text-destructive flex items-center">
                          <AlertCircle className="h-5 w-5 mr-2" />
                          Logical Fallacies
                        </h4>
                        <p className="text-sm mt-1">
                          Using flawed reasoning such as hasty generalizations, false causality, or ad hominem arguments undermines scholarly work.
                        </p>
                        <div className="mt-3 pt-3 border-t border-destructive/20">
                          <p className="text-xs font-medium text-destructive/80">Instead:</p>
                          <p className="text-xs mt-1">
                            Ensure arguments follow logical principles. Check carefully for fallacies in reasoning before submitting your work.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-muted/30 rounded-lg p-6">
                  <h3 className="text-xl font-medium font-serif mb-4">Citation and Source Issues</h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="bg-destructive/10 rounded-md p-4 border border-destructive/20">
                        <h4 className="font-medium text-destructive flex items-center">
                          <AlertCircle className="h-5 w-5 mr-2" />
                          Inconsistent Citation Style
                        </h4>
                        <p className="text-sm mt-1">
                          Mixing citation styles or formatting within a paper demonstrates a lack of attention to detail.
                        </p>
                        <div className="mt-3 pt-3 border-t border-destructive/20">
                          <p className="text-xs font-medium text-destructive/80">Instead:</p>
                          <p className="text-xs mt-1">
                            Adhere consistently to the citation style required for your discipline or assignment (APA, MLA, Chicago, etc.).
                          </p>
                        </div>
                      </div>
                      
                      <div className="bg-destructive/10 rounded-md p-4 border border-destructive/20">
                        <h4 className="font-medium text-destructive flex items-center">
                          <AlertCircle className="h-5 w-5 mr-2" />
                          Relying on Outdated Sources
                        </h4>
                        <p className="text-sm mt-1">
                          Using primarily older sources when more recent research exists can make your work appear outdated.
                        </p>
                        <div className="mt-3 pt-3 border-t border-destructive/20">
                          <p className="text-xs font-medium text-destructive/80">Instead:</p>
                          <p className="text-xs mt-1">
                            Include current research alongside foundational or classic works to demonstrate awareness of developments in your field.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="bg-destructive/10 rounded-md p-4 border border-destructive/20">
                        <h4 className="font-medium text-destructive flex items-center">
                          <AlertCircle className="h-5 w-5 mr-2" />
                          Plagiarism
                        </h4>
                        <p className="text-sm mt-1">
                          Using others&apos; ideas or words without proper attribution is a serious academic offense with severe consequences.
                        </p>
                        <div className="mt-3 pt-3 border-t border-destructive/20">
                          <p className="text-xs font-medium text-destructive/80">Instead:</p>
                          <p className="text-xs mt-1">
                            Always cite sources properly. Use quotation marks for direct quotes. Paraphrase carefully and still cite the source.
                          </p>
                        </div>
                      </div>
                      
                      <div className="bg-destructive/10 rounded-md p-4 border border-destructive/20">
                        <h4 className="font-medium text-destructive flex items-center">
                          <AlertCircle className="h-5 w-5 mr-2" />
                          Questionable Sources
                        </h4>
                        <p className="text-sm mt-1">
                          Relying on non-academic, biased, or unverifiable sources damages the credibility of your research.
                        </p>
                        <div className="mt-3 pt-3 border-t border-destructive/20">
                          <p className="text-xs font-medium text-destructive/80">Instead:</p>
                          <p className="text-xs mt-1">
                            Prioritize peer-reviewed journals, academic books, and reputable sources. Evaluate sources critically for authority and reliability.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </Container>
      </main>

      <Footer />
    </div>
  );
};

export default AcademicWriting;
