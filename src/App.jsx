import Spline from "@splinetool/react-spline";
import ResponsiveAppBar from "./Components/AppBar";
import { Box, Container, Typography } from "@mui/material";
import "./styles.css";
import { ScrollParallax } from "react-just-parallax";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Aos from "aos";

Aos.init({
  duration: 1200,
})

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);
export default function App() {
  return (
    <>
      <ResponsiveAppBar />
      <Container
        className="container"
        sx={{
          display: "flex",
          justifyContent: "space-around",
          margin: "auto",
        }}
      >
        <ScrollParallax isHorizontal:true>
          <Typography
            component="h2"
            variant="overline"
            marginLeft={"90px"}
            marginTop={"-90px"}
            sx={{
              fontFamily: "monospace",
              fontWeight: 900,
              fontSize: 150,
              zIndex: 2,
              position: "absolute",
            }}
          >
            JOR
          </Typography>
        </ScrollParallax>
        <Box sx={{ width: 1024, zIndex: -1 }}>
          <Spline scene="https://prod.spline.design/Ac190z0XbborUono/scene.splinecode" />{" "}
        </Box>
        <ScrollParallax isHorizontal:true>
          <Typography
            component="h2"
            marginLeft={"-370px"}
            sx={{
              fontFamily: "monospace",
              fontWeight: 900,
              fontSize: 150,
              zIndex: 2,
              position: "absolute",
            }}
          >
            DAN
          </Typography>
        </ScrollParallax>
      </Container>
      <Container
        sx={
          {
            display:"flex",
            flexDirection:"column",
            position:"absolute",
            zIndex:"3",
            top:"0",
            // overflowX:"auto",
            // whiteSpace:"nowrap"
          }
        }
      >
        <ScrollParallax isAbsolutelyPositioned="true">
          <Card data-aos="slide-right" data-aos-delay="100" id="card1" sx={{ width: 500, height: 350, zIndex: "3" }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Word of the Day
              </Typography>
              <Typography variant="h5" component="div">
                be{bull}nev{bull}o{bull}lent
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                adjective
              </Typography>
              <Typography variant="body2">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </ScrollParallax>

        <ScrollParallax isAbsolutelyPositioned="true">
          <Card data-aos="slide-left" data-aos-delay="100" id="card2" sx={{ width: 500, height: 350, zIndex: "3" }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Word of the Day
              </Typography>
              <Typography variant="h5" component="div">
                be{bull}nev{bull}o{bull}lent
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                adjective
              </Typography>
              <Typography variant="body2">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </ScrollParallax>
      </Container>
    </>
  );
}
