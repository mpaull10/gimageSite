"use client";

import { Button, Group, Text, Image, Box } from "@mantine/core";
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
        overflow: "visible", // Ensure overflow is visible
        height: "64px", // Ensure the header has enough height
        padding: "0 16px", // Add padding to ensure enough space
        boxSizing: "border-box", // Include padding in the element's total width and height
        display: "flex", // Use flexbox to align items
      }}
    >
      <Box style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Button
          unstyled
          className={classes.button}
          onClick={() => onSectionChange("Home")}
          style={{ padding: 0, display: "flex", alignItems: "center" }} // Ensure no extra padding and center the content
        >
          <Image
            src="../assets/LogoOrange.svg" // Ensure the orange logo is used
            h={36}
            alt="Gimage Logo" // Add alt attribute
            style={{ display: "block", maxHeight: "100%", maxWidth: "100%", overflow: "visible" }} // Ensure the image scales correctly within its container
          />
        </Button>
      </Box>
      <Group gap="xl" visibleFrom="sm">
        {items}
      </Group>
    </Group>
  );
}