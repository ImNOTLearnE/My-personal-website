// MATERIAL-UI
import {
  Box,
  TextField,
  Grid,
  TextareaAutosize,
  Typography,
  Button,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const theme = createTheme({
  //   components: {
  //     MuiOutlinedInput: {
  //       styleOverrides: {
  //         notchedOutline: {
  //           borderColor: "#ff9800", // Global default border color (orange)
  //         },
  //       },
  //     },
  //   },
});

// CSS
import "../styles/communication.scss";

const Communication = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box className="form">
          <h1>Communication</h1>

          <Box className="glass-box">
            <Box className="content">
              <Grid container spacing={4}>
                <Grid size={5}>
                  <Typography>First Name</Typography>
                  <TextField
                    className="input-text"
                    sx={{ width: "12vw" }}
                    id="outlined-basic"
                    label="Enter your First Name"
                    variant="outlined"
                  />
                </Grid>
                <Grid size={5}>
                  <Typography>Last Name</Typography>

                  <TextField
                    className="input-text"
                    sx={{ width: "12vw" }}
                    id="outlined-basic"
                    label="Enter your Last Name"
                    variant="outlined"
                  />
                </Grid>
                <Grid size={8}>
                  <Typography>Email Address</Typography>
                  <TextField
                    className="input-text"
                    sx={{ width: "29.5vw" }}
                    id="outlined-basic"
                    label="Enter your email address"
                    variant="outlined"
                  />
                </Grid>
                <Grid size={8}>
                  <Typography>Subject</Typography>
                  <TextField
                    className="input-text"
                    sx={{
                      width: "29.5vw",
                    }}
                    id="outlined-basic"
                    label="What's this about?"
                    variant="outlined"
                  />
                </Grid>
                <Grid size={8}>
                  <Typography>Message</Typography>

                  <TextareaAutosize
                    className="input-text"
                    style={{
                      height: "5vh",
                      width: "29.5vw",
                    }}
                    aria-label="minimum height"
                    minRows={4}
                    placeholder="Tell us more about your project..."
                  />
                </Grid>
                <Grid size={8}>
                  <Button className="button-text" sx={{}} variant="contained">
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default Communication;
