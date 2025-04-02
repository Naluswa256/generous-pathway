
export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  category: string;
  tags: string[];
  publishedDate: string;
  readTime: number; // in minutes
};

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Transforming Lives Through Clean Water Access in Uganda",
    slug: "transforming-lives-through-clean-water-access",
    excerpt: "How our water well project is bringing sustainable clean water solutions to communities in rural Uganda.",
    content: `
      <p>Access to clean water is a fundamental human right, yet millions in rural Uganda still struggle daily to find safe water sources. At Sharing is Caring, we believe in sustainable solutions that empower communities for generations.</p>
      
      <h2>The Water Crisis in Rural Uganda</h2>
      <p>In many villages across Uganda, women and children walk several kilometers each day to collect water from unprotected sources. This water is often contaminated, leading to waterborne diseases that affect health, education, and economic productivity.</p>
      
      <p>According to recent studies, approximately 7 million Ugandans lack access to safe water, and 28 million lack access to improved sanitation facilities.</p>
      
      <h2>Our Sustainable Approach</h2>
      <p>Rather than temporary solutions, we focus on building deep-water wells that provide clean, reliable water for entire communities. Each well serves approximately 200-300 people and lasts for decades with proper maintenance.</p>
      
      <p>What makes our approach unique is our community partnership model. We don't just drill wells and leave – we work with local leaders to:</p>
      <ul>
        <li>Form water management committees</li>
        <li>Train community members in well maintenance</li>
        <li>Educate on sanitation and hygiene practices</li>
        <li>Establish micro-financing for future repairs</li>
      </ul>
      
      <h2>Impact Beyond Water</h2>
      <p>The effects of clean water access extend far beyond health improvements. We've documented:</p>
      <ul>
        <li>60% reduction in waterborne illnesses</li>
        <li>30% increase in school attendance, especially among girls</li>
        <li>Women gaining back 3-4 hours daily, which many use for income-generating activities</li>
      </ul>
      
      <h2>Join Our Clean Water Initiative</h2>
      <p>Each water well costs approximately $8,000 to install, but the returns in human potential are immeasurable. Your donation, no matter the size, brings us closer to our goal of clean water for all.</p>
      
      <p>Together, we can transform communities one well at a time.</p>
    `,
    coverImage: "https://images.unsplash.com/photo-1550576037-9eb233cb3d00?q=80&w=2070&auto=format&fit=crop",
    author: {
      name: "Sarah Nantongo",
      avatar: "https://images.unsplash.com/photo-1507152832244-10d45c7eda57?q=80&w=1974&auto=format&fit=crop",
      role: "Water Project Manager"
    },
    category: "Projects",
    tags: ["Water", "Healthcare", "Sustainability", "Rural Development"],
    publishedDate: "2023-09-15",
    readTime: 5
  },
  {
    id: "2",
    title: "Education as a Pathway Out of Poverty",
    slug: "education-pathway-out-of-poverty",
    excerpt: "How our scholarship program is helping orphaned children achieve their dreams through quality education.",
    content: `
      <p>Education is not just about learning to read and write – it's about opening doors to opportunities that can transform lives. For orphaned children in Uganda, these opportunities are often out of reach due to financial constraints.</p>
      
      <h2>Breaking the Cycle of Poverty</h2>
      <p>Uganda has one of the youngest populations in the world, with over 50% under the age of 15. While primary education is technically free, hidden costs like uniforms, books, meals, and transportation create barriers for vulnerable children.</p>
      
      <p>Our scholarship program addresses these barriers head-on by providing comprehensive support that covers:</p>
      <ul>
        <li>School fees from primary through secondary education</li>
        <li>Uniforms, books, and school supplies</li>
        <li>Daily meals at school</li>
        <li>Healthcare support</li>
        <li>Mentorship and career guidance</li>
      </ul>
      
      <h2>Success Stories</h2>
      <p>Among our first scholarship recipients was Grace, who lost both parents at age 8. Today, she's completing her nursing degree and plans to return to her village to improve healthcare access.</p>
      
      <p>Then there's Samuel, who joined our program in 2015 and has recently been accepted to Makerere University on a partial scholarship to study agricultural science.</p>
      
      <h2>The Multiplier Effect</h2>
      <p>When you educate one child, you impact an entire community. Our data shows that:</p>
      <ul>
        <li>90% of our graduates find employment or continue to higher education</li>
        <li>78% contribute financially to supporting younger siblings or relatives</li>
        <li>65% engage in community service or development initiatives</li>
      </ul>
      
      <h2>How You Can Help</h2>
      <p>$300 supports a child's primary education for a full year, while $500 covers secondary education. We invite you to consider sponsoring a child's education journey and helping us create lasting change through education.</p>
      
      <p>Together, we can build a future where every child has the opportunity to learn, grow, and thrive regardless of their circumstances.</p>
    `,
    coverImage: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2073&auto=format&fit=crop",
    author: {
      name: "Robert Kiwanuka",
      avatar: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=2070&auto=format&fit=crop",
      role: "Education Program Director"
    },
    category: "Education",
    tags: ["Education", "Scholarships", "Youth Empowerment", "Orphan Care"],
    publishedDate: "2023-11-03",
    readTime: 6
  },
  {
    id: "3",
    title: "Elderly Care: Honoring Uganda's Grandparents",
    slug: "elderly-care-honoring-ugandas-grandparents",
    excerpt: "Our initiative to support elderly grandparents who are raising their orphaned grandchildren in rural communities.",
    content: `
      <p>In the wake of health crises and economic challenges, many Ugandan grandparents find themselves raising their orphaned grandchildren. These elderly caregivers face unique challenges as they try to provide for the young ones in their care.</p>
      
      <h2>The Unsung Heroes</h2>
      <p>Meet Nakafeero, age 72, who is raising five grandchildren after losing three of her own children. Despite her arthritis and failing eyesight, she works daily in her small garden to grow enough food to feed her family.</p>
      
      <p>Stories like Nakafeero's are common across Uganda. Many elderly grandparents have become primary caregivers without the physical strength, resources, or support needed for this demanding role.</p>
      
      <h2>Our Holistic Support System</h2>
      <p>Our Grandparent Support Program provides comprehensive assistance including:</p>
      <ul>
        <li>Monthly food packages and nutritional supplements</li>
        <li>Healthcare access and medication</li>
        <li>Home improvements for safety and comfort</li>
        <li>Micro-grants for income-generating activities</li>
        <li>Community support groups</li>
        <li>Educational support for the grandchildren</li>
      </ul>
      
      <h2>Dignity in Later Years</h2>
      <p>Beyond material support, our program emphasizes honoring the wisdom and contributions of the elderly. We organize:</p>
      <ul>
        <li>Intergenerational knowledge-sharing events</li>
        <li>Cultural preservation activities</li>
        <li>Community recognition ceremonies</li>
      </ul>
      
      <p>These activities help combat isolation and restore the traditional respect for elders that is foundational to Ugandan culture.</p>
      
      <h2>The Need Continues to Grow</h2>
      <p>Currently, we support 85 grandparent-headed households, but we've identified over 200 more in urgent need within our service area alone.</p>
      
      <p>For just $45 per month, you can provide essential support to an elderly grandparent and their dependent grandchildren. Your generosity ensures they have food security, healthcare, and dignity in their twilight years.</p>
      
      <h2>Join Us in Honoring Our Elders</h2>
      <p>Together, we can ensure that those who have given so much to their families and communities receive the care and respect they deserve in return.</p>
    `,
    coverImage: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?q=80&w=2071&auto=format&fit=crop",
    author: {
      name: "Joyce Abenakyo",
      avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1974&auto=format&fit=crop",
      role: "Elder Care Coordinator"
    },
    category: "Elder Care",
    tags: ["Elderly Support", "Grandparents", "Family Care", "Healthcare"],
    publishedDate: "2023-12-10",
    readTime: 7
  }
];
