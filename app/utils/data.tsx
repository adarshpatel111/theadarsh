import { Code, Layers, Palette, Server } from "lucide-react";

// Pattern components remain the same
const PurpleWaves = () => (
  <div className="w-32 h-32 overflow-hidden">
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0,50 Q25,30 50,50 T100,50 T150,50"
        fill="none"
        stroke="#9333ea"
        strokeWidth="1"
      />
      <path
        d="M0,60 Q25,40 50,60 T100,60 T150,60"
        fill="none"
        stroke="#9333ea"
        strokeWidth="1"
      />
      <path
        d="M0,70 Q25,50 50,70 T100,70 T150,70"
        fill="none"
        stroke="#9333ea"
        strokeWidth="1"
      />
      <path
        d="M0,80 Q25,60 50,80 T100,80 T150,80"
        fill="none"
        stroke="#9333ea"
        strokeWidth="1"
      />
      <path
        d="M0,90 Q25,70 50,90 T100,90 T150,90"
        fill="none"
        stroke="#9333ea"
        strokeWidth="1"
      />
    </svg>
  </div>
);

const RedStrokes = () => (
  <div className="w-32 h-32 overflow-hidden">
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      {Array.from({ length: 30 }).map((_, index) => (
        <line
          key={index}
          x1={40 + Math.random() * 40}
          y1={40 + Math.random() * 40}
          x2={45 + Math.random() * 40}
          y2={45 + Math.random() * 40}
          stroke="#ef4444"
          strokeWidth="1.5"
        />
      ))}
    </svg>
  </div>
);

const BlueWaves = () => (
  <div className="w-32 h-32 overflow-hidden">
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0,50 Q25,30 50,50 T100,50 T150,50"
        fill="none"
        stroke="#0ea5e9"
        strokeWidth="1"
      />
      <path
        d="M0,60 Q25,40 50,60 T100,60 T150,60"
        fill="none"
        stroke="#0ea5e9"
        strokeWidth="1"
      />
      <path
        d="M0,70 Q25,50 50,70 T100,70 T150,70"
        fill="none"
        stroke="#0ea5e9"
        strokeWidth="1"
      />
      <path
        d="M0,80 Q25,60 50,80 T100,80 T150,80"
        fill="none"
        stroke="#0ea5e9"
        strokeWidth="1"
      />
      <path
        d="M0,90 Q25,70 50,90 T100,90 T150,90"
        fill="none"
        stroke="#0ea5e9"
        strokeWidth="1"
      />
    </svg>
  </div>
);

const YellowChevrons = () => (
  <div className="w-32 h-32 overflow-hidden">
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20,80 L40,60 L60,80"
        fill="none"
        stroke="#eab308"
        strokeWidth="2"
      />
      <path
        d="M15,85 L40,65 L65,85"
        fill="none"
        stroke="#eab308"
        strokeWidth="2"
      />
      <path
        d="M10,90 L40,70 L70,90"
        fill="none"
        stroke="#eab308"
        strokeWidth="2"
      />
      <path
        d="M5,95 L40,75 L75,95"
        fill="none"
        stroke="#eab308"
        strokeWidth="2"
      />
    </svg>
  </div>
);

const GreenDots = () => (
  <div className="w-32 h-32 overflow-hidden">
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      {Array.from({ length: 10 }).map((_, rowIndex) =>
        Array.from({ length: 10 }).map((_, colIndex) => (
          <circle
            key={`${rowIndex}-${colIndex}`}
            cx={50 + colIndex * 5}
            cy={50 + rowIndex * 5}
            r="1.5"
            fill="#10b981"
          />
        ))
      )}
    </svg>
  </div>
);

const YellowLines = () => (
  <div className="w-32 h-32 overflow-hidden">
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <line x1="20" y1="50" x2="80" y2="90" stroke="#eab308" strokeWidth="2" />
      <line x1="25" y1="45" x2="85" y2="85" stroke="#eab308" strokeWidth="2" />
      <line x1="30" y1="40" x2="90" y2="80" stroke="#eab308" strokeWidth="2" />
      <line x1="35" y1="35" x2="95" y2="75" stroke="#eab308" strokeWidth="2" />
      <line x1="40" y1="30" x2="100" y2="70" stroke="#eab308" strokeWidth="2" />
    </svg>
  </div>
);

export const projectsData = [
  {
    id: "1",
    icon: <Code className="h-6 w-6 text-white" />,
    iconBg: "bg-purple-600",
    date: "June 2023",
    category: "Web Development",
    title: "RGAV Ayurveda",
    description:
      "A full-stack e-commerce platform for Ayurvedic products with advanced features.",
    overview: [
      "Developed a feature-rich e-commerce website for RGAV Ayurveda, providing an engaging and secure shopping experience",
      "Implemented various pages and functionalities based on requirements from the CEO and Ayurveda team",
      "Created infinite carousels for featured products and dedicated sections for latest/popular items",
      "Built comprehensive About Us and Contact Us pages with form functionality",
    ],
    features: [
      "Infinite carousel showcasing featured products and promotions",
      "Product carousels for latest and popular items",
      "Why Choose RGAV section highlighting company values",
      "Detailed About Us page with company history",
      "Contact form with backend integration",
      "Full product listings with interactive cards",
      "Add to Cart with CRUD operations",
      "Wishlist functionality with favorites management",
      "Buy Now option for instant checkout",
      "Advanced filtering by price, category, popularity",
      "Product details page with review system",
      "Secure authentication with token management",
      "Payment integration (in development)",
    ],
    technicalDetails: [
      "Frontend: React with TypeScript",
      "Backend: Node.js with Express",
      "Database: MongoDB",
      "State Management: Redux",
      "Authentication: JWT with HTTP-only cookies",
      "Hosting: Vercel with custom domain",
      "Responsive design for all devices",
    ],
    technologies: [
      "React",
      "Express",
      "Tailwind CSS",
      "TypeScript",
      "MongoDB",
      "Stripe",
    ],
    liveUrl: "https://rgav.in",
    pattern: <PurpleWaves />,
    challenges: [
      "Implementing smooth infinite carousel without performance issues",
      "Managing complex product filtering system",
      "Securing payment integration",
    ],
    solutions: [
      "Used windowing technique for carousel items",
      "Created optimized filter algorithms",
      "Implemented Stripe with proper security measures",
    ],
    screenshots: [
      "/rgav1.png",
      "/rgav-admin1.png",
      "/rgav-admin1.png",
    ],
  },
  {
    id: "2",
    icon: <Palette className="h-6 w-6 text-white" />,
    iconBg: "bg-blue-500",
    date: "July 2023",
    category: "Web Development",
    title: "BSRE",
    description: "Company website with custom domain hosted on Vercel.",
    overview: [
      "Developed and deployed the company's website on Vercel with custom domain",
      "Implemented fast loading and reliable uptime through Vercel hosting",
      "Created seamless deployment process for future updates",
      "Designed scalable architecture for growing needs",
    ],
    features: [
      "Animated landing page with engaging visuals",
      "About Us section with company story and values",
      "Product showcase with detailed cards",
      "Branch locator with interactive map",
      "Image gallery with lightbox effect",
      "Contact form with validation",
      "Featured content carousel",
      "Fully responsive design",
      "SEO optimization",
      "Performance optimization",
      "Analytics integration",
    ],
    technicalDetails: [
      "Built with modern React framework",
      "Animation libraries for smooth effects",
      "Map integration for branch locations",
      "Lightbox implementation for gallery",
      "Form handling with backend validation",
      "Responsive breakpoints for all devices",
      "Metadata and alt tags for SEO",
      "Image optimization techniques",
      "Google Analytics integration",
    ],
    technologies: ["ReactJs", "Material UI", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://bsre.in",
    pattern: <BlueWaves />,
    challenges: [
      "Creating performant animations",
      "Implementing complex map interactions",
      "Optimizing image-heavy content",
    ],
    solutions: [
      "Used CSS transforms for smooth animations",
      "Integrated Leaflet.js for interactive maps",
      "Implemented lazy loading for images",
    ],
    screenshots: ["/bsre1.png"],
  },
  {
    id: "3",
    icon: <Server className="h-6 w-6 text-white" />,
    iconBg: "bg-green-500",
    date: "Jul 2023",
    category: "Web Development",
    title: "BSIT Solar",
    description:
      "Website for solar company with products and services showcase.",
    overview: [
      "Developed sleek and engaging website to establish strong online presence",
      "Showcased brand identity through thoughtful design",
      "Hosted on Vercel with custom domain for professional presence",
      "Optimized user experience with responsive design",
    ],
    features: [
      "Animated landing page introducing the brand",
      "About Us section with company values",
      "Visual gallery of products and facilities",
      "Contact page with user-friendly form",
      "Responsive design for all devices",
      "SEO optimization for visibility",
      "Fast loading performance",
      "Analytics tracking",
    ],
    technicalDetails: [
      "Built with React and TypeScript",
      "Animation libraries for engaging effects",
      "Form validation and submission handling",
      "Image optimization pipeline",
      "Metadata and structured data for SEO",
      "Performance monitoring setup",
      "Vercel deployment configuration",
    ],
    technologies: ["ReactJs", "Express", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://bsit.co.in",
    pattern: <GreenDots />,
    challenges: [
      "Creating visual impact while maintaining performance",
      "Implementing complex animations",
      "Ensuring form reliability",
    ],
    solutions: [
      "Optimized asset delivery",
      "Used hardware-accelerated animations",
      "Implemented robust form validation",
    ],
    screenshots: ["/bsit1.png"],
  },
  {
    id: "4",
    icon: <Layers className="h-6 w-6 text-white" />,
    iconBg: "bg-yellow-500",
    date: "Nov 2023",
    category: "Full Stack",
    title: "BSSP Admin Panel",
    description:
      "Solar admin panel for managing consumer details and government records.",
    overview: [
      "Developed comprehensive admin panel with role-based access",
      "Created quotation system for solar installations",
      "Implemented project tracking with phased updates",
      "Built secure document handling system",
    ],
    features: [
      "Role-based access control (Admin, Branch Manager, Agent)",
      "Quotation system for Residential/Commercial projects",
      "Form validation and calculation engine",
      "PDF generation and cloud storage",
      "Consumer onboarding workflow",
      "Project initiation process",
      "Phase-based project tracking",
      "Real-time status updates",
      "Secure document handling",
    ],
    technicalDetails: [
      "React frontend with TypeScript",
      "Node.js backend with Express",
      "Database: Microsoft SQL",
      "PDF generation library",
      "Cloud storage integration",
      "Form validation system",
      "Role-based routing",
      "Multi-step workflow components",
    ],
    technologies: ["ReactJS", "TypeScript", "Tailwind CSS", "Redux"],
    liveUrl: "",
    pattern: <YellowChevrons />,
    challenges: [
      "Complex role-based permissions",
      "PDF generation and handling",
      "Multi-step form workflows",
    ],
    solutions: [
      "Implemented permission middleware",
      "Used PDF libraries with Base64 handling",
      "Created wizard component with validation",
    ],
    screenshots: [
      "/bssp1.png",
      "/bssp2.png",
      "/bssp3.png",
      "/bssp4.png",
    ],
  },
  {
    id: "5",
    icon: <Code className="h-6 w-6 text-white" />,
    iconBg: "bg-red-500",
    date: "Sep 2024",
    category: "Web Development",
    title: "BSCCL Banking",
    description: "Secure web application for cooperative bank account holders.",
    overview: [
      "Developed secure banking portal extending existing software",
      "Implemented mobile number based authentication",
      "Created responsive interface for account management",
      "Ensured strict access control and security",
    ],
    features: [
      "Mobile number login with OTP verification",
      "Account details and transaction history",
      "Responsive design for all devices",
      "Conditional page access control",
      "Secure session management",
      "Automatic logout functionality",
      "Data encryption in transit",
    ],
    technicalDetails: [
      "Frontend: React with TypeScript",
      "Backend: Node.js with Express",
      "Database: Microsoft SQL",
      "Authentication: MSG91 for OTP",
      "Session handling with JWT",
      "HTTP security headers",
      "Role-based routing",
      "Responsive breakpoints",
    ],
    technologies: ["ReactJs", "NodeJs", "Tailwind CSS", "TypeScript"],
    liveUrl: "",
    pattern: <RedStrokes />,
    challenges: [
      "Secure authentication flow",
      "Financial data protection",
      "Session management",
    ],
    solutions: [
      "Implemented OTP with MSG91",
      "Used encryption for sensitive data",
      "Strict token expiration policies",
    ],
  },
  // {
  //   id: "6",
  //   icon: <Layers className="h-6 w-6 text-white" />,
  //   iconBg: "bg-yellow-500",
  //   date: "Nov 2024",
  //   category: "Full Stack",
  //   title: "CollabBros",
  //   description:
  //     "Real-time collaborative text editor with multiple language support.",
  //   features: ["Coming soon - details to be provided"],
  //   technologies: ["ReactJs", "TypeScript", "Firebase"],
  //   liveUrl: "https://collabbros.vercel.app",
  //   pattern: <YellowLines />,
  // },
  {
    id: "6",
    icon: <Layers className="h-6 w-6 text-white" />,
    iconBg: "bg-yellow-500",
    date: "Nov 2024",
    category: "Full Stack",
    title: "CollabBros",
    description:
      "Real-time collaborative text editor with multiple language support.",
    overview: [
      "Developed a real-time collaborative editor that revolutionizes how developers and creators work together",
      "Implemented seamless synchronization of edits across all connected users",
      "Created support for multiple programming languages and markdown with live preview",
      "Designed intuitive room-based collaboration system with unique links",
      "Built customizable interface with theme support for personalized editing experience",
    ],
    features: [
      "Live collaborative editing with instant updates",
      "Room creation with unique shareable links",
      "Support for JavaScript, CSS, Python, HTML, and Markdown",
      "Markdown preview tab for rendered content viewing",
      "Theme customization (Dracula, Material, Eclipse)",
      "Real-time cursor position and edit indicators",
      "Room code system for secure access",
      "Copy/paste support for quick content sharing",
      "User presence indicators showing active collaborators",
      "Responsive design works on all devices",
      "No installation required - works in browser",
    ],
    technicalDetails: [
      "Frontend: React with TypeScript",
      "Real-time synchronization: Firebase Realtime Database",
      "Editor: Monaco Editor (same engine as VS Code)",
      "Markdown processing: Marked.js",
      "Authentication: Firebase Auth",
      "State management: Redux Toolkit",
      "Theming: CSS Variables with theme switching",
      "Deployment: Vercel with CI/CD pipeline",
      "Performance optimization: Debounced updates",
      "Error handling: Sentry integration",
    ],
    technologies: [
      "ReactJs",
      "TypeScript",
      "Firebase",
      "Redux",
      "Monaco Editor",
    ],
    liveUrl: "https://collabbros.vercel.app",
    pattern: <YellowLines />,
    challenges: [
      "Implementing real-time synchronization without lag",
      "Handling concurrent edits from multiple users",
      "Maintaining editor performance with many participants",
      "Creating reliable markdown preview system",
      "Ensuring data consistency across clients",
    ],
    solutions: [
      "Used Firebase Realtime Database for low-latency updates",
      "Implemented operational transformation for concurrent edits",
      "Optimized editor rendering with virtualized components",
      "Created debounced preview generation for markdown",
      "Developed conflict resolution algorithm",
      "Added offline support with sync-on-reconnect",
    ],
    screenshots: [
      "/collabbros1.png",
      "/collabbros2.png",
      "/collabbros3.png",
    ],
  },
];
