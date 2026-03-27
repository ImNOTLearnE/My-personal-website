// MATERIAL-UI
import {
  Box,
  TextField,
  Grid,
  TextareaAutosize,
  Typography,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
const CustomTextField = styled(TextField)(({  }) => ({
  width: "610px",
  marginTop: "10px",

  // 🎨 لون الـ label العادي
  "& .MuiInputLabel-root": {
    color: "#ccc",
  },

  // 🎨 لون الـ label عند الـ focus
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#ffffff",
  },

  // 🎨 لون النص داخل الحقل
  "& .MuiInputBase-input": {
    color: "#ffffff",
  },

  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "none", // اللون العادي
    },

    "&:hover fieldset": {
      borderColor: "#ff408000", // عند الـ hover
    },

    "&.Mui-focused fieldset": {
      borderRadius: "25px",
      borderColor: "rgba(255, 255, 255, 0.4)", // اللون عند الـ focus
    },
  },
}));

// CSS
import "../styles/communication.scss";

const Communication = () => {
  return (
    <>
      <Box className="form">
        <h2>Communication</h2>

        <Box className="glass-box">
          <Box className="content">
            <Grid container spacing={4}>
              <Grid size={5}>
                <Typography>First Name</Typography>
                <CustomTextField
                  className="input-text"
                  sx={{}}
                  id="outlined-basic"
                  label="Enter your First Name"
                  variant="outlined"
                />
              </Grid>
              <Grid size={8}>
                <Typography>Last Name</Typography>

                <CustomTextField
                  className="input-text"
                  id="outlined-basic"
                  label="Enter your Last Name"
                  variant="outlined"
                />
              </Grid>
              <Grid size={8}>
                <Typography>Email Address</Typography>
                <CustomTextField
                  className="input-text"
                  id="outlined-basic"
                  label="Enter your email address"
                  variant="outlined"
                />
              </Grid>
              <Grid size={8}>
                <Typography>Subject</Typography>
                <CustomTextField
                  className="input-text"
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
                    // width: "610px",
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
    </>
  );
};

export default Communication;
