import { Stack, Title, Text, Group } from "@mantine/core";
import { Section } from "../Section";
import { useRef, useState, useEffect } from "react";
import { FeaturesMobile } from "./FeaturesMobile";

export const featuresData = [
  {
    title: "Post gimages",
    subtitle: "Show yourself staying active",
    image: "/assets/gimages.png",
    id: "gimage",
  },
  {
    title: "Join Groups",
    subtitle: "Create your next fitness community",
    image: "/assets/groups.png",
    id: "group",
  },
  {
    title: "Start Discussions",
    subtitle: "Ask wellness questions to discussion boards",
    image: "/assets/discussion.png",
    id: "discussion",
  },
];

export function Features() {
  const featuresSectionRef = useRef<HTMLDivElement>(null);
  const imagesContainerRef = useRef<HTMLDivElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const isScrollingRef = useRef(false); // Flag to indicate if a scroll is in progress
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = featuresData.findIndex(
              (feature) => feature.id === entry.target.id
            );
            if (index !== -1) {
              setCurrentImageIndex(index);
            }
          }
        });
      },
      {
        root: null,
        threshold: 0.5, // Adjust this value as needed
      }
    );

    const imagesContainer = imagesContainerRef.current;
    if (imagesContainer) {
      Array.from(imagesContainer.children).forEach((child) => {
        observer.observe(child);
      });
    }

    return () => {
      if (imagesContainer) {
        Array.from(imagesContainer.children).forEach((child) => {
          observer.unobserve(child);
        });
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      event.preventDefault(); // Prevent default scrolling behavior

      if (isScrollingRef.current) {
        return; // Ignore scroll events if a scroll is already in progress
      }

      isScrollingRef.current = true;

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      scrollTimeoutRef.current = setTimeout(() => {
        if (imagesContainerRef.current) {
          const currentIndex = currentImageIndex;
          let newIndex = currentIndex;

          if (event.deltaY > 0) {
            // Scrolling down
            newIndex = Math.min(currentIndex + 1, featuresData.length - 1);
          } else {
            // Scrolling up
            newIndex = Math.max(currentIndex - 1, 0);
          }

          const targetImage = imagesContainerRef.current.children[newIndex];
          if (targetImage) {
            targetImage.scrollIntoView({ behavior: "smooth", block: "center" });
            setCurrentImageIndex(newIndex);

            // Set a timeout to reset the isScrollingRef flag after the scroll animation is done
            setTimeout(() => {
              isScrollingRef.current = false;
            }, 400); // Adjust this value to match the duration of the smooth scroll
          }
        }
      }, 200); // Adjust the debounce delay as needed
    };

    const featuresSection = featuresSectionRef.current;
    if (featuresSection) {
      featuresSection.addEventListener("wheel", handleScroll);
    }

    return () => {
      if (featuresSection) {
        featuresSection.removeEventListener("wheel", handleScroll);
      }
    };
  }, [currentImageIndex, featuresData.length]);

  const list = featuresData.map((feature, index) => (
    <Group
      c="white.0"
      gap={32}
      align="center"
      opacity={index === currentImageIndex ? 1 : 0.5}
      key={feature.id}
      style={{ cursor: "pointer" }}
      onClick={() => {
        const targetImage = imagesContainerRef.current?.children[index];
        if (targetImage) {
          targetImage.scrollIntoView({ behavior: "smooth", block: "center" });
          setCurrentImageIndex(index);
        }
      }}
    >
      <Title fz={160} fw={900} lh={0.8} w={144} fs="italic">
        {index + 1}
        <span style={{ fontSize: 128 }}>.</span>
      </Title>
      <Stack gap={0}>
        <Title tt="uppercase" fw={900} fz={48} lh={1.2}>
          {feature.title}
        </Title>
        <Text fz="lg" c="white.1">
          {feature.subtitle}
        </Text>
      </Stack>
    </Group>
  ));

  const images = featuresData.map((feature) => (
    <Stack
      key={feature.id}
      id={feature.id}
      style={{
        backgroundImage: `url(${feature.image})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "100%",
        flex: "0 0 100%", // Each image takes full height
        opacity: feature.id === featuresData[currentImageIndex].id ? 1 : 0.5,
        transition: "opacity 0.5s ease",
        marginLeft: "60%", // Adjust the margin to move the images to the right
      }}
    ></Stack>
  ));

  return (
    <Section
      bg="black.9"
      h={{ base: "200vh", md: "100vh" }}
      title="Features"
      innerProps={{
        flex: 1,
        pb: "xl",
      }}
    >
      <Stack
        ref={featuresSectionRef}
        h="100%"
        style={{ overflow: "hidden", position: "relative" }}
        visibleFrom="md"
      >
        <Stack pos="absolute" gap="lg">
          {list}
        </Stack>
        <div
          ref={imagesContainerRef}
          style={{
            display: "flex",
            flexDirection: "column", // Arrange images vertically
            overflowY: "auto", // Enable vertical scrolling
            width: "100%",
            height: "100%",
          }}
        >
          {images}
        </div>
      </Stack>
      <FeaturesMobile></FeaturesMobile>
    </Section>
  );
}