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
  const [isManualScroll, setIsManualScroll] = useState(false);

  // Auto-scroll timer
  useEffect(() => {
    const autoScrollInterval = setInterval(() => {
      if (isManualScroll) return; // Skip auto-scrolling if manual scroll is active

      if (!featuresSectionRef.current || !imagesContainerRef.current) return;

      const section = featuresSectionRef.current;
      const rect = section.getBoundingClientRect();

      // Only auto-scroll if the section is in view
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        const nextIndex = (currentImageIndex + 1) % featuresData.length;
        setCurrentImageIndex(nextIndex);

        // Scroll to the next image
        const imagesContainer = imagesContainerRef.current;
        const targetImage = imagesContainer.children[nextIndex];
        if (targetImage) {
          targetImage.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }
    }, 4000);

    return () => clearInterval(autoScrollInterval); // Cleanup timer
  }, [currentImageIndex, isManualScroll]);

  const handleManualClick = (index: number) => {
    setCurrentImageIndex(index); // Update current index
    setIsManualScroll(true); // Set manual scroll flag
    const imagesContainer = imagesContainerRef.current;
    const targetImage = imagesContainer?.children[index];
    if (targetImage) {
      targetImage.scrollIntoView({ behavior: "smooth", block: "center" });
    }

    // Reset manual scroll flag after 5 seconds
    setTimeout(() => {
      setIsManualScroll(false);
    }, 2000);
  };

  const list = featuresData.map((feature, index) => (
    <Group
      c="white.0"
      gap={32}
      align="center"
      opacity={index === currentImageIndex ? 1 : 0.5}
      key={feature.id}
      style={{ cursor: "pointer" }}
      onClick={() => handleManualClick(index)}
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

  const images = featuresData.map((feature, index) => (
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
        opacity: index === currentImageIndex ? 1 : 0.5,
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
            overflowY: "hidden", // Disable scrolling outside container
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