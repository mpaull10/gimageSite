"use client";

import { Button, Group, Text, Image } from "@mantine/core";
import { Pages } from "../../utils/pages";
import classNames from "classnames";
import classes from "./Header.module.css";

export interface HeaderProps {
  currentSection: string;
  onSectionChange: (section: string) => void;
}

export function Header({
  currentSection,
  onSectionChange,
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
    <Group
      justify="space-between"
      py={{ base: "sm", md: "md" }}
      style={{
        backgroundColor: "#000", // Add solid background color
        position: "fixed", // Fix the header at the top
        top: 0,
        left: 0,
        width: "100%", // Ensure it spans the full width
        zIndex: 1000, // Ensure it stays on top of other content
        overflow: "hidden", // Hide scroll bars
        height: "64px", // Ensure the header has enough height
      }}
    >
      <Button
        unstyled
        className={classes.button}
        onClick={() => onSectionChange("Home")}
        style={{ padding: "0 8px" }} // Add padding to the button
      >
        <Image
          src="../assets/LogoOrange.svg" // Ensure the orange logo is used
          h={36}
          alt="Gimage Logo" // Add alt attribute
          style={{ display: "block", margin: "0 auto", maxHeight: "100%" }} // Center the image within the button and ensure it doesn't exceed the container height
        />
      </Button>
      <Group gap="xl" visibleFrom="sm">
        {items}
      </Group>
    </Group>
  );
}
