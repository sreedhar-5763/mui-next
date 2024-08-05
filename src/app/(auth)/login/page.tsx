import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { LoginForm } from "@/containers/login";

export default function Login() {
  return (
    <Box sx={{ my: 3 }}>
      <Typography
        variant="h6"
        color="text.primary"
        mb={3}
        textTransform="uppercase"
      >
        Login
      </Typography>
      <LoginForm />
      <Typography variant="body2" color="text.secondary">
        Don&apos;t have an accout? <Link href="register">Sign up</Link>
      </Typography>
    </Box>
  );
}
