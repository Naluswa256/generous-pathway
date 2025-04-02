
import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Clock, Calendar, ChevronLeft, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import { blogPosts, BlogPost } from "@/data/blog-data";
import { Button } from "@/components/ui/button";
import { CTAButton } from "@/components/ui/cta-button";
import { BlogCard } from "@/components/blog/blog-card";

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    // Find the post with matching slug
    const foundPost = blogPosts.find(p => p.slug === slug);
    
    if (foundPost) {
      setPost(foundPost);
      
      // Set page title
      document.title = `${foundPost.title} | Sharing is Caring`;
      
      // Find related posts (same category, excluding current post)
      const related = blogPosts
        .filter(p => p.category === foundPost.category && p.id !== foundPost.id)
        .slice(0, 3);
      setRelatedPosts(related);
    } else {
      // Redirect to blog listing if post not found
      navigate("/blog");
    }
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [slug, navigate]);
  
  if (!post) {
    return null; // Could add a loading state here
  }
  
  const formattedDate = new Date(post.publishedDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long", 
    day: "numeric"
  });
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero section */}
        <div className="relative h-[50vh] min-h-[400px]">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${post.coverImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30" />
          
          <div className="container mx-auto h-full flex flex-col justify-end pb-8 relative z-10 px-4">
            <Link to="/blog" className="text-white flex items-center mb-6 hover:underline w-fit">
              <ChevronLeft className="w-4 h-4 mr-1" />
              Back to all articles
            </Link>
            <Badge className="mb-4 bg-charity-blue hover:bg-blue-600">{post.category}</Badge>
            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-4 max-w-4xl">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-white/90">
              <div className="flex items-center">
                <Avatar className="h-10 w-10 mr-3 border-2 border-white/20">
                  <AvatarImage src={post.author.avatar} alt={post.author.name} />
                  <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{post.author.name}</p>
                  <p className="text-sm text-white/70">{post.author.role}</p>
                </div>
              </div>
              
              <div className="flex items-center text-white/80">
                <Calendar className="w-4 h-4 mr-1" />
                <span>{formattedDate}</span>
              </div>
              
              <div className="flex items-center text-white/80">
                <Clock className="w-4 h-4 mr-1" />
                <span>{post.readTime} min read</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Content section */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
              
              {/* Tags */}
              <div className="mt-8 pt-8 border-t">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map(tag => (
                    <Badge key={tag} variant="outline" className="bg-gray-100">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              
              {/* Share */}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <span className="font-medium flex items-center">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share this article:
                </span>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Facebook className="h-4 w-4" />
                    <span className="sr-only">Share on Facebook</span>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Twitter className="h-4 w-4" />
                    <span className="sr-only">Share on Twitter</span>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">Share on LinkedIn</span>
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              {/* About the author */}
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="font-bold text-lg mb-4">About the Author</h3>
                <div className="flex items-start">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src={post.author.avatar} alt={post.author.name} />
                    <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-bold">{post.author.name}</h4>
                    <p className="text-muted-foreground mb-2">{post.author.role}</p>
                    <p className="text-sm">Dedicated team member working to improve lives through sustainable community initiatives in Uganda.</p>
                  </div>
                </div>
              </div>
              
              {/* Donation CTA */}
              <div className="bg-charity-blue text-white p-6 rounded-lg mb-8">
                <h3 className="font-bold text-xl mb-3">Support Our Mission</h3>
                <p className="mb-4">Your donation helps us continue our work with those who need it most.</p>
                <CTAButton 
                  className="w-full bg-white text-charity-blue hover:bg-gray-100" 
                  onClick={() => navigate("/donate")}
                >
                  Donate Now
                </CTAButton>
              </div>
            </div>
          </div>
          
          {/* Related posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedPosts.map(relatedPost => (
                  <BlogCard key={relatedPost.id} post={relatedPost} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default BlogPostPage;
