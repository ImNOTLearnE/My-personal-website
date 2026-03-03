// MATERIAL UI
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

// CSS
import "../styles/Banner.css";
import type { Margin } from "@mui/icons-material";

const Banner = () => {
  return (
    <>
      <React.Fragment>
        <Container
          maxWidth="lg"
          sx={{
            width: "60vw",
            height: { xs: "160vh", md: "50vh" },
            marginTop: "25vh ",
          }}
        >
          {/* CONTENT */}
          <Box
            className="banner"
            // sx={{
            //   bgcolor: "#40404034",
            //   border: "2px solid #404040a4",
            //   display: "flex",
            //   flexDirection: { xs: "column", md: "row" },
            //   height: "100%",
            //   overflow: "hidden",
            //   transition: "0.5s ",
            //   "&::before": {
            //     content: '""',
            //     position: "absolute",
            //     top: "32vh",
            //     left: "19.3vw",
            //     height: "497px",
            //     width: "1148px",
            //     borderTop: "3px solid #ffffff",
            //     borderBottom: "3px solid #ffffff",
            //     transition: "0.5s ease-in-out",
            //     transformOrigin: "center",
            //     transform: "ScaleX(1)",
            //     zIndex: -1,
            //   },
            //   "&:hover::before": {
            //     borderRight: "3px solid #ffffff",
            //     borderLeft: "3px solid #ffffff",
            //     transition: "2s ease-in-out",
            //     animationDelay: "12s",
            //     transformOrigin: "center",
            //     transform: "scaleX(1)",
            //   },
            // }}
          >
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

              <Typography fontSize={"1vw"}>
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
