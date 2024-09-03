import { Button, Group, Stack, StackProps } from "@mantine/core";
import { useState, useRef, useEffect } from "react";
import { Shell } from "../components/Shell";
import { Landing } from "../components/Sections/Landing/Landing";
import { Features } from "../components/Sections/Features/Features";
import { OurUsers } from "../components/Sections/OurUsers/OurUsers";
import { ComingSoon } from "../components/Sections/ComingSoon/ComingSoon";
import { AboutUs } from "../components/Sections/AboutUs/AboutUs";
import { ContactUs } from "../components/Sections/ContactUs/ContactUs";
import { Footer } from "../components/Footer/Footer";
import { Pages } from "../utils/pages";

export default function IndexPage() {
  const [currentSection, setCurrentSection] = useState("home");
  const handleSectionChange = (section: string) => {
    setCurrentSection(section);
    const sectionElement = document.getElementById(section);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  const sections = Pages.map((page) => {
    return {
      ref: useRef(null),
      name: page.name,
      id: page.id,
    };
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = sections.find(
              (section) => section.ref.current === entry.target
            );
            if (section) {
              setCurrentSection(section.name);
              // console.log(section);
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
      <div {...sections[0]}>
        <Landing onSectionChange={handleSectionChange} />
      </div>
      <div {...sections[1]}>
        <Features />
      </div>
      <div {...sections[2]}>
        <OurUsers />
      </div>
      <div {...sections[3]}>
        <ComingSoon />
      </div>
      <div {...sections[4]}>
        <AboutUs />
      </div>
      <div {...sections[5]}>
        <ContactUs />
      </div>
      <Footer setSection={handleSectionChange}></Footer>
    </Shell>
  );
}
