import { ArrowRight, ExternalLink } from "lucide-react";

const Certificates = [
  {
    id: 1,
    title: "Legacy JavaScript Algorithms and Data Structures",
    description:
      "Earned the freeCodeCamp Developer Certification in Legacy JavaScript Algorithms and Data Structures — 300+ hours mastering problem-solving, algorithm design, and efficient coding techniques to build scalable, high-performance applications",
    image: "/ProjectsImgs/js.png",
    tags: ["React", "Tailwind CSS", "GSAP"],
    demoUrl:
      "https://www.freecodecamp.org/certification/fcc3d12dc95-79d2-4c0b-963b-c6dbb64f14ce/javascript-algorithms-and-data-structures",
  },
  {
    id: 2,
    title: "HTML, CSS & JavaScript Internship – Internee.pk",
    image: "/ProjectsImgs/internshipcertificate.png",
    description:
      "Completed a 2-month virtual internship at Internee.pk, gaining hands-on experience in building responsive interfaces, optimizing web performance, and implementing interactive features using HTML, CSS, and JavaScript.",
    demoUrl:
      "https://www.linkedin.com/posts/mahrukh-khan-195668236_internship-webdevelopment-learningexperience-activity-7250054611028303876-Xsk8?utm_source=share&utm_medium=member_desktop&rcm=ACoAADrUhQEBKmV0c7jUaVaKD6Jcj16Ph8fEgKc",
  },
  {
    id: 3,
    title: "Start Writing Prompts like a Pro",
    description:
      "Certified by Google (via Coursera) in ‘Start Writing Prompts like a Pro’ — mastered the art of crafting impactful, AI-ready prompts with 100% score, blending creativity with precision to drive powerful results.",
    image: "/ProjectsImgs/WritingPrompt.png",
    demoUrl:
      "https://www.coursera.org/account/accomplishments/verify/6LVCB8KVKH8O",
  },
  {
    id: 4,
    title: "Front End Development - CSS",
    image: "/ProjectsImgs/frontend.png",
    description:
      "Certified in Front End Development – CSS from Great Learning Academy, mastering modern styling techniques to craft visually stunning, responsive, and user-friendly websites",
    demoUrl: "https://www.mygreatlearning.com/certificate/UWFHXUJW",
  },
];

const Certifications = () => {
  return (
    <section id="certificates" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          <span className="text-primary"> Certifications</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A proud showcase of my commitment to growth — From coding powerful
          algorithms to designing stunning interfaces, every badge tells a story
          of innovation and expertise
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {Certificates.map((Certificate) => (
            <div
              key={Certificate.id}
              className="group bg-card rounded-lg shadow-xs overflow-hidden card-hover"
            >
              <div className="overflow-hidden h-48">
                <img
                  src={Certificate.image}
                  alt={Certificate.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">
                  {Certificate.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {Certificate.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={Certificate.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300 "
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="https://www.linkedin.com/in/mahrukh-khan-195668236"
            target="_blank"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            Check My LinkedIn <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
