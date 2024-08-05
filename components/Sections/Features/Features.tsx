import { Stack, Title, Text, Group, Button } from "@mantine/core";
import classes from "./Landing.module.css";
import { Section } from "../Section";
import { useEffect, useRef, useState } from "react";
import { GimageButton } from "../../Buttons/GimageButton";
import ChevronDown from "../../../public/chevronDown.svg";
const data = [
  { title: "Post gimages", subtitle: "Show yourself staying active" },
  { title: "Join Groups", subtitle: "Create your next fitness community" },
  {
    title: "Start Discussion",
    subtitle: "Ask wellness questions to discussion boards",
  },
];
const imgs = ["/screen1.png", "/screen1.png", "/screen1.png"];

export function Features() {
  const [subsection, setSubsection] = useState<number>(0);

  const list = data.map((d, index) => (
    <Group
      c="white.0"
      gap={32}
      align="center"
      opacity={index === subsection ? 1 : 0.5}
      key={index}
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

  return (
    <Section
      bg="black.9"
      title="Features"
      innerProps={{
        flex: 1,
        pb: "xl",
      }}
    >
      <Stack justify="space-between" flex={1}>
        {list}
      </Stack>
      {/* <div className="images">
        {imgs.map((img, index) => (
          <img key={index} src={img} className="image" />
        ))}
      </div> */}
    </Section>
  );
}
