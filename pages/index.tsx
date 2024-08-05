import { Button, Group, Stack, StackProps } from "@mantine/core";
import { useState, useRef, useEffect } from "react";
import { Shell } from "../components/Shell";
import { Landing } from "../components/Sections/Landing/Landing";
import { Features } from "../components/Sections/Features/Features";
import { OurUsers } from "../components/Sections/OurUsers/OurUsers";
import { ComingSoon } from "../components/Sections/ComingSoon/ComingSoon";
import { AboutUs } from "../components/Sections/AboutUs/AboutUs";
import { ContactUs } from "../components/Sections/ContactUs/ContactUs";

export default function IndexPage() {
  const [currentSection, setCurrentSection] = useState<string>("Home");
  const handleSectionChange = (section: string) => {
    setCurrentSection(section);
    const sectionElement = document.getElementById(section);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  const landingRef = useRef(null);
  const featuresRef = useRef(null);
  const ourUsersRef = useRef(null);
  const comingSoonRef = useRef(null);
  const aboutUsRef = useRef(null);
  const contactUsRef = useRef(null);

  useEffect(() => {
    const sections = [
      { ref: landingRef, name: "Home" },
      { ref: featuresRef, name: "Features" },
      { ref: ourUsersRef, name: "Users" },
      { ref: comingSoonRef, name: "R&D" },
      { ref: aboutUsRef, name: "About" },
      { ref: contactUsRef, name: "Contact" },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = sections.find(
              (section) => section.ref.current === entry.target
            );
            if (section) {
              setCurrentSection(section.name);
              console.log(section);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: "99% 0% 0% 0%",
        threshold: 0.99,
        // threshold: 0.99,
      }
    );

    sections.forEach((section) => {
      if (section.ref.current) {
        observer.observe(section.ref.current);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (section.ref.current) {
          observer.unobserve(section.ref.current);
        }
      });
    };
  }, []);
  useEffect(() => {
    const sectionElement = document.getElementById("OurUsers");
    if (sectionElement) {
      console.log(sectionElement.getBoundingClientRect().top);
    }
  }, []);

  return (
    <Shell
      currentSection={currentSection}
      onSectionChange={handleSectionChange}
    >
      <div id="Home" ref={landingRef}>
        <Landing onSectionChange={handleSectionChange} />
      </div>
      <div id="Features" ref={featuresRef}>
        <Features />
      </div>
      <div id="Users" ref={ourUsersRef}>
        <OurUsers />
      </div>
      <div id="R&D" ref={comingSoonRef}>
        <ComingSoon />
      </div>
      <div id="About" ref={aboutUsRef}>
        <AboutUs />
      </div>
      <div id="Contact" ref={contactUsRef}>
        <ContactUs />
      </div>
    </Shell>
  );
}
