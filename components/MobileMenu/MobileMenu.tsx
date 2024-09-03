import {
  Drawer,
  Image,
  rem,
  Anchor,
  Burger,
  Text,
  Button,
  Stack,
  Group,
} from "@mantine/core";
import { Pages } from "../../utils/pages";
import classes from "./MobileMenu.module.css";
import classNames from "classnames";

// import { HeaderMenu } from "../header/HeaderMenu";
import { useRouter } from "next/router";
// import { IconChevronRight } from "@tabler/icons-react";
// import Logo from "../../public/assets/combinationMark.svg";
// import { socials } from "../../utils/socials";
interface MobileMenuProps {
  currentSection: string;
  onSectionChange: (section: string) => void;
  opened: boolean;
  onClose: () => void;
}
const style = {
  backgroundColor: "transparent",
  padding: 0,
  margin: 0,
};
export function MobileMenu({
  opened,
  onClose,
  currentSection,
  onSectionChange,
}: MobileMenuProps) {
  const items = Pages.map((page, index) => (
    <button
      key={index}
      className={classNames(
        currentSection === page.name ? classes.active : classes.inactive,
        classes.button
      )}
      onClick={() => {
        onClose();
        onSectionChange(page.id);
      }}
    >
      <Text fz="lg" c="white.0" fw="700">
        {page.name}
      </Text>
    </button>
  ));
  //   const pages = Pages.map((page, pageIndex) => (

  //  <NavLink
  //    label={page.label}
  //    href={page.link}
  //    target={page.newTab ? "_blank" : "_self"}
  //    key={`page-${pageIndex}`}
  //    className={`${classes.navLink} ${
  //      currentPath === page.link ? classes.active : ""
  //    }`}
  //    fz={rem(24)}
  //    rightSection={
  //      page.links ? (
  //        <IconChevronRight
  //          size={24}
  //          stroke={3}
  //          className="mantine-rotate-rtl"
  //        />
  //      ) : null
  //    }
  //  >
  //    {page.links
  //      ? page.links.map((innerPage, innerPageIndex) => (
  //          <NavLink
  //            target={page.newTab ? "_blank" : "_self"}
  //            className={`${classes.navLink} ${classes.innerNavLink}`}
  //            href={innerPage.link}
  //            label={innerPage.label}
  //            key={`innerPage-${pageIndex}-${innerPageIndex}`}
  //          ></NavLink>
  //        ))
  //      : null}
  //  </NavLink>
  //   ));

  return (
    <Drawer
      position="right"
      opened={opened}
      onClose={onClose}
      p={0}
      className={classes.drawer}
      withCloseButton={false}
      size={"xs"}
    >
      <Drawer.Header className={classes.header}>
        {/* <Anchor href="/"><Logo height="32" /></Anchor> */}
        <Button
          unstyled
          className={classes.button}
          onClick={() => {
            onClose();
            onSectionChange("home");
          }}
        >
          <Image src={"../assets/LogoOrange.svg"} h={36}></Image>
        </Button>
        <Burger opened={opened} onClick={onClose} size="sm" hiddenFrom="sm" />
      </Drawer.Header>
      <Drawer.Body p={0}>
        <Stack align="start" mt="md">
          {items}
        </Stack>

        <Group
          gap="xl"
          justify="center"
          align="top"
          wrap="nowrap"
          pos="fixed"
          bottom={0}
          mb={32}
          pr={16}
          w="100%"
        >
          <Button style={style}>
            <Image src="/assets/instragram.png" h="20"></Image>
          </Button>
          <Button style={style}>
            <Image src="/assets/linkedin.png" h="20"></Image>
          </Button>
        </Group>
      </Drawer.Body>
    </Drawer>
  );
}
