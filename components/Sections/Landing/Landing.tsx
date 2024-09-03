import {
  Stack,
  Title,
  Text,
  Group,
  Button,
  useMantineTheme,
} from "@mantine/core";
import classes from "./Landing.module.css";
import { Section } from "../Section";
import { GimageButton } from "../../Buttons/GimageButton";
import ChevronDown from "../../../public/chevronDown.svg";
import { useMediaQuery } from "@mantine/hooks";
interface LandingProps {
  onSectionChange: (section: string) => void;
}

export function Landing({ onSectionChange }: LandingProps) {
  const theme = useMantineTheme();
  const maxW = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  return (
    <Section
      className={classes.background}
      innerProps={{
        align: "center",
        justify: "space-between",
        flex: 1,
        pb: "xl",
      }}
    >
      <Stack align="center" gap="sm">
        <Title
          c="white.0"
          fw={900}
          ta="center"
          tt="uppercase"
          lh={0.875}
          fz={{ base: 64, lg: 128 }}
        >
          Train.
          <br />
          Share.
          <br />
          Connect.
        </Title>
        <Title tt="uppercase" fz={{ base: 32, lg: 48 }} c="black.9" ta="center">
          BUILDING GYM COMMUNITIES
        </Title>

        <Group mt={{ base: "md", lg: "lg" }}>
          <Button
            variant="filled"
            bg="black.9"
            onClick={() => onSectionChange("contact")}
            tt="uppercase"
            fw="700"
            fz={{ base: "lg", lg: 24 }}
            px="sm"
            h="auto"
            py={4}
            lh={1.5}
            radius={4}
            style={{ borderWidth: 2 }}
          >
            Contact us
          </Button>
          <Button
            variant="outline"
            color="white.0"
            onClick={() => onSectionChange("features")}
            tt="uppercase"
            fw="700"
            fz={{ base: "lg", lg: 24 }}
            px="sm"
            h="auto"
            py={4}
            lh={1.5}
            radius={4}
            style={{ borderWidth: 2 }}
          >
            Learn more
          </Button>
        </Group>
        <Text
          ta="center"
          c="white.0"
          fw={700}
          fz="lg"
          lh={1.4}
          mt={{ base: "md", lg: "lg" }}
        >
          A fitness focused social media app to promote an active lifestyle,
          <br style={{ display: maxW ? "none" : "initial" }} />
          exchange ideas, and stay accountable.
        </Text>
      </Stack>
      {/* <Button
        unstyled
        style={{ background: "transparent", border: "none" }}
        p={0}
        onClick={() => onSectionChange("Features")}
      >
        <ChevronDown height="16"></ChevronDown>
      </Button> */}
    </Section>
  );
}
