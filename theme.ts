import { createTheme } from "@mantine/core";

export const theme = createTheme({
  /* Put your mantine theme override here */

  fontFamily: "Poppins, sans-serif",
  headings: {
    fontFamily: "Poppins, sans-serif",
    fontWeight: "800",
  },

  breakpoints: {
    xxs: "27em",
    xs: "36em",
    sm: "48em",
    md: "62em",
    lg: "75em",
    xl: "88em",
  },
  colors: {
    black: [
      "#42B8EB",
      "#42B8EB",
      "#42B8EB",
      "#42B8EB",
      "#42B8EB",
      "#42B8EB",
      "#35373D", //border
      "#35373D", //black-3
      "#1C1C20", //black - 2
      "#121214", //black - 1
    ],
    white: [
      "#ffffff",
      "#EDEDFA", //white-1
      "#CECED9", //white-2
      "#9D9DA6", //white-3
      "#42B8EB",
      "#42B8EB",
      "#42B8EB",
      "#42B8EB",
      "#42B8EB",
      "#42B8EB",
    ],
    orange: [
      "#FC973A",
      "#FC9344",
      "#FC9344",
      "#FC9344",
      "#FC9344",
      "#F87939",
      "#F87939",
      "#F87939",
      "#F87939",
      "#F86C25",
    ],
  },
});
