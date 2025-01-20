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
        backgroundColor: "#000",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
        height: "64px",
        padding: "0 16px",
        boxSizing: "border-box",
        display: "flex",
      }}
    >
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <Button
          unstyled
          className={classes.button}
          onClick={() => onSectionChange("Home")}
          style={{
            padding: 0,
            display: "flex",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Image
            src="../assets/LogoOrange.svg"
            alt="Gimage Logo"
            style={{
              display: "block",
              maxHeight: "100%",
              maxWidth: "100%",
              objectFit: "contain", // Ensure the logo scales correctly without being cut off
            }}
          />
        </Button>
      </Box>
      <Group gap="xl" visibleFrom="sm">
        {items}
      </Group>
    </Group>
  );
}
