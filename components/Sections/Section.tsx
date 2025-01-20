import { StackProps, Stack, useMantineTheme, Title } from "@mantine/core";
import { HEADERHEIGHT } from "../Shell";

interface SectionProps extends StackProps {
  innerProps?: StackProps;
  title?: string;
  double?: boolean;
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
      fz={{ base: "42", lg: 64 }}
      style={{ alignSelf: "flex-start" }}
      ta="start"
      c="white.0"
      tt="uppercase"
      fw={900}
      mb={24}
    >
      {title}
    </Title>
  ) : null;
  return (
    <Stack {...props} mih="100vh">
      <Stack
        w={{ base: "100%", lg: theme.breakpoints.lg }}
        left={0}
        right={0}
        mx="auto"
        bg="transparent"
        px={{ base: 16, lg: 0 }}
        mt={HEADERHEIGHT}
        pt="xl"
        align={title ? "left" : "center"}
        mb={{ base: "16", lg: "64" }}
        {...innerProps}
      >
        {titleSection}
        {children}
      </Stack>
    </Stack>
  );
}
