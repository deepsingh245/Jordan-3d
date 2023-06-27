import Spline from "@splinetool/react-spline";
import ResponsiveAppBar from "./Components/AppBar";
import { Container, Typography } from "@mui/material";
import "./styles.css";

export default function App() {
  return (
    <>
      <ResponsiveAppBar />
      <Container
        className="container"
        sx={{
          // height: "100vh",
          display: "flex",
          // alignItems: "center",
          justifyContent: "center",
          margin: "auto",
          
        }}
      >
        <Typography
          component="h2"
          variant="overline"
          sx={{
            fontFamily: "monospace",
            fontWeight: 900,
            fontSize: 150,
            zIndex: 1,
           
          }}
        >
          JOR
        </Typography>
        <Spline scene="https://prod.spline.design/Ac190z0XbborUono/scene.splinecode" />
        <Typography
          component="h2"
          sx={{
            fontFamily: "monospace",
            fontWeight: 900,
            fontSize: 150,
            zIndex: 1,
            
          }}
        >
          DAN
        </Typography>
      </Container>
    </>
  );
}
