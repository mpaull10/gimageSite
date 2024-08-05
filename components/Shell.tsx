import {
  AppShell,
  Container,
  Stack,
  StackProps,
  useMantineTheme,
} from "@mantine/core";
import React from "react";
import { useHeadroom, useMediaQuery } from "@mantine/hooks";
import { useDisclosure } from "@mantine/hooks";
import { Header, HeaderProps } from "./Header/Header";
export const HEADERHEIGHT = 64;

interface ShellProps extends HeaderProps {
  children: React.ReactNode;
}

export const Shell = ({
  children,
  currentSection,
  onSectionChange,
}: ShellProps) => {
  const pinned = useHeadroom({ fixedAt: 128 });
  const [opened, { close, toggle }] = useDisclosure(false);
  const theme = useMantineTheme();
  const maxW = useMediaQuery(`(max-width: ${theme.breakpoints.lg})`);

  return (
    <AppShell
      header={{ height: { HEADERHEIGHT }, collapsed: !pinned, offset: false }}
      withBorder={false}
    >
      <AppShell.Header
        maw={{ base: "intitial", lg: theme.breakpoints.lg }}
        left={0}
        right={0}
        mx="auto"
        bg="transparent"
        px={{ base: 16, lg: 0 }}
      >
        <Header
          currentSection={currentSection}
          onSectionChange={onSectionChange}
        ></Header>
      </AppShell.Header>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
};
