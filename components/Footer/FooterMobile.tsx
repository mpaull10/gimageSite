import {
  Group,
  Stack,
  Button,
  Image,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { Pages } from "../../utils/pages";
interface FooterProps {
  setSection: (section: string) => void;
}
const style = {
  backgroundColor: "transparent",
  padding: 0,
  margin: 0,
};
export function FooterMobile({ setSection }: FooterProps) {
  const theme = useMantineTheme();

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
      w={{ base: "intitial", lg: theme.breakpoints.lg }}
      left={0}
      right={0}
      mx="auto"
      px={{ base: 16, lg: 0 }}
    >
      <Stack align="center">
        <Button style={style} onClick={() => setSection("Home")}>
          <Image src="/assets/LogoOrange.svg" h="32"></Image>
        </Button>
        <Group gap="sm" justify="center">
          {items}
        </Group>
        <Group>
          <Button style={style}>
            <Image src="/assets/instragram.png" h="20"></Image>
          </Button>
          <Button style={style}>
            <Image src="/assets/linkedin.png" h="20"></Image>
          </Button>
        </Group>
      </Stack>
      <Group
        style={{ borderTop: "var(--mantine-color-white-2) 1px solid" }}
        py="sm"
      >
        <Text fz="sm">@2024 Gimage, All rights reserved</Text>
      </Group>
    </Stack>
  );
}
