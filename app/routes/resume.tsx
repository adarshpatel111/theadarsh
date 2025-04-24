import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FiDownloadCloud, FiMail, FiSmartphone } from "react-icons/fi";

const resume = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Animated particles component
  const Particles = () => (
    <div className="fixed inset-0 pointer-events-none">
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary/50"
          initial={{
            scale: 0,
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            scale: [0, 1, 0],
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          transition={{
            duration: 2 + Math.random() * 5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-background mt-20">
      <Particles />

      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50"
        style={{ scaleX }}
      />

      <main className="max-w-6xl mx-auto px-4 py-20 relative">
        <AnimatePresence>
          {mounted && (
            <motion.header
              className="mb-20 text-center"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
            >
              <h1 className="text-6xl font-bold mb-4 text-primary">
                Adarsh Patel
              </h1>
              <div className="flex flex-col sm:flex-row justify-center gap-6 text-secondary">
                <div className="flex items-center gap-2 text-primary">
                  <FiMail className="text-primary" />
                  <span>adarshpatel1012001@gmail.com</span>
                </div>
                <div className="flex items-center gap-2 text-primary">
                  <FiSmartphone className="text-primary" />
                  <span>8320018439</span>
                </div>
              </div>
            </motion.header>
          )}
        </AnimatePresence>

        {/* Education Section */}
        <Section title="Education">
          <motion.div className="grid md:grid-cols-2 gap-8">
            {educations.map((edu, i) => (
              <Card key={i} index={i}>
                <h3 className="text-xl font-bold text-primary">{edu.degree}</h3>
                <p className="text-primary">{edu.institution}</p>
                <div className="mt-4 flex justify-between text-primary">
                  <span>{edu.date}</span>
                  <span>{edu.gpa}</span>
                </div>
              </Card>
            ))}
          </motion.div>
        </Section>

        {/* Skills Section */}
        <Section title="Skills">
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: i * 0.05 }}
                className="px-4 py-2 rounded-full text-sm bg-primary/10 text-primary"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </Section>

        {/* Experience Section */}
        <Section title="Experience">
          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="p-6 rounded-xl bg-card"
              >
                <h3 className="text-xl font-bold text-primary">
                  {exp.position}
                </h3>
                <p className="mb-4 text-primary">
                  {exp.company} • {exp.duration}
                </p>
                <ul className="space-y-2 text-primary">
                  {exp.points.map((point, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className="text-primary">▹</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
            <p>
              This experience section highlights the key technologies and skills
              relevant to a junior front-end developer role, showcasing
              proficiency in React.js, Axios, React Router,Redux, Material-UI,
              hooks, and IAM integration
            </p>
          </div>
        </Section>

        {/* Projects Section */}
        <Section title="Projects">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <Card key={i} index={i}>
                <h3 className="text-lg font-bold text-primary">
                  {project.title}
                </h3>
                <p className="mt-2 text-primary">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech, j) => (
                    <span
                      key={j}
                      className="px-3 py-1 rounded-full text-xs bg-primary/10 text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </Section>

        {/* Download Button */}
        <motion.div
          className="fixed bottom-8 right-8"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <button className="flex items-center gap-2 px-6 py-3 rounded-full shadow-lg bg-background/20 border-2 border-primary text-primary">
            <FiDownloadCloud className="text-xl" />
            Download Resume
          </button>
        </motion.div>
      </main>
    </div>
  );
};

// Reusable components
const Section = ({ title, children }) => (
  <motion.section
    className="mb-20"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
  >
    <h2 className="text-3xl font-bold mb-8 text-primary">{title}</h2>
    {children}
  </motion.section>
);

const Card = ({ children, index }) => (
  <motion.div
    className="p-6 rounded-xl bg-secondary"
    initial={{ y: 50, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ delay: index * 0.1 }}
  >
    {children}
  </motion.div>
);

// Data arrays (same as before)
const educations = [
  {
    degree: "M.Sc.IT",
    institution: "ISTAR College, Anand, Gujarat",
    date: "04/2023",
    gpa: "7.62 GPA",
  },
  {
    degree: "B.Sc.IT",
    institution: "Natubhai V. Patel College, Anand, Gujarat",
    date: "05/2021",
    gpa: "8.30 GPA",
  },
];

const skills = [
  "HTML5",
  "CSS3",
  "BootStrap",
  "JavaScript",
  "ReactJS",
  "ExpressJS",
  "MongoDB",
  "Microsoft SQL Server",
  "PostgresSQL",
  "Tailwind CSS",
  "Material-UI",
  "GitHub",
  "Vercel",
  "Render",
  "Redux",
  "React Router",
  "Axios",
  "Firebase",
  "Socket.io",
];

const experiences = [
  {
    position: "Front End Developer",
    company: "Bapa Sitaram Group of companies",
    duration: "05/2023 - Present",
    points: [
      "Developed and maintained user-friendly web-based software utilizing React.js, Axios, React Router, Redux ,and Material-UI.",
      "Implemented responsive designs and ensured cross-browser compatibility to enhance user experience.",
      "Leveraged functional components and React hooks to streamline development processes and improve code readability.",
      "Integrated Identity and Access Management (IAM) solutions to ensure secure user authentication and authorization.",
      "Collaborated with cross-functional teams to gather requirements, troubleshoot issues, and deliver high-quality solutions within project timelines.",
      "Actively participated in code reviews and provided constructive feedback to enhance team efficiency and code quality.",
      "Stayed updated with the latest front-end development trends and technologies to continually improve skills and contribute innovative solutions.",
      "Developed and launched rgva.in, RGAV admin, an Ayurveda e-commerce website,BSIT, enhancing user experience through intuitive design and robust functionality.",
      "Created bsre.in, focusing on user-centric design and seamless navigation, resulting in improved customer engagementand satisfaction.",
    ],
  },
];

const projects = [
  {
    title: "CollabBros – Real-Time Collaborative Code Editor",
    description:
      "Real-time collaborative code/text editor with WebSocket/Firebase sync",
    tech: ["React", "TypeScript", "Firebase", "Socket.io"],
  },
  {
    title: "RGAV.IN Ayurveda E-commerce",
    description:
      "Complete frontend website with admin panel for Ayurveda products",
    tech: ["React", "Material-UI", "Axios", "JWT"],
  },
  {
    title: "Shopping Center Project",
    description: "Full e-commerce platform with inventory management",
    tech: ["React", "Redux", "Express.js", "JWT"],
  },
  {
    title: "CRM for Railway",
    description: "Railway service CRM for material monitoring",
    tech: ["PHP", "HTML5", "CSS3", "MySQL"],
  },
];

export default resume;
