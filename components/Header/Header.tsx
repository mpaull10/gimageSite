"use client";

import { Button, Group, Text, Image, Burger } from "@mantine/core";

import { Pages } from "../../utils/pages";
import classNames from "classnames";
import classes from "./Header.module.css";

export interface HeaderProps {
  currentSection: string;
  onSectionChange: (section: string) => void;
  opened: boolean;
  onBurgerClick: () => void;
}

export function Header({
  currentSection,
  onSectionChange,
  opened,
  onBurgerClick,
}: HeaderProps) {
  const items = Pages.map((page, index) => (
    <button
      key={index}
      className={classNames(
        currentSection === page.name ? classes.active : classes.inactive,
        classes.button
      )}
      onClick={() => onSectionChange(page.id)}
    >
      <Text fz="lg" c="white.0">
        {page.name}
      </Text>
    </button>
  ));

  return (
    <Group justify="space-between" py={{ base: "sm", md: "md" }}>
      <Button
        unstyled
        className={classes.button}
        onClick={() => onSectionChange("Home")}
      >
        <Image
          src={
            currentSection === "Home"
              ? "../assets/LogoWhite.svg"
              : "../assets/LogoOrange.svg"
          }
          h={36}
        ></Image>
      </Button>
      <Group gap="xl" visibleFrom="sm">
        {items}
      </Group>
      <Burger
        opened={opened}
        onClick={onBurgerClick}
        size="sm"
        hiddenFrom="sm"
      />
    </Group>
  );
}
