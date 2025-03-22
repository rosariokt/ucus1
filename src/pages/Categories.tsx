
import React, { useState, useEffect, lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { Container, Header, Footer, PageTransition } from "@/components";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

import { 
  CategorySearch, 
  ViewModeToggle, 
  CategoriesTabContent,
  CategoriesData
} from "@/components/categories";

// Lazy load AdSense component to avoid hydration issues
const LazyAdSense = lazy(() => import('@/components/ads/AdSense'));

// Placeholder component for SSR
const AdPlaceholder = ({ className, height = "90px" }: { className?: string, height?: string }) => (
  <div className={`bg-muted/20 rounded flex items-center justify-center ${className}`} style={{ height }}>
    <span className="text-xs text-muted-foreground">Advertisement</span>
  </div>
);

const Categories = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [isMounted, setIsMounted] = useState(false);
  
  // Only set the mounted state on the client side
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  // Filter categories based on search
  const filteredCategories = CategoriesData.allCategories.filter(category => 
    category.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        
        {/* Top Ad - Ensure consistent rendering between server and client */}
        {isMounted ? (
          <Suspense fallback={<AdPlaceholder className="my-4 mx-auto" />}>
            <LazyAdSense 
              position="content-top"
              slot="1234567890"
              format="horizontal"
              size="728x90"
              className="my-4 mx-auto"
            />
          </Suspense>
        ) : (
          <AdPlaceholder className="my-4 mx-auto" />
        )}
        
        <main id="main-content" className="flex-1 py-12" tabIndex={-1}>
          <Container>
            <Breadcrumb className="mb-6">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>All Categories</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <div className="mb-8">
              <h1 className="text-3xl font-serif font-bold tracking-tight">
                Academic Journals & Publications
              </h1>
              <p className="text-muted-foreground mt-2">
                Browse all available academic journal categories
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Main content with categories */}
              <div className="md:col-span-3">
                <div className="bg-card border rounded-lg p-6 mb-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <CategorySearch 
                      searchQuery={searchQuery} 
                      setSearchQuery={setSearchQuery} 
                    />
                    
                    <ViewModeToggle 
                      viewMode={viewMode} 
                      setViewMode={setViewMode} 
                    />
                  </div>
                  
                  <Tabs defaultValue="all" className="w-full">
                    <TabsList className="mb-6">
                      <TabsTrigger value="all">All Categories</TabsTrigger>
                      <TabsTrigger value="featured">Featured</TabsTrigger>
                    </TabsList>
                    
                    {/* In-feed Ad - Consistent rendering between server and client */}
                    {isMounted ? (
                      <Suspense fallback={<AdPlaceholder className="mb-6 mx-auto md:hidden" height="250px" />}>
                        <LazyAdSense 
                          position="in-feed"
                          slot="9988776655"
                          format="rectangle"
                          size="300x250"
                          className="mb-6 mx-auto md:hidden"
                        />
                      </Suspense>
                    ) : (
                      <AdPlaceholder className="mb-6 mx-auto md:hidden" height="250px" />
                    )}
                    
                    <TabsContent value="all" className="mt-0">
                      <CategoriesTabContent 
                        tabValue="all"
                        viewMode={viewMode} 
                        filteredCategories={filteredCategories}
                        featuredCategories={CategoriesData.featuredCategories}
                      />
                    </TabsContent>
                    
                    <TabsContent value="featured" className="mt-0">
                      <CategoriesTabContent 
                        tabValue="featured"
                        viewMode={viewMode} 
                        filteredCategories={filteredCategories}
                        featuredCategories={CategoriesData.featuredCategories}
                      />
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
              
              {/* Sidebar Ad Column - Consistent rendering between server and client */}
              <div className="hidden md:block">
                {isMounted ? (
                  <Suspense fallback={<AdPlaceholder className="sticky top-20" height="600px" />}>
                    <LazyAdSense 
                      position="sticky-sidebar"
                      slot="2233445566"
                      format="vertical"
                      size="300x600"
                      className="sticky top-20"
                    />
                  </Suspense>
                ) : (
                  <AdPlaceholder className="sticky top-20" height="600px" />
                )}
              </div>
            </div>
          </Container>
        </main>
        
        {/* Bottom Sticky Ad - High visibility on mobile */}
        {isMounted ? (
          <Suspense fallback={<AdPlaceholder className="md:hidden" height="100px" />}>
            <LazyAdSense 
              position="sticky-bottom"
              slot="6655443322"
              format="horizontal"
              size="320x100"
              className="md:hidden"
            />
          </Suspense>
        ) : (
          <AdPlaceholder className="md:hidden" height="100px" />
        )}
        
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Categories;
