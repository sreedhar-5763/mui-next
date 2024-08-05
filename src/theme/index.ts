"use client";
import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import type { LinkProps } from "@mui/material";
import LinkBehavior from "@/components/LinkBehaviour";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: LinkBehavior,
      },
    },
    MuiLink: {
      defaultProps: {
        component: LinkBehavior,
        underline: "hover",
      } as LinkProps,
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          margin: "4px 4px 0",
        },
      },
    },
  },
});

export default theme;
