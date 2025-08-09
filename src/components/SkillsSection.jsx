import { useState } from "react";
import { cn } from "../lib/utils";

const skills = [
  { name: "HTML", level: "90", category: "Frontend" },
  { name: "CSS", level: "90", category: "Frontend" },
  { name: "JavaScript", level: "80", category: "Frontend" },
  { name: "React", level: "80", category: "Frontend" },
  { name: "Tailwind css", level: "90", category: "Frontend" },
  { name: "API integration", level: "70", category: "Frontend" },
  { name: "Git/Github", level: "70", category: "tools" },
  { name: "Vs Code", level: "90", category: "tools" },
];

const categories = [
  { name: "All", value: "all" },
  { name: "Frontend", value: "Frontend" },
  { name: "Tools", value: "tools" },
];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap  justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category.value)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category.value}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="text-lg font-semibold ">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 overflow-hidden rounded-full">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out"
                  style={{
                    width: skill.level + "%",
                  }}
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
