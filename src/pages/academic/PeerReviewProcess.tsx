
import React from "react";
import { Header, Footer, BackButton } from "@/components";
import { Container } from "@/components";
import { Users, ArrowLeft, BookOpen, Check, FileText, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

const PeerReviewProcess = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        <div className="bg-primary/10 py-10">
          <Container>
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="bg-primary/20 p-3 rounded-full mb-2">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-3xl md:text-4xl font-serif font-medium">Peer Review Process</h1>
              <p className="text-muted-foreground max-w-2xl text-lg">
                Understanding the scholarly evaluation process and how to navigate publication requirements.
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
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="w-full max-w-2xl mx-auto grid grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="process">Process</TabsTrigger>
              <TabsTrigger value="responding">Responding to Feedback</TabsTrigger>
              <TabsTrigger value="ethics">Ethics</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="prose prose-blue dark:prose-invert max-w-none">
                <h2 className="font-serif">Understanding the Peer Review Process</h2>
                <p>
                  Peer review is the evaluation of work by one or more people with similar competencies as the producers of the work. It functions as a form of self-regulation by qualified members of a profession within the relevant field.
                </p>
                
                <p>
                  The peer review process is crucial to maintaining the integrity and quality of scholarly research. It helps ensure that published research meets the standards of the discipline and provides a mechanism for validating findings before they become part of the scientific record.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <CardTitle className="font-serif">Quality Control</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      Peer review acts as a filter, ensuring that only high-quality research is published by determining the validity, significance, and originality of the work.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <CardTitle className="font-serif">Improvement Mechanism</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      The process helps authors improve their manuscripts by identifying weaknesses in methodology, analysis, or presentation that need to be addressed.
                    </p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <CardTitle className="font-serif">Credibility</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      Work that undergoes rigorous peer review gains credibility within the academic community and builds the reputation of both the authors and the publishing journal.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="process" className="space-y-6">
              <div className="prose prose-blue dark:prose-invert max-w-none">
                <h2 className="font-serif">The Peer Review Process</h2>
                <p>
                  While the specifics may vary between journals and disciplines, the peer review process typically follows a standard sequence of steps. Understanding this process can help authors navigate the publication journey more effectively.
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-muted/30 rounded-lg p-6">
                  <h3 className="text-xl font-medium font-serif mb-4">Stages of the Peer Review Process</h3>
                  <ol className="space-y-4">
                    <li className="flex">
                      <span className="font-mono bg-primary/10 text-primary h-6 w-6 rounded-full flex items-center justify-center mr-3 shrink-0">1</span>
                      <div>
                        <h4 className="font-medium">Initial Submission</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Authors submit their manuscript to a journal, typically through an online submission system. This includes the main document, figures, tables, and supplementary materials.
                        </p>
                      </div>
                    </li>
                    
                    <li className="flex">
                      <span className="font-mono bg-primary/10 text-primary h-6 w-6 rounded-full flex items-center justify-center mr-3 shrink-0">2</span>
                      <div>
                        <h4 className="font-medium">Editorial Assessment</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          The journal editor conducts an initial screening to determine if the manuscript meets basic requirements and is within the scope of the journal. Many submissions are rejected at this stage.
                        </p>
                      </div>
                    </li>
                    
                    <li className="flex">
                      <span className="font-mono bg-primary/10 text-primary h-6 w-6 rounded-full flex items-center justify-center mr-3 shrink-0">3</span>
                      <div>
                        <h4 className="font-medium">Reviewer Selection</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          If the manuscript passes initial screening, the editor selects reviewers based on their expertise in the relevant field. Typically, 2-3 reviewers are invited.
                        </p>
                      </div>
                    </li>
                    
                    <li className="flex">
                      <span className="font-mono bg-primary/10 text-primary h-6 w-6 rounded-full flex items-center justify-center mr-3 shrink-0">4</span>
                      <div>
                        <h4 className="font-medium">Review Period</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Reviewers evaluate the manuscript based on methodological rigor, validity of conclusions, originality, and significance. This typically takes 4-8 weeks, though it can vary widely.
                        </p>
                      </div>
                    </li>
                    
                    <li className="flex">
                      <span className="font-mono bg-primary/10 text-primary h-6 w-6 rounded-full flex items-center justify-center mr-3 shrink-0">5</span>
                      <div>
                        <h4 className="font-medium">Editorial Decision</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Based on reviewer reports, the editor makes one of several decisions: accept, revise and resubmit (minor or major revisions), or reject. Outright acceptance on first submission is rare.
                        </p>
                      </div>
                    </li>
                    
                    <li className="flex">
                      <span className="font-mono bg-primary/10 text-primary h-6 w-6 rounded-full flex items-center justify-center mr-3 shrink-0">6</span>
                      <div>
                        <h4 className="font-medium">Revision and Resubmission</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Authors address reviewers' comments and resubmit the revised manuscript, often with a point-by-point response to each critique.
                        </p>
                      </div>
                    </li>
                    
                    <li className="flex">
                      <span className="font-mono bg-primary/10 text-primary h-6 w-6 rounded-full flex items-center justify-center mr-3 shrink-0">7</span>
                      <div>
                        <h4 className="font-medium">Final Decision and Publication</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          After potentially multiple rounds of review and revision, the paper is either accepted for publication or ultimately rejected. If accepted, it moves to production for copyediting and typesetting.
                        </p>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="responding" className="space-y-6">
              <div className="prose prose-blue dark:prose-invert max-w-none">
                <h2 className="font-serif">Responding to Reviewer Feedback</h2>
                <p>
                  Receiving critical feedback on your manuscript can be challenging, but responding effectively to reviewer comments is a crucial skill for academic success. A thoughtful, comprehensive response can significantly increase your chances of publication.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="bg-muted/30 rounded-lg p-5">
                    <h3 className="text-lg font-medium font-serif mb-3">Best Practices</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-green-600 shrink-0 mt-0.5" />
                        <span>Respond to all comments, even if you disagree with them</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-green-600 shrink-0 mt-0.5" />
                        <span>Organize your response document with clear sections for each reviewer</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-green-600 shrink-0 mt-0.5" />
                        <span>Quote each original comment before your response</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-green-600 shrink-0 mt-0.5" />
                        <span>Explain specifically what changes you made and where</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-green-600 shrink-0 mt-0.5" />
                        <span>Maintain a respectful, professional tone throughout</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-muted/30 rounded-lg p-5">
                    <h3 className="text-lg font-medium font-serif mb-3">When You Disagree</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      It's perfectly acceptable to disagree with reviewer comments, but do so respectfully and with evidence:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-green-600 shrink-0 mt-0.5" />
                        <span>Acknowledge the reviewer's perspective</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-green-600 shrink-0 mt-0.5" />
                        <span>Provide clear rationale with references for your position</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-green-600 shrink-0 mt-0.5" />
                        <span>Consider compromises that address the underlying concern</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-green-600 shrink-0 mt-0.5" />
                        <span>Avoid defensive or dismissive language</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-muted/30 rounded-lg p-5">
                    <h3 className="text-lg font-medium font-serif mb-3">Sample Response Structure</h3>
                    <div className="bg-white/70 dark:bg-black/10 p-4 rounded text-sm border border-muted/50">
                      <p className="font-medium">Reviewer #1</p>
                      <p className="mt-2 italic text-muted-foreground">
                        "The authors do not adequately discuss the limitations of their methodology."
                      </p>
                      <p className="mt-2">
                        We thank the reviewer for this important observation. We have added a new paragraph in the Discussion section (p. 15, lines 310-325) that explicitly addresses the limitations of our approach, including potential selection bias and the constraints of our sample size. We have also added references to Smith et al. (2020) and Jones (2021) who discuss similar methodological challenges.
                      </p>
                    </div>
                  </div>

                  <div className="bg-destructive/10 rounded-lg p-5">
                    <h3 className="text-lg font-medium font-serif mb-3 text-destructive">Common Mistakes to Avoid</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <AlertCircle className="h-5 w-5 mr-2 text-destructive shrink-0 mt-0.5" />
                        <span>Being defensive or taking criticism personally</span>
                      </li>
                      <li className="flex items-start">
                        <AlertCircle className="h-5 w-5 mr-2 text-destructive shrink-0 mt-0.5" />
                        <span>Ignoring or selectively responding to comments</span>
                      </li>
                      <li className="flex items-start">
                        <AlertCircle className="h-5 w-5 mr-2 text-destructive shrink-0 mt-0.5" />
                        <span>Providing vague responses without specific changes</span>
                      </li>
                      <li className="flex items-start">
                        <AlertCircle className="h-5 w-5 mr-2 text-destructive shrink-0 mt-0.5" />
                        <span>Making promises about changes without actually implementing them</span>
                      </li>
                      <li className="flex items-start">
                        <AlertCircle className="h-5 w-5 mr-2 text-destructive shrink-0 mt-0.5" />
                        <span>Submitting a revision without a detailed response document</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="ethics" className="space-y-6">
              <div className="prose prose-blue dark:prose-invert max-w-none">
                <h2 className="font-serif">Peer Review Ethics</h2>
                <p>
                  The peer review system relies on trust and ethical conduct from all participants. Understanding the ethical dimensions of peer review helps maintain the integrity of the scholarly publishing process.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-medium font-serif mb-4">Reviewer Responsibilities</h3>
                  <Card className="mb-4">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base font-medium">Confidentiality</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Reviewers must treat manuscripts as confidential documents. They should not share or discuss unpublished manuscripts with colleagues or use the information for personal advantage.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="mb-4">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base font-medium">Conflicts of Interest</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Reviewers should decline to review if they have competing interests that could influence their assessment, such as personal or professional relationships with the authors.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="mb-4">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base font-medium">Constructive Feedback</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Reviews should be objective, constructive, and focused on the quality of the research rather than personal criticism of the authors.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base font-medium">Timeliness</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Reviewers should complete reviews within the agreed timeframe or promptly notify editors if they cannot meet the deadline.
                      </p>
                    </CardContent>
                  </Card>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium font-serif mb-4">Author Responsibilities</h3>
                  <Card className="mb-4">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base font-medium">Originality and Plagiarism</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Authors must ensure their work is original and properly cite all sources. Plagiarism in any form is unethical and unacceptable.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="mb-4">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base font-medium">Multiple Submissions</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Submitting the same manuscript to more than one journal simultaneously is considered unethical. Authors should wait for a decision from one journal before submitting elsewhere.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="mb-4">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base font-medium">Authorship</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        All individuals who made significant contributions to the research should be listed as authors. Gift or ghost authorship is unethical.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base font-medium">Disclosure</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Authors must disclose any conflicts of interest and all sources of funding for the research.
                      </p>
                    </CardContent>
                  </Card>
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

export default PeerReviewProcess;
