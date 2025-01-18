import { Stack, Title, Text, Group } from "@mantine/core";
import { Section } from "../Section";
import { useRef, useState, useEffect } from "react";
import { FeaturesMobile } from "./FeaturesMobile";

// Data for the features
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
  // Create refs for each feature to track their positions
  const features = [
    { ...featuresData[0], ref: useRef<HTMLDivElement>(null) },
    { ...featuresData[1], ref: useRef<HTMLDivElement>(null) },
    { ...featuresData[2], ref: useRef<HTMLDivElement>(null) },
  ];
  const [subsection, setSubsection] = useState<string>("gimage");

  // Use IntersectionObserver to detect when a feature is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const feature = features.find(
              (feature) => feature.ref.current === entry.target
            );
            if (feature) {
              setSubsection(feature.id); // Update the subsection state when a feature is in view
            }
          }
        });
      },
      {
        root: null,
        threshold: 0.5, // Trigger when 50% of the feature is in view
      }
    );

    // Observe each feature
    features.forEach((feature) => {
      if (feature.ref.current) {
        observer.observe(feature.ref.current);
      }
    });

    // Cleanup observer on component unmount
    return () => {
      features.forEach((feature) => {
        if (feature.ref.current) {
          observer.unobserve(feature.ref.current);
        }
      });
    };
  }, [features]);

  const handleClick = (id: string) => {
    const feature = features.find((feature) => feature.id === id);
    if (feature && feature.ref.current) {
      feature.ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
      setSubsection(id);
    }
  };

  const list = features.map((d, index) => (
    <Group
      c="white.0"
      gap={32}
      align="center"
      opacity={d.id === subsection ? 1 : 0.5}
      key={index}
      style={{ cursor: "pointer" }}
      onClick={() => handleClick(d.id)}
    >
      <Title fz={160} fw={900} lh={0.8} w={144} fs="italic">
        {index + 1}
        <span style={{ fontSize: 128 }}>.</span>
      </Title>
      <Stack gap={0}>
        <Title tt="uppercase" fw={900} fz={48} lh={1.2}>
          {d.title}
        </Title>
        <Text fz="lg" c="white.1">
          {d.subtitle}
        </Text>
      </Stack>
    </Group>
  ));

  // Render the images for each feature
  const images = features.map((d, index) => (
    <Stack
      h="100%"
      key={index}
      id={d.id}
      ref={d.ref}
      style={{
        backgroundImage: `url(${d.image})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right",
        flex: "1 0 100%",
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
      {/* Container for the feature list and images */}
      <Stack h="100%" style={{ overflow: "hidden", position: "relative" }} visibleFrom="md">
        {/* Absolute positioned stack for the feature list */}
        <Stack pos="absolute" gap="lg" style={{ width: "100%", pointerEvents: "none" }}>
          {list}
        </Stack>
        {/* Scrollable container for the images */}
        <div style={{ overflowY: "scroll", height: "100%", width: "100%" }}>
          {images}
        </div>
      </Stack>
      {/* Mobile version of the features */}
      <FeaturesMobile></FeaturesMobile>
    </Section>
  );
}