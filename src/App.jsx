import Spline from "@splinetool/react-spline";
import ResponsiveAppBar from "./Components/AppBar";
import { Box, Container, Typography } from "@mui/material";
import "./styles.css";
import { ScrollParallax } from "react-just-parallax";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import SendIcon from '@mui/icons-material/Send';


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
        <Box id="canvas-box" sx={{height:"1630px",width:"1024px",zIndex: -1, }}>
          <Spline scene="https://prod.spline.design/Ac190z0XbborUono/scene.splinecode" />{" "}
        </Box>
        <ScrollParallax isHorizontal:true>
          <Typography
            component="h2"
            marginLeft={"-360px"}
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
        sx={{
          display: "flex",
          flexDirection: "column",
          position: "absolute",
          zIndex: "3",
          top: "0",
          // overflowX:"auto",
          // whiteSpace:"nowrap"
        }}
      >
        <ScrollParallax isAbsolutelyPositioned="true">
          <Card
            id="card1"
            sx={{ width: 500, height: 270, zIndex: "3" }}
          >
            <CardContent>
              <Typography
                 variant="h5"
              >
               Jordan Air 4 Retro:
              </Typography>
              <Typography  sx={{ mt:1, mb: 1.5 }} color="text.secondary" >
              Classic and iconic design inspired by the original Air Jordan 1.
                
              </Typography>
              <Typography sx={{ mt:1, mb: 1.5 }} color="text.secondary">
              Sleek and stylish sneakers.
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Unique lace lockdown system.
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Visible Air-Sole units.
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Signature Nike logo.
              </Typography>
             
            </CardContent>
           
          </Card>
        </ScrollParallax>

        <ScrollParallax isAbsolutelyPositioned="true">
          <Card
            id="card2"
            sx={{ width: 500, height: 270, zIndex: "3" }}
          >
            <CardContent>
              <Typography variant="h5"
              >
                Jordan Retro 1 High OG:
              </Typography>
              <Typography sx={{ mt:1,mb: 1.5 }} color="text.secondary" >
              Classic and iconic design inspired by the original Air Jordan 1.
                
              </Typography>
              <Typography sx={{ mt:1,mb: 1.5 }} color="text.secondary">
              Premium leather
              </Typography>
              <Typography sx={{ mt:1,mb: 1.5 }} color="text.secondary">
              High-top silhouette with padded collar
              </Typography>
              <Typography sx={{ mt:1,mb: 1.5 }} color="text.secondary">
              Nike Air cushioning
              </Typography>
              <Typography sx={{ mt:1,mb: 1.5 }} color="text.secondary">
              Timeless style and heritage
              </Typography>
              
            </CardContent>
            
          </Card>
        </ScrollParallax>
        </Container>

        <Container sx={{
  width:"100%",
  display:"flex",
  flexDirection:"row",
  alignItems:"center",
  marginBottom:"100px",
}}>   
<Container sx={{
  width:"600px",
  marginTop:"100px",
  display:"flex",
  flexDirection:"column",
  alignItems:"center",
  marginBottom:"100px",
}}>
  <Typography
        component="h2"
        variant="overline"
        color={"dark-grey"}
        sx={{
          fontSize:50,
          fontWeight:600,
        }}>Contact Us</Typography>
        <Box id="contact"
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, },
          }}
          noValidate
          autoComplete="off"
        >
          <div id="form">
            <TextField
              required
              id="outlined-required"
              label="Required"
              defaultValue="First Name"
            />
            <TextField
              required
              id="outlined-required"
              label="Required"
              defaultValue="Last Name"
            />
            <TextField
              required
              id="outlined-required"
              label="Required"
              defaultValue="Email"
            />
             <TextField
              id="outlined-number"
              label="Phone Number"
              InputLabelProps={{
                shrink: true,
              }}
            />
           
           <TextField
          id="outlined-multiline fullWidth"
          label="Message"
          multiline
          rows={4}
          sx={{width:"450px"}}
        />
          </div>
          <Button id="button" variant="contained" endIcon={<SendIcon />} sx={{
            width:"50%",
            borderRadius:"50px",
            margin:" 20px 25%",
          }}>Submit</Button>

        </Box>
        </Container>
        <Box sx={{mt:1,
          height:"600px",
          width:"fit-content"
        }}>
        <Spline scene="https://prod.spline.design/RZlhHvPwu7t4eBP4/scene.splinecode" />
        </Box>
      
      </Container>
    </>
  );
}
