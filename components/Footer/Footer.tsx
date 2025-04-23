import { Group, Stack, Button, Image, Text, useMantineTheme, Menu } from "@mantine/core";
import { Pages } from "../../utils/pages";
import { useMediaQuery } from "@mantine/hooks";
import { FooterMobile } from "./FooterMobile";

interface FooterProps {
  setSection: (section: string) => void;
}

const style = {
  backgroundColor: "transparent",
  padding: 0,
  margin: 0,
};

export function Footer({ setSection }: FooterProps) {
  const theme = useMantineTheme();
  const maxW = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

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

  return maxW ? (
    <FooterMobile setSection={setSection} />
  ) : (
    <Stack
      w={{ base: "initial", lg: theme.breakpoints.lg }}
      left={0}
      right={0}
      mx="auto"
      px={{ base: 16, lg: 0 }}
    >
      <Stack align="center">
        <Button style={style} onClick={() => setSection("Home")}>
          <Image src="/assets/LogoOrange.svg" h="32" />
        </Button>
        <Group gap="sm" justify="center">
          {items}
        </Group>
        <Group justify="center">
          <a href="https://www.instagram.com/gimageco?igsh=dmMwazdmNGxyNGFy" target="_blank" rel="noopener noreferrer">
            <Button style={style}>
              <Image src="/assets/instragram.png" h="20" />
            </Button>
          </a>
          <a href="https://www.linkedin.com/company/gimageco/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
            <Button style={style}>
              <Image src="/assets/linkedin.png" h="20" />
            </Button>
          </a>
        </Group>
        <Menu shadow="md" width={200}>
          <Menu.Target>
            <Button style={style} fz="sm">
              Privacy & Terms
            </Button>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item component="a" href="/privacy">
              Privacy Policy
            </Menu.Item>
            <Menu.Item component="a" href="/terms">
              Terms of Use
            </Menu.Item>
            <Menu.Item component="a" href="/copyright">
              Copyright Policy
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
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
