import { Stack, Title, Text, Group, Image, Flex } from "@mantine/core";
import classes from "./ComingSoon.module.css";
import { Section } from "../Section";

export function ComingSoon() {
  return (
    <Section
      bg="black.9"
      title="Coming Soon"
      innerProps={{
        flex: 1,
      }}
    >
      <Group justify="space-between" flex={1} align="stretch">
        <Stack flex={1} gap={0}>
          <Title c="white.0" lh={1.5}>
            Track your workouts
          </Title>
          <Text c="white.1">Journal your latest workout progress</Text>
          <Flex
            mt="md"
            flex={1}
            style={{ backgroundImage: "url(screen1.png)" }}
            className={classes.img}
          ></Flex>{" "}
        </Stack>
        <Stack flex={1} gap={0} lh={1.5}>
          <Title c="white.0">Track your workouts</Title>
          <Text c="white.1">Journal your latest workout progress</Text>
          <Flex
            mt="md"
            flex={1}
            style={{ backgroundImage: "url(screen2.png)" }}
            className={classes.img}
          ></Flex>
        </Stack>
      </Group>
    </Section>
  );
}
