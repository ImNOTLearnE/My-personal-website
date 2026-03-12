// MATERIAL UI
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
// CSS
import "../styles/InfiniteCarousel.scss";
//  CLOUDINARY IMPORTS
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import { fill } from "@cloudinary/url-gen/actions/resize";
const cld = new Cloudinary({
  cloud: {
    cloudName: "dji96h9oetest",
  },
});

const React = cld.image("React Logo.png");
React.resize(fill().width(100).height(100));
const HTML = cld.image("HTML.png");
HTML.resize(fill().width(100).height(100));
const CSS = cld.image("CSS Logo.png");
CSS.resize(fill().width(100).height(100));
const JavaScript = cld.image("JavaScript Logo.png");
JavaScript.resize(fill().width(100).height(100));
const TypeScript = cld.image("typescript_pedagp.png");
TypeScript.resize(fill().width(100).height(100));
const NodeJS = cld.image("NodeJS Logo-2.png");
NodeJS.resize(fill().width(100).height(100));
const Express = cld.image("express-1_bq65rg.png");
Express.resize(fill().width(100).height(100));
const MongoDB = cld.image("MongoDB Logo.png");
MongoDB.resize(fill().width(100).height(100));
const PostgreSQL = cld.image("PostgreSQL Logo.png");
PostgreSQL.resize(fill().width(100).height(100));
const Git = cld.image("Git Logo.png");
Git.resize(fill().width(100).height(100));
const GitHub = cld.image("GitHub Logo.png");
GitHub.resize(fill().width(100).height(100));

const Skills = () => {
  return (
    <>
      <Box className="carousel">
        <Box className="container">
          <Typography variant="h4" gutterBottom>
            My Skills
          </Typography>
          <Box className="group">
            <Box className="card">
              <AdvancedImage className="logo" cldImg={HTML} />
            </Box>
            <Box className="card">
              <AdvancedImage className="logo" cldImg={CSS} />
            </Box>
            <Box className="card">
              <AdvancedImage className="logo" cldImg={JavaScript} />
            </Box>
            <Box className="card">
              <AdvancedImage className="logo" cldImg={TypeScript} />
            </Box>
            <Box className="card">
              <AdvancedImage className="logo" cldImg={React} />
            </Box>
            <Box className="card">
              <AdvancedImage className="logo" cldImg={NodeJS} />
            </Box>
            <Box className="card">
              <AdvancedImage className="logo" cldImg={Express} />
            </Box>
            <Box className="card">
              <AdvancedImage className="logo" cldImg={MongoDB} />
            </Box>
            <Box className="card">
              <AdvancedImage className="logo" cldImg={PostgreSQL} />
            </Box>
            <Box className="card">
              <AdvancedImage className="logo" cldImg={Git} />
            </Box>
            <Box className="card">
              <AdvancedImage className="logo" cldImg={GitHub} />
            </Box>
          </Box>
          <Box className="group">
            <Box className="card">
              <AdvancedImage className="logo" cldImg={HTML} />
            </Box>
            <Box className="card">
              <AdvancedImage className="logo" cldImg={CSS} />
            </Box>
            <Box className="card">
              <AdvancedImage className="logo" cldImg={JavaScript} />
            </Box>
            <Box className="card">
              <AdvancedImage className="logo" cldImg={TypeScript} />
            </Box>
            <Box className="card">
              <AdvancedImage className="logo" cldImg={React} />
            </Box>
            <Box className="card">
              <AdvancedImage className="logo" cldImg={NodeJS} />
            </Box>
            <Box className="card">
              <AdvancedImage className="logo" cldImg={Express} />
            </Box>
            <Box className="card">
              <AdvancedImage className="logo" cldImg={MongoDB} />
            </Box>
            <Box className="card">
              <AdvancedImage className="logo" cldImg={PostgreSQL} />
            </Box>
            <Box className="card">
              <AdvancedImage className="logo" cldImg={Git} />
            </Box>
            <Box className="card">
              <AdvancedImage className="logo" cldImg={GitHub} />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Skills;
