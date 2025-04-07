
import { Suspense, lazy, useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoadingSpinner } from "./components/ui/loading-spinner";

// Lazy load all pages for better performance
const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const WhatWeDo = lazy(() => import("./pages/WhatWeDo"));
const News = lazy(() => import("./pages/News"));
const NewsItem = lazy(() => import("./pages/NewsItem"));
const HowWeStarted = lazy(() => import("./pages/HowWeStarted"));
const Events = lazy(() => import("./pages/Events"));
const EventDetail = lazy(() => import("./pages/EventDetail"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Contact = lazy(() => import("./pages/Contact"));
const Donate = lazy(() => import("./pages/Donate"));
const NotFound = lazy(() => import("./pages/NotFound"));

const App = () => {
  // Create QueryClient inside the component
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false, // Reduces unnecessary refetching
        staleTime: 5 * 60 * 1000, // 5 minutes
      },
    },
  }));

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/what-we-do" element={<WhatWeDo />} />
              <Route path="/news" element={<News />} />
              <Route path="/news/:slug" element={<NewsItem />} />
              <Route path="/how-we-started" element={<HowWeStarted />} />
              <Route path="/events" element={<Events />} />
              <Route path="/events/:id" element={<EventDetail />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/donate" element={<Donate />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
