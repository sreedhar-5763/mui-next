import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function Home() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        bgcolor: "grey.200",
        border: 1,
        borderColor: "success.main",
        borderRadius: 4,
      }}
    >
      <Typography variant="h1">Welcome to Next - MUI</Typography>
    </Container>
  );
}
