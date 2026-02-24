import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <Box
      sx={{
        height: "60vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to right, #1976d2, #42a5f5)",
        color: "white",
        textAlign: "center",
      }}
    >
      <Typography variant="h3" gutterBottom>
        Welcome to Startup Store 🚀
      </Typography>

      <Typography variant="h6" sx={{ mb: 3 }}>
        Built using React Router, Context API, Reducer & Memo
      </Typography>

      <Button variant="contained" color="secondary" component={Link} to="/projects">
        Shop Now
      </Button>
    </Box>
  );
};

export default HeroSection;
