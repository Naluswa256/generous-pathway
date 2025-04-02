
import React from "react";
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";

interface SocialLink {
  name: string;
  icon: React.ReactNode;
  url: string;
  color: string;
}

export function SocialConnect() {
  const socialLinks: SocialLink[] = [
    {
      name: "Facebook",
      icon: <Facebook size={24} />,
      url: "https://facebook.com",
      color: "bg-[#1877F2] hover:bg-[#0E65D9]"
    },
    {
      name: "Instagram",
      icon: <Instagram size={24} />,
      url: "https://instagram.com",
      color: "bg-[#E4405F] hover:bg-[#D32E56]"
    },
    {
      name: "Twitter",
      icon: <Twitter size={24} />,
      url: "https://twitter.com",
      color: "bg-[#1DA1F2] hover:bg-[#0D8ECB]"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={24} />,
      url: "https://linkedin.com",
      color: "bg-[#0A66C2] hover:bg-[#074E96]"
    },
    {
      name: "YouTube",
      icon: <Youtube size={24} />,
      url: "https://youtube.com",
      color: "bg-[#FF0000] hover:bg-[#D60000]"
    }
  ];
  
  return (
    <div className="py-10 bg-blue-50 rounded-xl">
      <h2 className="text-2xl font-bold text-center mb-8">Connect With Us on Social Media</h2>
      
      <div className="flex flex-wrap justify-center gap-6">
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${social.color} text-white p-5 rounded-full transition-all duration-300 hover:scale-110 shadow-md`}
            aria-label={`Follow us on ${social.name}`}
          >
            {social.icon}
          </a>
        ))}
      </div>
      
      <p className="text-center text-muted-foreground mt-8 max-w-xl mx-auto px-4">
        Follow us on social media to stay updated on our latest initiatives, events, and stories of impact. Join our community of changemakers!
      </p>
    </div>
  );
}
