import {
  Stack,
  StackProps,
  Image,
  Title,
  Flex,
  useMantineTheme,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
interface OurUsersProps extends StackProps {
  text: string;
  img: string;
}

export function OurUsersCard({ text, img, ...props }: OurUsersProps) {
  const theme = useMantineTheme();
  const maxW = useMediaQuery(`(max-width: ${theme.breakpoints.md})`);
  const regex = new RegExp("<br/>", "g");
  return (
    <Stack
      gap={24}
      py={24}
      bd="1px solid white.2"
      align="center"
      bg="black.9"
      style={{ borderRadius: 12 }}
    >
      <Flex>
        <Image src={img} height={maxW ? 48 : 96} w={"auto"}></Image>
      </Flex>
      <Title
        c="white.0"
        fw="700"
        fz={{ base: 12, md: 24 }}
        lh={1.5}
        ta="center"
        tt="uppercase"
        dangerouslySetInnerHTML={{
          __html: maxW ? text.replace(regex, " ") : text,
        }}
      ></Title>
    </Stack>
  );
}
