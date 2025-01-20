import { Button, Group, Image, Stack, Text, useMantineTheme } from "@mantine/core";
import { Pages } from "../../utils/pages";
import { useState } from "react";

interface FooterMobileProps {
  setSection: (section: string) => void;
}

export function FooterMobile({ setSection }: FooterMobileProps) {
  const theme = useMantineTheme();
  const style = {
    backgroundColor: "transparent",
    color: "white",
    border: "none", // Remove border
    outline: "none", // Remove outline
  };

  const items = Pages.map((sec, index) => (
    <Button
      key={index}
      onClick={() => setSection(sec.id)}
      style={style}
      fz="sm"
      my="0"
    >
      {sec.name}
    </Button>
  ));

  return (
    <Stack
      w={{ base: "initial", lg: theme.breakpoints.lg }}
      left={0}
      right={0}
      mx="auto"
      px={{ base: 16, lg: 0 }}
      py="md" // Add padding to ensure enough space
    >
      <Stack align="center">
        <Button style={style} onClick={() => setSection("Home")} p={0}>
          <Image src="/assets/LogoOrange.svg" h="32" />
        </Button>
        <Group gap="sm" justify="center">
          {items}
        </Group>
        <Group justify="center" gap="sm" mt="sm">
          <a href="https://www.instagram.com/gimageco?igsh=dmMwazdmNGxyNGFy" target="_blank" rel="noopener noreferrer">
            <Button
              style={{ ...style, display: "flex", justifyContent: "center", alignItems: "center", padding: 0 }}
            >
              <Image src="/assets/instragram.png" h="20" />
            </Button>
          </a>
          <a href="https://www.linkedin.com/company/gimageco/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
            <Button
              style={{ ...style, display: "flex", justifyContent: "center", alignItems: "center", padding: 0 }}
            >
              <Image src="/assets/linkedin.png" h="20" />
            </Button>
          </a>
        </Group>
      </Stack>
      <Group
        style={{ borderTop: "var(--mantine-color-white-2) 1px solid" }}
        py="sm"
        justify="center"
      >
        <Text fz="sm">@2024 Gimage, All rights reserved</Text>
      </Group>
    </Stack>
  );
}
