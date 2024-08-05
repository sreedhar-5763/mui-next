import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function AuthHeader() {
  return (
    <AppBar position="static">
      <Toolbar sx={{ width: 1, maxWidth: "xl", alignSelf: "center" }}>
        <Typography variant="h6">Next-MUI</Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Button href="about" color="inherit">
          About
        </Button>
      </Toolbar>
    </AppBar>
  );
}
