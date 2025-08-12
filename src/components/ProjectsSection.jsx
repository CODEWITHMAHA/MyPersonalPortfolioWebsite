import { ArrowRight, ExternalLink, Github } from "lucide-react";

const Projects = [
  {
    id: 1,
    title: "Mojito Cocktails",
    description:
      "Mojito Cocktails is a fast, React + Vite web app for exploring cocktail recipes, with clean code and seamless Netlify deployment.",
    image: "/ProjectsImgs/Mojito.png",
    tags: ["React", "Tailwind CSS", "GSAP"],
    demoUrl: "https://mojitococktails.netlify.app/",
    githubUrl: "https://github.com/CODEWITHMAHA/mojito-cocktails",
  },
  {
    id: 2,
    title: "Todo List",
    description: "A React + Vite todo app with add, delete, and duplicate-check features. Tasks are stored in localStorage for persistence, and the UI includes date/time display with a responsive design. ",
    image: "/ProjectsImgs/Todo.png",
    tags: ["React", "Tailwind CSS"],
    demoUrl: "https://mahatodo.netlify.app/",
    githubUrl: "https://github.com/CODEWITHMAHA/TodoList-Project",
  },
  {
    id: 3,
    title: "Pokemon",
    description:
      "A React + Vite web app that fetches and displays Pokémon data from an external API, featuring search and listing functionality with a clean, responsive UI.",
    image: "/ProjectsImgs/Pokemon.png",
    tags: ["React", "Tailwind CSS", "Pokemon API"],
    demoUrl: "https://poke-pokemonwebsite.netlify.app/",
    githubUrl: "https://github.com/CODEWITHMAHA/Pokemon",
  },
  {
    id: 4,
    title: "GetCurrentLocation",
    description:
      "A simple HTML, CSS, and JavaScript app that fetches and displays the user’s current location using the browser’s geolocation API. ",
    image: "/ProjectsImgs/GetCurrentLocation.png",
    tags: ["HTML", "CSS", "JavaScript", "Geolocation API"],
    demoUrl: "https://getyourcurrentlocation.netlify.app/",
    githubUrl: "https://github.com/CODEWITHMAHA/GetCurrentLocation",
  },

  {
    id: 5,
    title: "Netflix Clone",
    description: "A responsive Netflix Pakistan clone built with HTML and CSS, featuring a hero section, content highlights, FAQ section, and custom styling for both desktop and mobile. ",
    image: "/ProjectsImgs/NetflixClone.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://mediafixcom.netlify.app/",
    githubUrl: "https://github.com/CODEWITHMAHA/netflix-clone/tree/main/NetflixClone",
  },
  {
    id: 6,
    title: "Weather App",
    description: "A responsive weather app built with HTML, CSS, and JavaScript that fetches real-time data from the OpenWeather API. Users can search for any city to view temperature, humidity, wind speed, and dynamic weather icons.",
    image: "/ProjectsImgs/weatherApp.png",
    tags: ["HTML", "CSS", "JavaScript", "OpenWeather API"],
    demoUrl: "https://mahaweather-app.netlify.app/",
    githubUrl: "https://github.com/CODEWITHMAHA/weather-app",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured<span className="text-primary"> Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects that showcase my skills and
          creativity. Click on the project titles to view more details.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg shadow-xs overflow-hidden card-hover"
            >
              <div className="overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-secondary font-medium border text-secondary-foreground px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="https://github.com/CODEWITHMAHA"
            target="_blank"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
