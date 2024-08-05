import { Button, ButtonProps } from "@mantine/core";

// interface GimageButtonProps extends ButtonProps {
//   filled?: boolean;
// }

export function GimageButton({
  //   filled,
  children,

  ...props
}: ButtonProps) {
  return (
    <Button
      // bg="white.0"
      tt="uppercase"
      fw="700"
      fz={{ base: "lg", lg: 24 }}
      px="sm"
      h="auto"
      py={4}
      lh={1.5}
      radius={4}
      style={{ borderWidth: 2 }}
      {...props}
    >
      {children}
    </Button>
  );
}
