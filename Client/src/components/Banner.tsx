// MATERIAL UI
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

// CSS
import "../styles/banner.scss";

const Banner = () => {
  return (
    <>
      <React.Fragment>
        <Container
          maxWidth="lg"
          sx={{
            width: "60vw",
            height: { xs: "auto", md: "auto" },
            marginTop: "25vh ",
          }}
        >
          {/* CONTENT */}
          <Box className="banner">
            {/* ABOUT ME PARAGRAPH */}
            <Box
              sx={{
                marginRight: { xs: "none", md: "10vw" },
                marginLeft: "3vw",
                marginTop: { xs: "5vh", md: "1vh" },
                width: { xs: "none", md: "25vw" },
                textAlign: "center",
              }}
            >
              <Typography
                sx={{
                  marginBottom: "5vh",
                  fontSize: { xs: "6vw", md: "3vw" },
                }}
                variant="h2"
              >
                Full Stack Dev
              </Typography>

              <Typography fontSize={"1rem"}>
                My name is Ahmad, and I’m a full‑stack developer passionate
                about crafting digital products that are both powerful and
                intuitive. I specialize in React on the front end and
                Node.js/Express.js on the back end, using tools like Material UI
                to create polished interfaces. I enjoy working across the entire
                development lifecycle—from planning and architecture to
                deployment and optimization. Every project is an opportunity to
                learn, innovate, and deliver meaningful results.
              </Typography>
            </Box>
            {/* ABOUT ME PARAGRAPH */}

            {/* SHOWS THE PORJECTS */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  marginTop: { xs: "4vh", md: "1vh" },
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "6vw", md: "3vw" },
                    marginBottom: { xs: "1vh", md: "5vh" },
                  }}
                  variant="h2"
                >
                  My Projects
                </Typography>
              </Box>
              <img
                style={{
                  height: "18vh",
                  background: "none",
                }}
                src="https://pixlr.com/images/generator/photo-generator.webp"
              />
            </Box>
            {/* SHOWS THE PORJECTS */}
          </Box>

          {/* CONTENT */}
        </Container>
      </React.Fragment>
    </>
  );
};

export default Banner;
