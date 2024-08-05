import { StackProps, Stack, useMantineTheme, Title } from "@mantine/core";
import { HEADERHEIGHT } from "../Shell";

interface SectionProps extends StackProps {
  innerProps?: StackProps;
  title?: string;
}

export function Section({
  title,
  innerProps,
  children,
  ...props
}: SectionProps) {
  const theme = useMantineTheme();
  const titleSection = title ? (
    <Title
      fz={{ base: "xl", lg: 64 }}
      c="white.0"
      tt="uppercase"
      fw={900}
      mb={24}
    >
      {title}
    </Title>
  ) : null;
  return (
    <Stack {...props} h="100vh">
      <Stack
        w={{ base: "intitial", lg: theme.breakpoints.lg }}
        left={0}
        right={0}
        mx="auto"
        bg="transparent"
        px={{ base: 16, lg: 0 }}
        mt={HEADERHEIGHT}
        pt="xl"
        align={title ? "left" : "center"}
        mb="64"
        {...innerProps}
      >
        {titleSection}
        {children}
      </Stack>
    </Stack>
  );
}
