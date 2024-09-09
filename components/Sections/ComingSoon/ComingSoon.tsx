import { Stack, Title, Text, Flex, useMantineTheme } from "@mantine/core";
import classes from "./ComingSoon.module.css";
import { Section } from "../Section";
import { useEffect, useState } from "react";
import { useMediaQuery } from "@mantine/hooks";

export function ComingSoon() {
  const theme = useMantineTheme();
  const maxW = useMediaQuery(`(max-width: ${theme.breakpoints.md})`);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((currentIndex) => currentIndex + 1);
    }, 1000); // Change image every 1000 milliseconds

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  });
  return (
    <Section
      bg="black.9"
      title="Coming Soon"
      innerProps={{
        flex: 1,
      }}
      h={{ base: "200vh", md: "100vh" }}
    >
      <Flex
        // justify="space-between"
        flex={1}
        align="stretch"
        style={{ flexDirection: maxW ? "column" : "row" }}
        gap={"md"}
      >
        <Stack flex={1} gap={0}>
          <Title c="white.0" lh={1.5} fz={{ lg: "h1", md: "h2", base: "h3" }}>
            Schedule Group Workouts
          </Title>
          <Text c="white.1">Train with your friends</Text>
          <Flex
            mt="md"
            flex={1}
            style={{
              backgroundImage: `url(assets/schedule/${(index % 3) + 1}.png)`,
            }}
            className={classes.img}
          ></Flex>{" "}
        </Stack>
        <Stack flex={1} gap={0} lh={1.5}>
          <Title c="white.0" lh={1.5} fz={{ lg: "h1", md: "h2", base: "h3" }}>
            Track your workouts
          </Title>
          <Text fz={{ lg: "md", md: "sm" }} c="white.1">
            Journal your latest workout progress
          </Text>
          <Flex
            mt="md"
            flex={1}
            style={{
              backgroundImage: `url(assets/workout/${(index % 6) + 1}.png)`,
            }}
            className={classes.img}
          ></Flex>
        </Stack>
      </Flex>
    </Section>
  );
}
