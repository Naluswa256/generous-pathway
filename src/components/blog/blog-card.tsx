
import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Clock, Calendar } from "lucide-react";
import { BlogPost } from "@/data/blog-data";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface BlogCardProps {
  post: BlogPost;
  className?: string;
  featured?: boolean;
}

export function BlogCard({ post, className, featured = false }: BlogCardProps) {
  const formattedDate = new Date(post.publishedDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  
  return (
    <Link to={`/blog/${post.slug}`} className={cn("block transform transition-all duration-300 hover:-translate-y-1", className)}>
      <Card className={cn(
        "h-full overflow-hidden transition-shadow hover:shadow-lg", 
        featured && "border-charity-blue"
      )}>
        <div className="aspect-video overflow-hidden">
          <img 
            src={post.coverImage} 
            alt={post.title}
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105" 
          />
        </div>
        
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start mb-2">
            <Badge variant="outline" className="bg-charity-blue/10 text-charity-blue hover:bg-charity-blue/20">
              {post.category}
            </Badge>
            <div className="flex items-center text-muted-foreground text-sm">
              <Clock className="w-4 h-4 mr-1" />
              <span>{post.readTime} min read</span>
            </div>
          </div>
          
          <h3 className={cn(
            "font-bold line-clamp-2 transition-colors hover:text-charity-blue", 
            featured ? "text-xl md:text-2xl" : "text-lg"
          )}>
            {post.title}
          </h3>
        </CardHeader>
        
        <CardContent>
          <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
        </CardContent>
        
        <CardFooter className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src={post.author.avatar} alt={post.author.name} />
              <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="text-sm">
              <p className="font-medium">{post.author.name}</p>
              <p className="text-xs text-muted-foreground">{post.author.role}</p>
            </div>
          </div>
          
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="w-4 h-4 mr-1" />
            <span>{formattedDate}</span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
