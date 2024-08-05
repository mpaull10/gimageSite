import {
  Stack,
  Title,
  Text,
  Group,
  Image,
  Flex,
  useMantineTheme,
  BackgroundImage,
} from "@mantine/core";
import { Section } from "../Section";
const data = [
  { name: "Matthew Paull", img: "../matthew.png", position: "CEO" },

  { name: "Jason Kornbluth", img: "../jason.png", position: "COO" },

  { name: "Evan Sommer", img: "../evan.png", position: "CFO" },
];
export function AboutUs() {
  const theme = useMantineTheme();
  const pics = data.map((d, index) => (
    <Stack key={index} gap={0}>
      <Image
        src={d.img}
        w={148}
        style={{ borderRadius: "12px 12px 0px 0px" }}
      ></Image>
      <Title c="white.0" fw={700} fz={16} mt={12}>
        {d.name}
      </Title>
      <Text c="white.2">{d.position} </Text>
    </Stack>
  ));
  return (
    <Section
      bg="black.9"
      title="About Us"
      innerProps={{
        flex: 1,
      }}
    >
      <Stack
        maw={theme.breakpoints.sm}
        flex={1}
        style={{ alignSelf: "center" }}
        justify="space-between"
      >
        <Stack gap="sm">
          <Title tt="uppercase" fw={900} c="white.0">
            Our Mission
          </Title>

          <Group wrap="nowrap" align="top">
            <Image src="/quotes.png" h={48} mt={8}></Image>
            <Text fw="500" c="white.1" fz={18}>
              Our mission is to connect the gym community! Share your fitness
              journey, offer support to others, and stay accountable. Were
              connecting everyone, of all fitness levels, to create a stronger,
              more motivated fitness family!
            </Text>
          </Group>
        </Stack>
        <Stack align="center" gap="sm">
          <Group gap={48} mt="xl">
            {pics}
          </Group>
          <Text fz={16} c="white.1">
            Welcome to Gimage! The Gimage team consists of three dedicated
            students at The Ohio State University. We have a passion for
            activity in all shapes and forms, from weightlifting and yoga, to
            running and playing sports. We decided to develop this app to create
            a tight knit, active community across all facets of healthy
            lifestyle. On our app, people can share their growth, seek advice,
            and find inspiration.
          </Text>
        </Stack>
      </Stack>
    </Section>
  );
}
