
import React from "react";
import { Container, Header, Footer, PageTransition, PageContentWrapper } from "@/components";
import { Separator } from "@/components/ui/separator";

const Privacy = () => {
  return (
    <PageContentWrapper>
      <PageTransition>
        <Header />
        <main id="main-content" className="flex-1">
          <Container size="default" className="py-12">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-3xl font-serif font-bold mb-6">Privacy Policy</h1>
              <p className="text-muted-foreground mb-6">Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>
              
              <Separator className="my-6" />
              
              <div className="space-y-6 text-base leading-relaxed">
                <section>
                  <h2 className="text-xl font-medium mb-3 font-serif">Introduction</h2>
                  <p>
                    Jurnal Harian Regional ("we," "our," or "us") is committed to protecting your privacy and handling your personal data with transparency. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this policy carefully to understand our practices regarding your personal data.
                  </p>
                </section>
                
                <section>
                  <h2 className="text-xl font-medium mb-3 font-serif">Information We Collect</h2>
                  <p className="mb-3">
                    We collect several types of information from and about users of our services, including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Personal Identifiable Information:</strong> Name, email address, institutional affiliation, and academic credentials when you create an account, submit articles, or contact us.</li>
                    <li><strong>Usage Data:</strong> Information about how you access and use our website, including browsing patterns, search queries, page views, and time spent on pages.</li>
                    <li><strong>Technical Data:</strong> IP address, browser type and version, device information, operating system, and other technology identifiers on your devices.</li>
                    <li><strong>Citation and Research Data:</strong> Information related to your research interests, citation patterns, and academic publications.</li>
                  </ul>
                </section>
                
                <section>
                  <h2 className="text-xl font-medium mb-3 font-serif">How We Use Your Information</h2>
                  <p className="mb-3">We use the information we collect for various purposes, including:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Providing, maintaining, and improving our academic journal repository</li>
                    <li>Processing article submissions, peer reviews, and publications</li>
                    <li>Personalizing your experience and delivering content relevant to your research interests</li>
                    <li>Sending notifications, updates, and communications about our services</li>
                    <li>Analyzing usage patterns to enhance website functionality and user experience</li>
                    <li>Preventing fraud and ensuring the security of our platform</li>
                    <li>Complying with legal obligations and academic publishing standards</li>
                  </ul>
                </section>
                
                <section>
                  <h2 className="text-xl font-medium mb-3 font-serif">Data Sharing and Disclosure</h2>
                  <p className="mb-3">
                    We may share your information with:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Academic Partners:</strong> Institutions, libraries, and other academic repositories with whom we collaborate.</li>
                    <li><strong>Service Providers:</strong> Third parties that perform services on our behalf, such as hosting, data analysis, and customer service.</li>
                    <li><strong>Legal Authorities:</strong> When required by law, court order, or governmental regulation.</li>
                    <li><strong>With Your Consent:</strong> We may share your information with third parties when you explicitly consent to such sharing.</li>
                  </ul>
                  <p className="mt-3">
                    We do not sell personal information to third parties for marketing or advertising purposes.
                  </p>
                </section>
                
                <section>
                  <h2 className="text-xl font-medium mb-3 font-serif">Your Rights and Choices</h2>
                  <p className="mb-3">
                    Depending on your location, you may have rights regarding your personal data, including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Accessing, correcting, or deleting your personal information</li>
                    <li>Objecting to or restricting certain processing activities</li>
                    <li>Data portability</li>
                    <li>Withdrawing consent for optional processing</li>
                  </ul>
                  <p className="mt-3">
                    To exercise these rights, please contact us using the information provided in the "Contact Us" section.
                  </p>
                </section>
                
                <section>
                  <h2 className="text-xl font-medium mb-3 font-serif">Security Measures</h2>
                  <p>
                    We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
                  </p>
                </section>
                
                <section>
                  <h2 className="text-xl font-medium mb-3 font-serif">International Data Transfers</h2>
                  <p>
                    As an international academic repository, your information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws. We ensure that appropriate safeguards are in place to protect your information in compliance with applicable laws.
                  </p>
                </section>
                
                <section>
                  <h2 className="text-xl font-medium mb-3 font-serif">Changes to This Privacy Policy</h2>
                  <p>
                    We may update this Privacy Policy periodically to reflect changes in our practices or for legal, operational, or regulatory reasons. We will post the revised policy on this page with an updated "Last updated" date. We encourage you to review this policy regularly.
                  </p>
                </section>
              </div>
              
              <Separator className="my-8" />
              
              <div className="text-center">
                <p className="text-muted-foreground">
                  If you have any questions about this Privacy Policy, please <a href="/contact" className="text-primary hover:underline">contact us</a>.
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

export default Privacy;
