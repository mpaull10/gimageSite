import { Stack, Title, Text } from "@mantine/core";
import { featuresData } from "./Features";

export function FeaturesMobile() {
  const items = featuresData.map((d, index) => {
    return (
      <Stack key={index} align="center" mb="md" spacing="xs">
        <Stack
          w="100%"
          c="white.0"
          gap="xs"
          align="center"
          style={{ cursor: "pointer" }}
        >
          <Title fz={32} fw={900} lh={1} fs="italic">
            {index + 1}
            <span style={{ fontSize: 24 }}>.</span>
          </Title>
          <Title tt="uppercase" fw={700} fz={20} lh={1.2}>
            {d.title}
          </Title>
          <Text fz="md" c="white.1" align="center">
            {d.subtitle}
          </Text>
        </Stack>
        <Stack
          w="100%"
          h={400} // Increase the height for the image container
          style={{
            backgroundImage: `url(${d.image})`,
            backgroundSize: "contain", // Ensure the image is fully visible
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            borderRadius: "8px", // Add border radius for better aesthetics
          }}
        ></Stack>
      </Stack>
    );
  });

  return (
    <Stack hiddenFrom="md" h="100%" justify="flex-start" gap="md" mb="xl">
      {items}
    </Stack>
  );
}