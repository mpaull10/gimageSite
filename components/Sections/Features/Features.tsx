import { Stack, Title, Text, Group } from "@mantine/core";

import { Section } from "../Section";
import { useEffect, useRef, useState } from "react";
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
    title: "Start Discussion",
    subtitle: "Ask wellness questions to discussion boards",
    image: "/assets/discussion.png",
    id: "discussion",
  },
];
export function Features() {
  const features = featuresData.map((d) => {
    return { ref: useRef(null), ...d };
  });
  const [subsection, setSubsection] = useState<string>("gimage");
  const handleSectionChange = (subsection: string, e: React.MouseEvent) => {
    // e.stopPropagation(); // Stop event from propagating to the page

    setSubsection(subsection);
    const sectionElement = document.getElementById(subsection);
    if (sectionElement) {
      sectionElement.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }
  };

  const list = features.map((d, index) => (
    <Group
      c="white.0"
      gap={32}
      align="center"
      opacity={d.id === subsection ? 1 : 0.5}
      key={index}
      onClick={(e) => handleSectionChange(d.id, e)}
      style={{ cursor: "pointer" }}
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
  const images = features.map((d, index) => (
    <Stack
      h="100%"
      key={index}
      id={d.id}
      style={{
        // alignSelf: "stretch",
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
      h={{ base: "200vh", lg: "100vh" }}
      title="Features"
      innerProps={{
        flex: 1,
        pb: "xl",
      }}
    >
      <Stack h="100%" style={{ overflow: "scroll" }} visibleFrom="md">
        <Stack pos="absolute" gap="lg">
          {list}
        </Stack>
        {images}
      </Stack>
      <FeaturesMobile></FeaturesMobile>

      {/* <Stack
        // h="12"
        // right={0}
        // m={"auto"}
        h="100%"
        style={{
          // alignSelf: "stretch",
          backgroundImage: `url(${imgs[subsection]})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right",
          flex: "1 0 100%",
        }}
      ></Stack> */}
      {/* </Stack> */}
      {/* // </Group> */}

      {/* </Group> */}

      {/* <div className="images">
        {imgs.map((img, index) => (
          <img key={index} src={img} className="image" />
        ))}
      </div> */}
    </Section>
  );
}
