import { Stack, Title, Text, Group, Button, SimpleGrid } from "@mantine/core";
import classes from "./Landing.module.css";
import { Section } from "../Section";
import { OurUsersCard } from "./OurUsersCard";
import ChevronDown from "../../../public/chevronDown.svg";
const data = [
  {
    text: "Anyone looking for a<br/>social fitness community",
    img: "/community.png",
  },
  {
    text: "Active gymgoers looking to<br/>enhance their fitness experiences",
    img: "/graph.png",
  },
  {
    text: "Newcomers seeking<br/>guidance and motivation",
    img: "/book.png",
  },
  {
    text: "Anyone curious about<br/>new and diverse fitness activities ",
    img: "/question.png",
  },
];
export function OurUsers() {
  return (
    <Section
      bg="black.9"
      title="Our users"
      innerProps={{
        flex: 1,
        pb: "xl",
      }}
    >
      <SimpleGrid
        cols={2}
        spacing={{ base: 12, md: 24 }}
        verticalSpacing={{ base: 12, md: 24 }}
      >
        {data.map((card, index) => (
          <OurUsersCard {...card} key={index} />
        ))}
      </SimpleGrid>
    </Section>
  );
}
