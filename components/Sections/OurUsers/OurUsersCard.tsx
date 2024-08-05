import { Stack, StackProps, Image, Title, Flex } from "@mantine/core";
import classes from "./OurUsersCard.module.css";
interface OurUsersProps extends StackProps {
  text: string;
  img: string;
}

export function OurUsersCard({ text, img, ...props }: OurUsersProps) {
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
        <Image src={img} height={96} w={"auto"}></Image>
      </Flex>
      <Title
        c="white.0"
        fw="700"
        fz={24}
        lh={1.5}
        ta="center"
        tt="uppercase"
        dangerouslySetInnerHTML={{ __html: text }}
      ></Title>
    </Stack>
  );
}
