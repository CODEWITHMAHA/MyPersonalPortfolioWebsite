import { Github, Linkedin, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Got an idea worth building? Let’s turn it into something extraordinary
          — I’m open to exciting projects, bold ideas, and opportunities that
          make an impact.
        </p>
        <div>
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-10">
              Contact Information
            </h3>
            <div className=" flex flex-col justify-start items-start sm:justify-center sm:items-center space-x-7 space-y-8 md:space-y-0 md:flex-row md:space-x-8">
              <div className="flex items-center space-x-4">
                <div className="p-2 mt-2 bg-primary/10 rounded-full">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-start">Email</h4>
                  <a
                    href="mailto:maharukh817@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    maharukh817@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-2 mt-2 bg-primary/10 rounded-full">
                  <Linkedin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-start">LinkedIn</h4>
                  <a
                    href="https://www.linkedin.com/in/mahrukh-khan-195668236"
                    target="_blank"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Mahrukh Khan
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-2 mt-2 bg-primary/10 rounded-full">
                  <Github className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-start">Github</h4>
                  <a
                    href="https://github.com/CODEWITHMAHA"
                    target="_blank"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    CODEWITHMAHA
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
