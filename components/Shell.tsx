import {
  AppShell,
  AppShellProps,
  Stack,
  StackProps,
  useMantineTheme,
} from "@mantine/core";
import React from "react";
import { useHeadroom, useMediaQuery } from "@mantine/hooks";
import { useDisclosure } from "@mantine/hooks";
import { Header, HeaderProps } from "./Header/Header";
import { MobileMenu } from "./MobileMenu/MobileMenu";
export const HEADERHEIGHT = 64;

interface ShellProp extends AppShellProps {
  children: React.ReactNode;
  currentSection: string;
  onSectionChange: (section: string) => void;
}

export const Shell = ({
  children,
  currentSection,
  onSectionChange,
}: ShellProp) => {
  const pinned = useHeadroom({ fixedAt: 128 });
  const [opened, { close, toggle }] = useDisclosure(false);
  const theme = useMantineTheme();
  const maxW = useMediaQuery(`(max-width: ${theme.breakpoints.lg})`);

  return (
    <AppShell
      header={{ height: { HEADERHEIGHT }, collapsed: !pinned, offset: false }}
      withBorder={false}
      bg="dark.9"
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
          opened={opened}
          onBurgerClick={toggle}
        ></Header>
        <MobileMenu
          opened={opened}
          onClose={close}
          currentSection={currentSection}
          onSectionChange={onSectionChange}
        ></MobileMenu>
      </AppShell.Header>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
};
