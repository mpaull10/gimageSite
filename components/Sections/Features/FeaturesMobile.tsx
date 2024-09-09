import { Group, Stack, Title, Text, Image } from "@mantine/core";
import { featuresData } from "./Features";
export function FeaturesMobile() {
  const items = featuresData.map((d, index) => {
    return (
      <Group h="30%" wrap="nowrap" key={index} align="top">
        <Stack
          w="30%"
          h="100%"
          style={{
            // alignSelf: "stretch",
            backgroundImage: `url(${d.image})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            // backgroundPosition: "right",
            // flex: "1 0 100%",
          }}
        ></Stack>
        <Stack
          w="60%"
          mt="xl"
          c="white.0"
          gap="sm"
          align="start"
          key={index}
          style={{ cursor: "pointer" }}
        >
          <Stack gap="md">
            <Title fz={64} fw={900} lh={0.8} w={36} fs="italic">
              {index + 1}
              <span style={{ fontSize: 48 }}>.</span>
            </Title>
            <Title tt="uppercase" fw={900} fz={21} lh={1.2}>
              {d.title}
            </Title>
          </Stack>

          <Text fz="sm" c="white.1">
            {d.subtitle}
          </Text>
        </Stack>

        {/* <Image src={d.image} h=""></Image> */}
      </Group>
    );
  });
  return (
    <Stack hiddenFrom="md" h="100%" justify="space-between">
      {items}
    </Stack>
  );
}
