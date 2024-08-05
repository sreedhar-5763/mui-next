import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { RegisterForm } from "@/containers/register";

export default function Register() {
  return (
    <Box sx={{ my: 3 }}>
      <Typography
        variant="h6"
        color="text.primary"
        mb={3}
        textTransform="uppercase"
      >
        Sign up
      </Typography>
      <RegisterForm />
      <Typography variant="body2" color="text.secondary">
        Already have an accout? <Link href="login">Login</Link>
      </Typography>
    </Box>
  );
}
