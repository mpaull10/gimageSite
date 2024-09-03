import { Group, Stack, Title, Text, Image } from "@mantine/core";
import { featuresData } from "./Features";
export function FeaturesMobile() {
  const items = featuresData.map((d, index) => {
    return (
      <Stack h="30%">
        <Group
          c="white.0"
          gap={32}
          align="center"
          key={index}
          style={{ cursor: "pointer" }}
        >
          <Title fz={64} fw={900} lh={0.8} w={36} fs="italic">
            {index + 1}
            <span style={{ fontSize: 48 }}>.</span>
          </Title>
          <Stack gap={0}>
            <Title tt="uppercase" fw={900} fz={24} lh={1.2}>
              {d.title}
            </Title>
            <Text fz="sm" c="white.1">
              {d.subtitle}
            </Text>
          </Stack>
        </Group>
        <Stack
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
        {/* <Image src={d.image} h=""></Image> */}
      </Stack>
    );
  });
  return (
    <Stack hiddenFrom="md" h="100%" justify="space-between">
      {items}
    </Stack>
  );
}
