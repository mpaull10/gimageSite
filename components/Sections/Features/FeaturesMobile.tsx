import { Group, Stack, Title, Text } from "@mantine/core";
import { featuresData } from "./Features";
export function FeaturesMobile() {
  const items = featuresData.map((d, index) => {
    return (
      <Group h="auto" wrap="nowrap" key={index} align="top" mb="sm">
        <Stack
          w="30%"
          h="100%"
          style={{
            backgroundImage: `url(${d.image})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        ></Stack>
        <Stack
          w="60%"
          c="white.0"
          gap="xs"
          align="start"
          key={index}
          style={{ cursor: "pointer" }}
        >
          <Stack gap="xs">
            <Title fz={48} fw={900} lh={0.8} w={36} fs="italic">
              {index + 1}
              <span style={{ fontSize: 36 }}>.</span>
            </Title>
            <Title tt="uppercase" fw={900} fz={18} lh={1.2}>
              {d.title}
            </Title>
          </Stack>
          <Text fz="sm" c="white.1">
            {d.subtitle}
          </Text>
        </Stack>
      </Group>
    );
  });

  return (
    <Stack hiddenFrom="md" h="100%" justify="flex-start" gap="sm">
      {items}
    </Stack>
  );
}

