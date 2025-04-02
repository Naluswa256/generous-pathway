
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Play, Image } from "lucide-react";

interface GalleryItem {
  id: string;
  type: 'image' | 'video';
  thumbnail: string;
  content: string;
  title: string;
  location: string;
  year: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: '1',
    type: 'image',
    thumbnail: 'https://images.unsplash.com/photo-1540422454399-841d1dd15924?q=80&w=800&auto=format&fit=crop',
    content: 'https://images.unsplash.com/photo-1540422454399-841d1dd15924?q=80&w=1200&auto=format&fit=crop',
    title: 'New School Opening',
    location: 'Mbarara District',
    year: '2023'
  },
  {
    id: '2',
    type: 'video',
    thumbnail: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop',
    content: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // In a real application, this would be a real video URL
    title: 'Clean Water Project',
    location: 'Kampala',
    year: '2023'
  },
  {
    id: '3',
    type: 'image',
    thumbnail: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop',
    content: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop',
    title: 'Vocational Training for Women',
    location: 'Jinja',
    year: '2022'
  },
  {
    id: '4',
    type: 'image',
    thumbnail: 'https://images.unsplash.com/photo-1526976668912-1a811878dd37?q=80&w=800&auto=format&fit=crop',
    content: 'https://images.unsplash.com/photo-1526976668912-1a811878dd37?q=80&w=1200&auto=format&fit=crop',
    title: 'Healthcare Outreach',
    location: 'Gulu District',
    year: '2023'
  },
  {
    id: '5',
    type: 'video',
    thumbnail: 'https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?q=80&w=800&auto=format&fit=crop',
    content: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // In a real application, this would be a real video URL
    title: 'Orphan Support Program',
    location: 'Entebbe',
    year: '2022'
  },
  {
    id: '6',
    type: 'image',
    thumbnail: 'https://images.unsplash.com/photo-1524069290683-90db27f83ea3?q=80&w=800&auto=format&fit=crop',
    content: 'https://images.unsplash.com/photo-1524069290683-90db27f83ea3?q=80&w=1200&auto=format&fit=crop',
    title: 'Food Distribution',
    location: 'Soroti',
    year: '2023'
  }
];

export function DonationImpactGallery() {
  const [filter, setFilter] = useState<'all' | 'image' | 'video'>('all');
  
  const filteredItems = galleryItems.filter(item => 
    filter === 'all' ? true : item.type === filter
  );
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">Impact Gallery</h2>
        <p className="text-xl text-center text-muted-foreground mb-8 max-w-3xl mx-auto">
          See the real impact of your donations through our photos and videos
        </p>
        
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md bg-muted p-1 text-muted-foreground">
            <button
              className={`px-4 py-2 rounded-sm text-sm font-medium transition-colors ${filter === 'all' ? 'bg-background text-foreground' : ''}`}
              onClick={() => setFilter('all')}
            >
              All
            </button>
            <button
              className={`px-4 py-2 rounded-sm text-sm font-medium transition-colors ${filter === 'image' ? 'bg-background text-foreground' : ''}`}
              onClick={() => setFilter('image')}
            >
              Photos
            </button>
            <button
              className={`px-4 py-2 rounded-sm text-sm font-medium transition-colors ${filter === 'video' ? 'bg-background text-foreground' : ''}`}
              onClick={() => setFilter('video')}
            >
              Videos
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map(item => (
            <GalleryCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function GalleryCard({ item }: { item: GalleryItem }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="rounded-lg overflow-hidden shadow-md bg-white cursor-pointer transform transition-all duration-300 hover:shadow-xl hover:scale-[1.02] animate-fade-in">
          <div className="relative">
            <AspectRatio ratio={16 / 9}>
              <img 
                src={item.thumbnail} 
                alt={item.title} 
                className="object-cover w-full h-full"
              />
            </AspectRatio>
            {item.type === 'video' && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <div className="w-16 h-16 rounded-full bg-white/80 flex items-center justify-center">
                  <Play className="w-8 h-8 text-charity-blue ml-1" />
                </div>
              </div>
            )}
            <Badge 
              variant={item.type === 'video' ? 'secondary' : 'default'} 
              className="absolute top-3 left-3"
            >
              {item.type === 'image' ? <Image className="w-3 h-3 mr-1" /> : <Play className="w-3 h-3 mr-1" />}
              {item.type === 'image' ? 'Photo' : 'Video'}
            </Badge>
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
            <p className="text-sm text-muted-foreground">
              {item.location}, {item.year}
            </p>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-4xl">
        {item.type === 'image' ? (
          <img src={item.content} alt={item.title} className="w-full rounded-md" />
        ) : (
          <div className="relative pt-[56.25%]">
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-md"
              src={item.content}
              title={item.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}
        <div className="mt-2">
          <h3 className="text-xl font-semibold">{item.title}</h3>
          <p className="text-muted-foreground">
            {item.location}, {item.year}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
