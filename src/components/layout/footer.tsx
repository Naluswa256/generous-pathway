
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-charity-dark text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-2xl mb-4">SIC</h3>
            <p className="text-gray-300 mb-4">
              Supporting communities and empowering individuals through sustainable initiatives and charitable work.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
              <li><Link to="/what-we-do" className="text-gray-300 hover:text-white">What We Do</Link></li>
              <li><Link to="/how-we-started" className="text-gray-300 hover:text-white">How We Started</Link></li>
              <li><Link to="/news" className="text-gray-300 hover:text-white">News</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Our Work</h4>
            <ul className="space-y-2">
              <li><Link to="/events" className="text-gray-300 hover:text-white">Upcoming Events</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-white">Blogs</Link></li>
              <li><Link to="/donate" className="text-gray-300 hover:text-white">Your Donation</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white">Connect With Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <address className="not-italic text-gray-300">
              <p>123 Charity Lane</p>
              <p>Kampala, Uganda</p>
              <p className="mt-2">Email: info@sicuganda.org</p>
              <p>Phone: (256) 123-4567</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} SIC Uganda. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
