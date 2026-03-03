// MATERIAL UI
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

const Skills = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 128,
            height: 128,
          },

          justifyContent: "center",
        }}
      >
        <Paper elevation={0} />
        <Paper />
        <Paper />
        <Paper />
        <Paper />
        <Paper />
        <Paper />
        <Paper elevation={3} />
      </Box>
    </>
  );
};

export default Skills;
