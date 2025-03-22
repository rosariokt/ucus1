
import React, { useState } from "react";
import { Container, Header, Footer, PageTransition, PageContentWrapper } from "@/components";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CheckIcon, Mail, MapPin, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    inquiryType: "general",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (value: string) => {
    setFormData(prev => ({ ...prev, inquiryType: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "Thank you for contacting us. We'll respond shortly.",
        variant: "default",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        inquiryType: "general",
        message: ""
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <PageContentWrapper>
      <PageTransition>
        <Header />
        <main id="main-content" className="flex-1">
          <Container size="default" className="py-12">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Contact Form */}
              <div className="md:col-span-2">
                <h1 className="text-3xl font-serif font-bold mb-6">Contact Us</h1>
                <p className="text-muted-foreground mb-8">
                  Have questions about our journals, submission process, or academic resources? We're here to help. Fill out the form below and we'll get back to you as soon as possible.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="What is your inquiry about?"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <Label>Inquiry Type</Label>
                    <RadioGroup 
                      defaultValue="general" 
                      value={formData.inquiryType}
                      onValueChange={handleRadioChange}
                      className="flex flex-col space-y-1"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="general" id="general" />
                        <Label htmlFor="general" className="cursor-pointer">General Inquiry</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="submission" id="submission" />
                        <Label htmlFor="submission" className="cursor-pointer">Article Submission</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="technical" id="technical" />
                        <Label htmlFor="technical" className="cursor-pointer">Technical Support</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="academic" id="academic" />
                        <Label htmlFor="academic" className="cursor-pointer">Academic Collaboration</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Please provide details about your inquiry..."
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      required
                      className="resize-none"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full sm:w-auto" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>Sending Message...</>
                    ) : (
                      <>Send Message</>
                    )}
                  </Button>
                </form>
              </div>
              
              {/* Contact Information */}
              <div>
                <h2 className="text-xl font-serif font-medium mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-primary/10 p-2 rounded-full mt-1">
                          <Mail className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium mb-1">Email</h3>
                          <p className="text-muted-foreground text-sm mb-2">For general inquiries:</p>
                          <a href="mailto:jurnal@harianregional.com" className="text-primary hover:underline">
                            jurnal@harianregional.com
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-primary/10 p-2 rounded-full mt-1">
                          <Phone className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium mb-1">Phone</h3>
                          <p className="text-muted-foreground text-sm mb-2">Monday to Friday, 9am-5pm WIB</p>
                          <p className="text-primary">+62 859-2052-8697</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-primary/10 p-2 rounded-full mt-1">
                          <MapPin className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium mb-1">Office Address</h3>
                          <p className="text-muted-foreground text-sm mb-2">Editorial Office:</p>
                          <address className="not-italic text-sm">
                            Kayuringin Jaya, Kec. Bekasi Sel.,<br />
                            Kota Bks, Jawa Barat 17144<br />
                            Indonesia
                          </address>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <Separator className="my-8" />
                
                <div>
                  <h3 className="text-lg font-medium mb-4">Submission Guidelines</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    For article submissions, please review our submission guidelines before contacting us:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <CheckIcon className="h-4 w-4 text-primary mr-2 mt-0.5" />
                      <span>Articles must follow our citation guidelines</span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon className="h-4 w-4 text-primary mr-2 mt-0.5" />
                      <span>Include all authors and their affiliations</span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon className="h-4 w-4 text-primary mr-2 mt-0.5" />
                      <span>Submit abstract in both English and Bahasa Indonesia</span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon className="h-4 w-4 text-primary mr-2 mt-0.5" />
                      <span>Use the provided manuscript template</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Container>
        </main>
        <Footer />
      </PageTransition>
    </PageContentWrapper>
  );
};

export default Contact;
