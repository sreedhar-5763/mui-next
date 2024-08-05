import Typography from "@mui/material/Typography";

export default function AuthFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <Typography
      component="footer"
      variant="body2"
      textAlign="center"
      color="text.secondary"
      py={3}
    >
      &#169; {currentYear} All Rights Reserved.
    </Typography>
  );
}
