import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { Header, Container, Footer } from "@/layout/auth";
import { IChildren } from "@/types";

export default function AuthLayout({ children }: IChildren) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        bgcolor: "grey.100",
      }}
    >
      <CssBaseline />
      <Header />
      <Container>{children}</Container>
      <Footer />
    </Box>
  );
}
