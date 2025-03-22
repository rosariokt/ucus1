
import React from "react";
import { Header, Footer, BackButton } from "@/components";
import { Container } from "@/components";
import { FileText, ArrowLeft, BookOpen, Check, AlertCircle, BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

const ResearchMethodology = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        <div className="bg-primary/10 py-10">
          <Container>
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="bg-primary/20 p-3 rounded-full mb-2">
                <FileText className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-3xl md:text-4xl font-serif font-medium">Research Methodology</h1>
              <p className="text-muted-foreground max-w-2xl text-lg">
                A comprehensive guide to research approaches, data collection methods, and analysis techniques.
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
          <Tabs defaultValue="approaches" className="w-full">
            <TabsList className="w-full max-w-2xl mx-auto grid grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="approaches">Research Approaches</TabsTrigger>
              <TabsTrigger value="data-collection">Data Collection</TabsTrigger>
              <TabsTrigger value="analysis">Data Analysis</TabsTrigger>
              <TabsTrigger value="ethics">Research Ethics</TabsTrigger>
            </TabsList>

            <TabsContent value="approaches" className="space-y-6">
              <div className="prose prose-blue dark:prose-invert max-w-none">
                <h2 className="font-serif">Research Approaches</h2>
                <p>
                  Research methodology refers to the overall approach to the research process, from theoretical foundation to data collection and analysis. The approach you choose should align with your research questions and objectives.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-center mb-2">
                      <div className="bg-primary/10 p-2 rounded-full mr-3">
                        <BookOpen className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="font-serif">Quantitative Research</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Quantitative research focuses on numerical data and statistical analysis to test hypotheses and establish relationships between variables.
                    </p>
                    <h4 className="font-medium mb-2">Key Characteristics:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                      <li>Emphasizes measurement and quantification</li>
                      <li>Uses statistical methods for data analysis</li>
                      <li>Tests theories and hypotheses</li>
                      <li>Aims for generalizability</li>
                      <li>Typically uses larger sample sizes</li>
                    </ul>
                    <h4 className="font-medium mt-4 mb-2">Common Methods:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                      <li>Surveys and questionnaires</li>
                      <li>Experiments</li>
                      <li>Structured observations</li>
                      <li>Secondary data analysis</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-center mb-2">
                      <div className="bg-primary/10 p-2 rounded-full mr-3">
                        <BookOpen className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="font-serif">Qualitative Research</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Qualitative research focuses on non-numerical data to explore phenomena, understand experiences, and interpret meanings within specific contexts.
                    </p>
                    <h4 className="font-medium mb-2">Key Characteristics:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                      <li>Explores meanings and experiences</li>
                      <li>Uses interpretive, naturalistic approaches</li>
                      <li>Generally inductive (theory-building)</li>
                      <li>Context-specific understanding</li>
                      <li>Typically uses smaller sample sizes</li>
                    </ul>
                    <h4 className="font-medium mt-4 mb-2">Common Methods:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                      <li>In-depth interviews</li>
                      <li>Focus groups</li>
                      <li>Participant observation</li>
                      <li>Case studies</li>
                      <li>Content analysis</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-md transition-shadow md:col-span-2">
                  <CardHeader className="pb-3">
                    <div className="flex items-center mb-2">
                      <div className="bg-primary/10 p-2 rounded-full mr-3">
                        <BookOpen className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="font-serif">Mixed Methods Research</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Mixed methods research integrates both quantitative and qualitative approaches to provide a more comprehensive understanding of the research problem.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium mb-2">Key Characteristics:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                          <li>Combines strengths of both approaches</li>
                          <li>Provides more comprehensive evidence</li>
                          <li>Addresses questions that cannot be answered by either approach alone</li>
                          <li>Offers multiple perspectives on a phenomenon</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Common Designs:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                          <li>Sequential (one method followed by another)</li>
                          <li>Concurrent (both methods used simultaneously)</li>
                          <li>Transformative (guided by theoretical framework)</li>
                          <li>Multiphase (multiple projects over time)</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="data-collection" className="space-y-6">
              <div className="prose prose-blue dark:prose-invert max-w-none">
                <h2 className="font-serif">Data Collection Methods</h2>
                <p>
                  Choosing appropriate data collection methods is crucial for gathering valid, reliable evidence to address your research questions. Different methods are suited to different types of inquiries.
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-muted/30 rounded-lg p-6">
                  <h3 className="text-xl font-medium font-serif mb-4">Primary Data Collection</h3>
                  <p className="text-muted-foreground mb-6">
                    Primary data refers to information collected directly by the researcher for the specific purpose of their study.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base font-medium">Surveys and Questionnaires</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-3">
                          Structured instruments used to gather data from respondents, typically through a series of closed or open-ended questions.
                        </p>
                        <div className="flex flex-col space-y-1 text-sm">
                          <span className="font-medium">Best for:</span>
                          <span className="text-muted-foreground">Collecting data from large populations, testing specific hypotheses, gathering demographic information</span>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base font-medium">Interviews</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-3">
                          Direct conversations between researcher and participants, which can be structured, semi-structured, or unstructured.
                        </p>
                        <div className="flex flex-col space-y-1 text-sm">
                          <span className="font-medium">Best for:</span>
                          <span className="text-muted-foreground">Exploring complex topics in depth, understanding personal experiences, gaining rich qualitative data</span>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base font-medium">Observations</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-3">
                          Systematic watching and recording of behavior or events in the natural setting where they occur.
                        </p>
                        <div className="flex flex-col space-y-1 text-sm">
                          <span className="font-medium">Best for:</span>
                          <span className="text-muted-foreground">Studying behaviors in natural contexts, understanding social dynamics, capturing non-verbal information</span>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base font-medium">Experiments</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-3">
                          Systematic procedures carried out under controlled conditions to test hypotheses about cause-effect relationships.
                        </p>
                        <div className="flex flex-col space-y-1 text-sm">
                          <span className="font-medium">Best for:</span>
                          <span className="text-muted-foreground">Testing causal relationships, controlling for confounding variables, high internal validity</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                
                <div className="bg-muted/30 rounded-lg p-6">
                  <h3 className="text-xl font-medium font-serif mb-4">Secondary Data Collection</h3>
                  <p className="text-muted-foreground mb-6">
                    Secondary data is information that has been collected by someone else for a different purpose but can be utilized for your research.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base font-medium">Document Analysis</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-3">
                          Systematic review of existing documents such as reports, archives, publications, or records.
                        </p>
                        <div className="flex flex-col space-y-1 text-sm">
                          <span className="font-medium">Best for:</span>
                          <span className="text-muted-foreground">Historical research, policy analysis, understanding institutional perspectives</span>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base font-medium">Datasets</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-3">
                          Analysis of existing statistical databases from government agencies, research institutions, or other organizations.
                        </p>
                        <div className="flex flex-col space-y-1 text-sm">
                          <span className="font-medium">Best for:</span>
                          <span className="text-muted-foreground">Longitudinal analysis, accessing large samples, cross-sectional studies</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="analysis" className="space-y-6">
              <div className="prose prose-blue dark:prose-invert max-w-none">
                <h2 className="font-serif">Data Analysis Techniques</h2>
                <p>
                  Data analysis involves examining, cleaning, transforming, and modeling data to discover useful information, draw conclusions, and support decision-making. The analysis techniques you use should align with your research approach and data type.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="bg-muted/30 rounded-lg p-5">
                    <h3 className="text-lg font-medium font-serif mb-3 flex items-center">
                      <BarChart className="h-5 w-5 mr-2 text-primary" />
                      Quantitative Analysis Techniques
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-sm">Descriptive Statistics</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Summarizes data through measures of central tendency (mean, median, mode) and dispersion (range, variance, standard deviation).
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">Inferential Statistics</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Uses sample data to make inferences about a larger population through hypothesis testing, confidence intervals, and significance tests.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">Regression Analysis</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Examines relationships between dependent and independent variables, estimating how one variable changes when another changes.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">Factor Analysis</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Identifies underlying factors or dimensions that explain correlations among observed variables, often used in scale development.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-muted/30 rounded-lg p-5">
                    <h3 className="text-lg font-medium font-serif mb-3">Software for Quantitative Analysis</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-green-600 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-sm">SPSS (Statistical Package for Social Sciences)</p>
                          <p className="text-xs text-muted-foreground">Popular in social sciences with user-friendly interface</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-green-600 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-sm">R</p>
                          <p className="text-xs text-muted-foreground">Open-source software with extensive statistical capabilities</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-green-600 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-sm">Stata</p>
                          <p className="text-xs text-muted-foreground">Comprehensive statistical software popular in economics</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-green-600 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-sm">Python (with libraries like NumPy, pandas, scikit-learn)</p>
                          <p className="text-xs text-muted-foreground">Flexible programming language for data analysis and machine learning</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-muted/30 rounded-lg p-5">
                    <h3 className="text-lg font-medium font-serif mb-3 flex items-center">
                      <FileText className="h-5 w-5 mr-2 text-primary" />
                      Qualitative Analysis Techniques
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-sm">Thematic Analysis</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Identifies patterns or themes within qualitative data through coding and interpretation.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">Content Analysis</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Systematically categorizes and quantifies content in texts or other materials.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">Discourse Analysis</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Examines patterns of language use and how meaning is constructed in social contexts.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">Grounded Theory</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Develops theory inductively from data through iterative coding, comparison, and theoretical sampling.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-muted/30 rounded-lg p-5">
                    <h3 className="text-lg font-medium font-serif mb-3">Software for Qualitative Analysis</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-green-600 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-sm">NVivo</p>
                          <p className="text-xs text-muted-foreground">Comprehensive tool for organizing and analyzing unstructured data</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-green-600 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-sm">ATLAS.ti</p>
                          <p className="text-xs text-muted-foreground">Powerful software for qualitative analysis of textual, graphical, audio, and video data</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-green-600 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-sm">MAXQDA</p>
                          <p className="text-xs text-muted-foreground">Mixed methods analysis software with visualization capabilities</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 mr-2 text-green-600 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-sm">Dedoose</p>
                          <p className="text-xs text-muted-foreground">Web-based application for mixed methods research</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="ethics" className="space-y-6">
              <div className="prose prose-blue dark:prose-invert max-w-none">
                <h2 className="font-serif">Research Ethics</h2>
                <p>
                  Ethical considerations are fundamental to the research process and should be addressed at every stage, from planning to publication. Research ethics ensure that the rights and welfare of participants are protected and that research is conducted with integrity.
                </p>
              </div>

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="hover:shadow-md transition-shadow">
                    <CardHeader className="pb-3">
                      <CardTitle className="font-serif">Informed Consent</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm">
                        Participants must be fully informed about the purpose, methods, potential risks, and benefits of the research. They should voluntarily agree to participate and understand their right to withdraw at any time without penalty.
                      </p>
                      <div className="mt-4 bg-muted/50 p-3 rounded-md text-xs">
                        <p className="font-medium">Key elements of informed consent:</p>
                        <ul className="list-disc pl-4 mt-1 space-y-1">
                          <li>Clear explanation of research purpose</li>
                          <li>Description of procedures and time commitment</li>
                          <li>Disclosure of potential risks and benefits</li>
                          <li>Statement of voluntary participation</li>
                          <li>Information about confidentiality</li>
                          <li>Contact details for questions</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-md transition-shadow">
                    <CardHeader className="pb-3">
                      <CardTitle className="font-serif">Privacy and Confidentiality</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm">
                        Researchers must protect participants' identifiable information and maintain confidentiality. This includes secure data storage, anonymization of data when appropriate, and careful handling of sensitive information.
                      </p>
                      <div className="mt-4 bg-muted/50 p-3 rounded-md text-xs">
                        <p className="font-medium">Safeguarding practices:</p>
                        <ul className="list-disc pl-4 mt-1 space-y-1">
                          <li>Use participant codes or pseudonyms</li>
                          <li>Store data securely (encryption, password protection)</li>
                          <li>Restrict access to identifiable information</li>
                          <li>Obtain explicit consent for use of direct quotes</li>
                          <li>Carefully handle group data (e.g., focus groups)</li>
                          <li>Have clear data retention and destruction plans</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="bg-muted/30 rounded-lg p-6">
                  <h3 className="text-xl font-medium font-serif mb-4">Ethical Principles in Research</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-medium text-primary mb-2">Respect for Persons</h4>
                      <p className="text-sm text-muted-foreground">
                        Treating individuals as autonomous agents and protecting those with diminished autonomy. This includes obtaining informed consent and respecting privacy.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-primary mb-2">Beneficence</h4>
                      <p className="text-sm text-muted-foreground">
                        Maximizing possible benefits while minimizing potential harms. Researchers should design studies that minimize risks to participants.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-primary mb-2">Justice</h4>
                      <p className="text-sm text-muted-foreground">
                        Ensuring fair distribution of the benefits and burdens of research. This includes equitable selection of participants and sharing of research findings.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-muted/30 rounded-lg p-6">
                  <h3 className="text-xl font-medium font-serif mb-4">Research Integrity</h3>
                  <p className="text-muted-foreground mb-6">
                    Research integrity refers to the adherence to ethical principles and professional standards essential for responsible research practices.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-sm flex items-center">
                          <Check className="h-4 w-4 mr-2 text-green-600" />
                          Honesty and Transparency
                        </h4>
                        <p className="text-xs text-muted-foreground mt-1 ml-6">
                          Truthfully reporting methods, procedures, data, results, and publication status. Disclosing conflicts of interest and funding sources.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium text-sm flex items-center">
                          <Check className="h-4 w-4 mr-2 text-green-600" />
                          Objectivity
                        </h4>
                        <p className="text-xs text-muted-foreground mt-1 ml-6">
                          Avoiding bias in experimental design, data analysis, data interpretation, peer review, and other aspects of research.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium text-sm flex items-center">
                          <Check className="h-4 w-4 mr-2 text-green-600" />
                          Respect for Intellectual Property
                        </h4>
                        <p className="text-xs text-muted-foreground mt-1 ml-6">
                          Proper attribution of contributions and obtaining permissions. Avoiding plagiarism and honoring patents, copyrights, and other forms of intellectual property.
                        </p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-sm flex items-center">
                          <AlertCircle className="h-4 w-4 mr-2 text-destructive" />
                          Research Misconduct
                        </h4>
                        <p className="text-xs text-muted-foreground mt-1 ml-6">
                          Fabrication (making up data), falsification (manipulating data or results), or plagiarism (using others' ideas without proper attribution) are serious violations of research ethics.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium text-sm flex items-center">
                          <AlertCircle className="h-4 w-4 mr-2 text-destructive" />
                          Questionable Research Practices
                        </h4>
                        <p className="text-xs text-muted-foreground mt-1 ml-6">
                          Practices that undermine research integrity, such as p-hacking (selective reporting of positive results), HARKing (hypothesizing after results are known), or salami slicing (dividing research into unnecessarily small publications).
                        </p>
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

export default ResearchMethodology;
