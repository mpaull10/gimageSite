"use client";

import { Button, Group, Text, Image } from "@mantine/core";

import { Pages } from "../../utils/pages";
import classNames from "classnames";
import classes from "./Header.module.css";

export interface HeaderProps {
  currentSection: string;
  onSectionChange: (section: string) => void;
}

export function Header({ currentSection, onSectionChange }: HeaderProps) {
  const items = Pages.map((page, index) => (
    <button
      key={index}
      className={classNames(
        currentSection === page.name ? classes.active : classes.inactive,
        classes.button
      )}
      onClick={() => onSectionChange(page.name)}
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
              ? "..assets/LogoWhite.svg"
              : "..assets/LogoOrange.svg"
          }
          h={36}
        ></Image>
      </Button>
      <Group gap="xl">{items}</Group>
    </Group>
  );
}
