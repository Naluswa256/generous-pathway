import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { Calendar, ChevronLeft, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTAButton } from "@/components/ui/cta-button";

interface NewsItem {
  id: number;
  title: string;
  date: string;
  image: string;
  summary: string;
  category: string;
  slug: string;
  content?: string;
}

const getNewsItems = (): NewsItem[] => [
  {
    id: 1,
    title: "Clean Water Project Completed in Kampala",
    date: "June 15, 2023",
    image: "https://images.unsplash.com/photo-1555896917-d0a5f5a32186?q=80&w=2070&auto=format&fit=crop",
    summary: "SIC has successfully completed a new water borehole project providing clean water to over 500 families in the outskirts of Kampala. The project, which took three months to complete, will significantly reduce waterborne diseases in the community.",
    category: "Projects",
    slug: "clean-water-project-completed",
    content: `
      <p>We are thrilled to announce the successful completion of our clean water project in the outskirts of Kampala. This initiative, which has been in the works for over three months, has finally come to fruition, bringing reliable access to clean water to over 500 families.</p>
      
      <h2>The Challenge</h2>
      <p>For years, families in this community had to walk several kilometers each day to fetch water from contaminated sources. This not only took time away from education and income-generating activities but also exposed them to waterborne diseases.</p>
      
      <h2>Our Solution</h2>
      <p>Through the generous support of our donors, we were able to drill a deep borehole and install a solar-powered pumping system. This sustainable solution provides clean water without the need for costly electricity or fuel.</p>
      
      <p>The water point includes:</p>
      <ul>
        <li>A 100-meter deep borehole</li>
        <li>Solar-powered pumping system</li>
        <li>10,000-liter storage tank</li>
        <li>Six water distribution points throughout the community</li>
        <li>Water quality monitoring equipment</li>
      </ul>
      
      <h2>Community Involvement</h2>
      <p>Community ownership is crucial for the sustainability of this project. We worked closely with local leaders to establish a water management committee that will oversee the maintenance and operation of the water system. Community members have been trained in basic maintenance and water testing procedures.</p>
      
      <h2>Impact</h2>
      <p>The immediate impact of this project includes:</p>
      <ul>
        <li>Reduction in time spent collecting water (from 3+ hours to just minutes)</li>
        <li>Decrease in waterborne diseases</li>
        <li>Increased school attendance, especially for girls who were often responsible for water collection</li>
        <li>Economic opportunities as community members have more time for productive activities</li>
      </ul>
      
      <p>Mrs. Nakato, a community elder, shared: "This water point has changed our lives. My grandchildren no longer miss school to fetch water, and I've seen fewer children getting sick in our community."</p>
      
      <h2>Looking Forward</h2>
      <p>This is just one of several water projects we plan to implement in the coming year. With continued support, we aim to bring clean water to five more communities by the end of 2024.</p>
      
      <p>We extend our heartfelt thanks to all donors and partners who made this project possible. Your generosity has transformed lives and will continue to do so for generations to come.</p>
    `
  },
  {
    id: 2,
    title: "Education Support for 120 Orphans",
    date: "August 3, 2023",
    image: "https://images.unsplash.com/photo-1534373722076-83c4990c34c1?q=80&w=2070&auto=format&fit=crop",
    summary: "Our latest education initiative has provided schooling materials and uniforms to 120 orphaned children in rural Uganda. These supplies will ensure they can continue their education despite challenging circumstances.",
    category: "Education",
    slug: "education-support-orphans",
    content: `
      <p>Education is a fundamental right, yet for many orphaned children in Uganda, accessing quality education remains a challenge. Through our recent initiative, SIC has been able to provide comprehensive educational support to 120 orphaned children across rural Uganda.</p>
      
      <h2>The Need</h2>
      <p>Many orphaned children in Uganda face significant barriers to education, including:</p>
      <ul>
        <li>Inability to afford school fees and materials</li>
        <li>Lack of proper uniforms</li>
        <li>Limited support for homework and academic progress</li>
        <li>Psychosocial challenges that affect learning</li>
      </ul>
      
      <h2>Our Response</h2>
      <p>Our comprehensive support package included:</p>
      <ul>
        <li>School uniforms for all 120 children</li>
        <li>Textbooks and exercise books</li>
        <li>Mathematical sets, pens, pencils, and other stationery</li>
        <li>School bags</li>
        <li>Payment of school fees for one academic year</li>
        <li>Mentorship program pairing children with local role models</li>
      </ul>
      
      <h2>Distribution Day</h2>
      <p>The joy on the children's faces as they received their new uniforms and supplies was indescribable. Many expressed that this was the first time they had owned a complete set of school materials.</p>
      
      <p>Twelve-year-old David said, "I am so happy to have my own books. Before, I had to share with friends or miss taking notes. Now I can study better and improve my grades."</p>
      
      <h2>Beyond Material Support</h2>
      <p>Our program goes beyond providing material items. We've established an after-school program where children receive homework help and participate in activities designed to build confidence and social skills.</p>
      
      <p>Additionally, our team conducts regular home visits to check on the children's well-being and academic progress, ensuring that caregivers are engaged in supporting the children's education.</p>
      
      <h2>Sustainable Impact</h2>
      <p>We believe in creating sustainable change, which is why we're also working with local schools to build their capacity to support vulnerable children in the long term. This includes teacher training on inclusive education and establishing school-based support groups.</p>
      
      <h2>Join Us</h2>
      <p>Education is a powerful tool for breaking the cycle of poverty. With your support, we can expand this program to reach more orphaned children across Uganda.</p>
    `
  },
  {
    id: 3,
    title: "Medical Outreach for Elderly in Rural Communities",
    date: "October 12, 2023",
    image: "https://images.unsplash.com/photo-1536247412572-7aa586a94b86?q=80&w=2070&auto=format&fit=crop",
    summary: "Medical teams visited a total of 5 rural villages to provide essential healthcare to elderly grandparents who often lack access to basic medical services. The team conducted health screenings and distributed needed medications.",
    category: "Healthcare",
    slug: "medical-outreach-elderly",
    content: `
      <p>Access to healthcare remains a significant challenge for elderly individuals in rural Uganda, particularly those who are caring for orphaned grandchildren. Our recent medical outreach initiative targeted these vulnerable elders across five remote villages.</p>
      
      <h2>The Healthcare Gap</h2>
      <p>In many rural communities, elderly individuals face multiple barriers to accessing healthcare:</p>
      <ul>
        <li>Distance to health facilities (often 10+ km away)</li>
        <li>Inability to afford transportation</li>
        <li>Chronic conditions that limit mobility</li>
        <li>Caregiving responsibilities for grandchildren</li>
        <li>Limited knowledge about managing age-related health conditions</li>
      </ul>
      
      <h2>Our Intervention</h2>
      <p>Our mobile medical team, consisting of doctors, nurses, and community health workers, visited five rural villages over the course of two weeks. The comprehensive services provided included:</p>
      <ul>
        <li>General health check-ups</li>
        <li>Blood pressure monitoring</li>
        <li>Blood glucose testing for diabetes</li>
        <li>Vision screening</li>
        <li>Malaria testing</li>
        <li>Distribution of essential medications</li>
        <li>Provision of assistive devices (walking sticks, reading glasses)</li>
        <li>Health education sessions</li>
      </ul>
      
      <h2>Impact in Numbers</h2>
      <p>Our outreach program achieved significant results:</p>
      <ul>
        <li>278 elderly individuals received medical care</li>
        <li>85 were diagnosed with previously undetected hypertension</li>
        <li>42 received reading glasses</li>
        <li>118 received medication for various chronic conditions</li>
        <li>32 were referred for specialized care at district hospitals</li>
        <li>All participants received health education on nutrition, exercise, and disease prevention</li>
      </ul>
      
      <h2>Personal Transformations</h2>
      <p>Grandmother Akello, 72, who cares for four grandchildren, shared: "For three years, I've had pain in my joints that made it hard to work in my garden. The doctor gave me medicine that has already started to help. Now I can better care for my grandchildren."</p>
      
      <h2>Sustainable Healthcare</h2>
      <p>Beyond the immediate medical care, we've trained community health workers in each village to conduct regular follow-ups with elderly residents. These health workers will monitor medication adherence, provide basic health education, and alert our team when more serious medical attention is needed.</p>
      
      <h2>Moving Forward</h2>
      <p>We plan to conduct these outreach clinics quarterly, ensuring continuity of care for these vulnerable elders. Additionally, we're working with district health officials to improve the regular healthcare system's responsiveness to elderly patients' needs.</p>
    `
  },
  {
    id: 4,
    title: "Vocational Training for Disabled Youth",
    date: "February 8, 2024",
    image: "https://images.unsplash.com/photo-1522101076466-a379a545f2b3?q=80&w=2070&auto=format&fit=crop",
    summary: "25 disabled youth have completed vocational training in tailoring and crafts to help them earn a living. The six-month program equips them with practical skills for self-employment and financial independence.",
    category: "Vocational Training",
    slug: "vocational-training-disabled-youth",
    content: `
      <p>SIC Uganda is proud to announce the successful conclusion of our intensive vocational training program designed specifically for young people with disabilities. This initiative, which ran for six months, equipped 25 youth with various physical disabilities with valuable skills in tailoring and crafts.</p>

      <h2>Breaking Down Barriers</h2>
      <p>In Uganda, people with disabilities face significant challenges in accessing education and employment opportunities. Our vocational training program was specifically designed to address these barriers by:</p>
      <ul>
        <li>Creating an accessible learning environment tailored to various disabilities</li>
        <li>Providing adaptive equipment and tools</li>
        <li>Focusing on skills that enable self-employment and financial independence</li>
        <li>Building confidence and entrepreneurial mindsets</li>
      </ul>

      <h2>Comprehensive Training</h2>
      <p>The six-month program covered several key areas:</p>
      <ul>
        <li>Basic and advanced tailoring techniques</li>
        <li>Craft making using local materials</li>
        <li>Quality control and finishing</li>
        <li>Business management and financial literacy</li>
        <li>Marketing and customer service</li>
        <li>Digital skills for online selling</li>
      </ul>

      <h2>Success Stories</h2>
      <p>Among our successful graduates is 22-year-old Esther, who has been wheelchair-bound since childhood. "Before joining this program, I felt like a burden to my family," she shares. "Now, I can make clothes and crafts that people are willing to pay good money for. I've already started taking orders from neighbors and have plans to open a small shop."</p>

      <p>Another graduate, 19-year-old Timothy, who has hearing impairment, has already secured a position at a local tailor shop. His employer was impressed by his precision and creativity, qualities Timothy developed during the program.</p>

      <h2>Graduation and Startup Support</h2>
      <p>At the graduation ceremony held last week, each participant received:</p>
      <ul>
        <li>A tailoring machine or craft-making starter kit</li>
        <li>A certificate of completion</li>
        <li>A small business grant to help launch their enterprise</li>
        <li>Ongoing mentorship for the next 12 months</li>
      </ul>

      <h2>Looking Forward</h2>
      <p>The success of this program has encouraged us to expand our vocational training initiatives. With continued support, we aim to:</p>
      <ul>
        <li>Double the number of participants in the next cohort</li>
        <li>Add new skill areas such as electronics repair and food processing</li>
        <li>Establish a marketplace where graduates can sell their products</li>
        <li>Advocate for inclusive employment policies with local businesses</li>
      </ul>

      <p>We extend our heartfelt thanks to all donors and partners who made this transformative program possible. Your support has not only equipped these young people with practical skills but has given them hope, dignity, and a path to independence.</p>
    `
  },
  {
    id: 5,
    title: "Annual Fundraising Gala Raises Record Amount",
    date: "March 15, 2024",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop",
    summary: "Our annual fundraising gala was a tremendous success, raising over $50,000 for our programs. The event featured performances by local artists and testimonials from people we've helped.",
    category: "Fundraising",
    slug: "annual-fundraising-gala",
    content: `
      <p>SIC Uganda's Annual Fundraising Gala, held on March 10th at the prestigious Kampala Serena Hotel, exceeded all expectations by raising a record-breaking $50,000 for our community programs. The evening brought together supporters, partners, and beneficiaries for a night of celebration, reflection, and generous giving.</p>

      <h2>A Night of Connection and Commitment</h2>
      <p>The gala, themed "Building Bridges of Hope," transformed the hotel's Victoria Ballroom into an elegant space that highlighted SIC's work across Uganda. Interactive displays showcased our projects in education, healthcare, clean water, and vocational training, allowing guests to understand the impact of their support.</p>

      <p>Executive Director Sarah Namuli opened the evening with a powerful address: "Tonight we gather not just to raise funds, but to reaffirm our shared commitment to creating lasting change in communities that need it most. Every dollar raised tonight will directly touch a life."</p>

      <h2>Voices of Impact</h2>
      <p>The most moving moments of the evening came when beneficiaries of SIC's programs shared their stories:</p>

      <p>Fourteen-year-old Esther, a beneficiary of our education program, received a standing ovation after sharing how a scholarship had allowed her to return to school and pursue her dream of becoming a doctor. "Before SIC came to my village, I had given up on education. Now I am top of my class and have hope for my future."</p>

      <p>Mr. Okello, representing a community that received a clean water project last year, shared how the installation of a borehole had transformed their village: "Our children are healthier, our women no longer walk for hours to fetch water, and we have started small gardens that improve our nutrition and income."</p>

      <h2>Entertainment and Auction</h2>
      <p>Local cultural performers, including the acclaimed Crane Performers dance troupe, provided entertainment that celebrated Uganda's rich cultural heritage. Their energetic performances had guests on their feet, joining in traditional dances.</p>

      <p>The live auction, masterfully conducted by celebrity auctioneer James Wutu, was the highlight of the fundraising efforts. Items included:</p>
      <ul>
        <li>A weekend safari package at Murchison Falls National Park</li>
        <li>Original artwork by renowned Ugandan artists</li>
        <li>A private dinner prepared by one of Kampala's top chefs</li>
        <li>Handcrafted jewelry made by participants of our vocational training program</li>
      </ul>

      <p>The auction alone raised $15,000, with a beautiful landscape painting by artist Joseph Kabugo fetching the highest bid of the night at $3,000.</p>

      <h2>Corporate Partners Step Up</h2>
      <p>Several corporate partners announced significant commitments during the event. East African Bank pledged $10,000 toward our educational scholarship program, while Kampala Telecom committed to providing technology for our vocational training centers.</p>

      <p>"We believe in SIC's approach to sustainable community development," said Richard Mugisha, CEO of East African Bank. "Their focus on empowerment rather than dependency aligns perfectly with our corporate social responsibility goals."</p>

      <h2>Looking Forward</h2>
      <p>The funds raised will support several key initiatives in the coming year:</p>
      <ul>
        <li>Expansion of our clean water projects to five additional villages</li>
        <li>Educational scholarships for 50 orphaned children</li>
        <li>Medical outreach clinics in remote communities</li>
        <li>Launch of a new vocational training center in northern Uganda</li>
      </ul>

      <p>"The generosity we've witnessed tonight will transform thousands of lives," concluded Board Chairman Dr. Martin Lubega. "But beyond the funds raised, seeing our community come together with such commitment gives us the energy and inspiration to continue this important work."</p>
    `
  },
  {
    id: 6,
    title: "New Community Center Opens in Eastern Uganda",
    date: "April 20, 2024",
    image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=2074&auto=format&fit=crop",
    summary: "SIC has opened a new community center that will serve as a hub for education, healthcare, and vocational training. The center will benefit over 2,000 people in the surrounding villages.",
    category: "Infrastructure",
    slug: "new-community-center-opens",
    content: `
      <p>SIC Uganda is proud to announce the grand opening of our new multi-purpose community center in Namutumba district, Eastern Uganda. This state-of-the-art facility, which opened its doors on April 15th, will serve as a central hub for education, healthcare, vocational training, and community gatherings for over 2,000 people from surrounding villages.</p>

      <h2>A Vision Realized</h2>
      <p>The community center represents the culmination of three years of planning, fundraising, and construction. The project, which cost approximately $120,000, was made possible through the generous support of international donors, partner organizations, and countless individual contributors.</p>

      <p>"This center is a dream come true for our community," said Local Council Chairperson Mrs. Nambozo during the ribbon-cutting ceremony. "For years, we've needed a place where our children can learn, where we can receive medical care, and where we can gather as a community. Today, that dream has become reality."</p>

      <h2>Comprehensive Facilities</h2>
      <p>The 1,200-square-meter facility includes:</p>
      <ul>
        <li>A learning center with a library and computer lab</li>
        <li>A health clinic equipped for basic medical care and maternal health services</li>
        <li>Vocational training workshops for carpentry, tailoring, and computer skills</li>
        <li>A community hall for meetings, events, and celebrations</li>
        <li>Administrative offices for SIC staff and community leaders</li>
        <li>Recreational area for children and youth activities</li>
        <li>Sustainable features including rainwater harvesting and solar power</li>
      </ul>

      <h2>Immediate Impact</h2>
      <p>Even before the official opening, the center had begun to make a difference. The clinic provided prenatal care to 45 expectant mothers in its first week of operation. The library has registered 120 children who now have access to books and educational materials, many for the first time in their lives.</p>

      <p>"I come here every day after school to read and do my homework," says 12-year-old Mercy. "At home, we don't have books or a quiet place to study. Here I can learn better."</p>

      <h2>Sustainable Operations</h2>
      <p>The center was designed with sustainability in mind, both environmentally and operationally. Solar panels provide clean electricity, while rainwater harvesting systems reduce reliance on distant water sources.</p>

      <p>To ensure long-term sustainability, a community management committee has been established, consisting of local leaders, SIC representatives, and community members. This committee will oversee day-to-day operations and guide the center's development based on community needs.</p>

      <p>"We've designed the operational model to gradually transition to full community ownership over the next five years," explains SIC Program Director Robert Mukasa. "Initial funding will come from SIC and partners, but income-generating activities like computer training and hall rentals will increasingly support the center's running costs."</p>

      <h2>Future Plans</h2>
      <p>The community center is just the beginning of SIC's expanded presence in Eastern Uganda. Plans for the coming year include:</p>
      <ul>
        <li>Launching a comprehensive youth development program</li>
        <li>Establishing satellite reading clubs in five surrounding villages</li>
        <li>Expanding the health clinic to offer additional services, including dental care</li>
        <li>Creating a marketplace where vocational training graduates can sell their products</li>
      </ul>

      <p>"This center represents what's possible when organizations and communities work together," said SIC's Executive Director during the opening ceremony. "It will serve as a model for future developments across Uganda, demonstrating how integrated services can transform communities."</p>

      <h2>Join Our Efforts</h2>
      <p>SIC Uganda invites supporters to contribute to the ongoing operations and programs at the new community center. Whether through financial donations, volunteer time, or expertise sharing, your involvement can help ensure this valuable resource continues to serve the community for generations to come.</p>
    `
  }
];

const NewsItemPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [newsItem, setNewsItem] = useState<NewsItem | null>(null);
  const [relatedNews, setRelatedNews] = useState<NewsItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  
  useEffect(() => {
    setIsLoading(true);
    
    const newsItems = getNewsItems();
    const foundNewsItem = newsItems.find(item => item.slug === slug);
    
    if (foundNewsItem) {
      setNewsItem(foundNewsItem);
      
      document.title = `${foundNewsItem.title} | SIC Uganda`;
      
      const related = newsItems
        .filter(item => item.category === foundNewsItem.category && item.id !== foundNewsItem.id)
        .slice(0, 2);
      setRelatedNews(related);
      
      setTimeout(() => {
        setIsLoading(false);
      }, 300);
    } else {
      navigate("/news");
    }
    
    window.scrollTo(0, 0);
  }, [slug, navigate]);
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="animate-spin h-12 w-12 rounded-full border-t-4 border-charity-blue border-r-transparent border-b-4 border-l-transparent"></div>
        </div>
        <Footer />
      </div>
    );
  }
  
  if (!newsItem) {
    return null;
  }
  
  const formattedDate = new Date(newsItem.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long", 
    day: "numeric"
  });
  
  const shareUrl = window.location.href;
  
  const handleShare = (platform: string) => {
    let shareLink = "";
    
    switch (platform) {
      case "facebook":
        shareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        break;
      case "twitter":
        shareLink = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(newsItem.title)}`;
        break;
      case "linkedin":
        shareLink = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
        break;
      default:
        return;
    }
    
    window.open(shareLink, "_blank", "width=600,height=400");
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="relative h-[50vh] min-h-[400px]">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${newsItem.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30" />
          
          <div className="container mx-auto h-full flex flex-col justify-end pb-8 relative z-10 px-4">
            <Link to="/news" className="text-white flex items-center mb-6 hover:underline w-fit">
              <ChevronLeft className="w-4 h-4 mr-1" />
              Back to all news
            </Link>
            <span className="px-3 py-1 bg-charity-blue text-white text-sm font-medium rounded mb-4 inline-block">
              {newsItem.category}
            </span>
            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-4 max-w-4xl">
              {newsItem.title}
            </h1>
            <div className="flex items-center text-white/90">
              <Calendar className="w-4 h-4 mr-1" />
              <span>{formattedDate}</span>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: newsItem.content || newsItem.summary }} />
              
              <div className="mt-8 pt-8 border-t">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-medium flex items-center">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share this article:
                  </span>
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="rounded-full"
                      onClick={() => handleShare("facebook")}
                    >
                      <Facebook className="h-4 w-4" />
                      <span className="sr-only">Share on Facebook</span>
                    </Button>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="rounded-full"
                      onClick={() => handleShare("twitter")}
                    >
                      <Twitter className="h-4 w-4" />
                      <span className="sr-only">Share on Twitter</span>
                    </Button>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="rounded-full"
                      onClick={() => handleShare("linkedin")}
                    >
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">Share on LinkedIn</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-charity-blue text-white p-6 rounded-lg mb-8 sticky top-24">
                <h3 className="font-bold text-xl mb-3">Support Our Mission</h3>
                <p className="mb-4">Your donation helps us continue our work with those who need it most.</p>
                <CTAButton 
                  className="w-full bg-white text-charity-blue hover:bg-gray-100" 
                  asChild
                >
                  <Link to="/donate">Donate Now</Link>
                </CTAButton>
              </div>
              
              {relatedNews.length > 0 && (
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold text-xl mb-4">Related News</h3>
                  <div className="space-y-4">
                    {relatedNews.map(item => (
                      <Link to={`/news/${item.slug}`} key={item.id} className="block group">
                        <div className="flex gap-4">
                          <img 
                            src={item.image} 
                            alt={item.title}
                            loading="lazy"
                            className="w-20 h-20 object-cover rounded transition-transform group-hover:scale-105"
                          />
                          <div>
                            <h4 className="font-medium group-hover:text-charity-blue transition-colors">{item.title}</h4>
                            <p className="text-sm text-muted-foreground">{item.date}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default NewsItemPage;
