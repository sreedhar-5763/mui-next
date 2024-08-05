import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import { IChildren } from "@/types";

export default function AuthContainer({ children }: IChildren) {
  return (
    <Box
      component="main"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexGrow: 1,
        m: 2,
      }}
    >
      <Container
        component={Paper}
        elevation={2}
        maxWidth="sm"
        sx={{
          bgcolor: "common.white",
          textAlign: "center",
        }}
      >
        {children}
      </Container>
    </Box>
  );
}
