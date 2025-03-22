
import React from "react";
import { Container, Header, Footer, PageTransition, PageContentWrapper } from "@/components";
import { Separator } from "@/components/ui/separator";

const Terms = () => {
  return (
    <PageContentWrapper>
      <PageTransition>
        <Header />
        <main id="main-content" className="flex-1">
          <Container size="default" className="py-12">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-3xl font-serif font-bold mb-6">Terms of Service</h1>
              <p className="text-muted-foreground mb-6">Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>
              
              <Separator className="my-6" />
              
              <div className="space-y-6 text-base leading-relaxed">
                <section>
                  <h2 className="text-xl font-medium mb-3 font-serif">Agreement to Terms</h2>
                  <p>
                    Welcome to Jurnal Harian Regional. By accessing or using our website, you agree to be bound by these Terms of Service and our Privacy Policy. If you disagree with any part of these terms, you may not access our service.
                  </p>
                </section>
                
                <section>
                  <h2 className="text-xl font-medium mb-3 font-serif">Intellectual Property</h2>
                  <p className="mb-3">
                    All content published in our journals, including but not limited to articles, papers, research findings, graphics, logos, and software, is protected by copyright and intellectual property laws.
                  </p>
                  <p className="mb-3">
                    Unless otherwise stated, authors retain copyright of their work while granting Jurnal Harian Regional specific publication rights as detailed in our Publication Agreement. Published works are typically made available under one of the following arrangements:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Open Access:</strong> Content may be made available under Creative Commons licenses, allowing various degrees of use, sharing, and adaptation with proper attribution.</li>
                    <li><strong>Subscription Access:</strong> Content may be restricted to subscribers or institutional users, with limited rights for copying and distribution in accordance with fair use principles.</li>
                  </ul>
                  <p className="mt-3">
                    Unauthorized use, reproduction, or distribution of our content may violate copyright, trademark, and other laws.
                  </p>
                </section>
                
                <section>
                  <h2 className="text-xl font-medium mb-3 font-serif">User Accounts</h2>
                  <p className="mb-3">
                    Certain features of our service may require registration and maintenance of an account. You are responsible for:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Providing accurate, current, and complete information during registration</li>
                    <li>Maintaining the confidentiality of your account credentials</li>
                    <li>All activities that occur under your account</li>
                    <li>Notifying us immediately of any unauthorized use of your account or any other security breach</li>
                  </ul>
                  <p className="mt-3">
                    We reserve the right to terminate or suspend accounts that violate these terms or engage in any prohibited activities.
                  </p>
                </section>
                
                <section>
                  <h2 className="text-xl font-medium mb-3 font-serif">Academic Integrity and Content Standards</h2>
                  <p className="mb-3">
                    All submissions to our journals must adhere to the highest standards of academic integrity. The following are strictly prohibited:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Plagiarism in any form</li>
                    <li>Fabrication or falsification of data or results</li>
                    <li>Duplicate publication or self-plagiarism without proper disclosure</li>
                    <li>Unauthorized use of others' intellectual property</li>
                    <li>Content that is defamatory, discriminatory, or violates privacy rights</li>
                    <li>Content that violates any applicable laws or regulations</li>
                  </ul>
                </section>
                
                <section>
                  <h2 className="text-xl font-medium mb-3 font-serif">Peer Review Process</h2>
                  <p>
                    Our journals employ a rigorous peer review process to ensure the quality and integrity of published work. Reviewers and editors agree to evaluate submissions fairly, maintain confidentiality, disclose conflicts of interest, and provide constructive feedback within established timeframes.
                  </p>
                </section>
                
                <section>
                  <h2 className="text-xl font-medium mb-3 font-serif">Limitation of Liability</h2>
                  <p>
                    To the fullest extent permitted by applicable law, Jurnal Harian Regional and its affiliates, officers, directors, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, use, or goodwill, arising out of or in connection with your use of our service, whether based on contract, tort, negligence, strict liability, or otherwise.
                  </p>
                </section>
                
                <section>
                  <h2 className="text-xl font-medium mb-3 font-serif">Governing Law</h2>
                  <p>
                    These Terms shall be governed by and construed in accordance with the laws of Indonesia, without regard to its conflict of law provisions. Any legal action or proceeding arising out of these Terms shall be brought exclusively in the courts located in Bekasi, Indonesia.
                  </p>
                </section>
                
                <section>
                  <h2 className="text-xl font-medium mb-3 font-serif">Changes to Terms</h2>
                  <p>
                    We reserve the right to modify or replace these Terms at any time. Material changes will be notified to users through our website or via email. Your continued use of the service after such modifications constitutes your acceptance of the revised Terms.
                  </p>
                </section>
              </div>
              
              <Separator className="my-8" />
              
              <div className="text-center">
                <p className="text-muted-foreground">
                  If you have any questions about these Terms, please <a href="/contact" className="text-primary hover:underline">contact us</a>.
                </p>
              </div>
            </div>
          </Container>
        </main>
        <Footer />
      </PageTransition>
    </PageContentWrapper>
  );
};

export default Terms;
