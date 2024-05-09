import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { Grid, Paper } from "@material-ui/core";
import { fade } from "@material-ui/core/styles/colorManipulator";

const useStyles = makeStyles((theme) => ({
  coursesContainer: {
    background: "#f0f0f0", // Changed background color
    color: "#333", // Changed text color
    padding: "4rem 2rem",
    textAlign: "center",
  },
  title: {
    marginBottom: "2rem",
    textTransform: "uppercase",
    letterSpacing: "2px",
    fontSize: "2.5rem",
    color: "#ff9900",
  },
  courseItem: {
    marginBottom: "2rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
    justifyContent: "center",
    transition: "transform 0.3s ease",
    position: "relative",
    overflow: "hidden",
    "&:hover": {
      transform: "scale(1.05)",
      "&:before": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundImage:
          "linear-gradient(to right, #ff9900, #ffcc00, #ffff00, #ffcc00, #ff9900)",
        zIndex: -1,
        animation: "$gradientMove 4s linear infinite",
      },
    },
  },
  courseTitle: {
    fontSize: "1.8rem",
    marginBottom: "1rem",
    color: "#333", // Changed title color
  },
  courseDuration: {
    fontSize: "1.2rem",
    marginBottom: "1rem",
    color: "#666", // Changed duration color
  },
  "@keyframes gradientMove": {
    "0%": {
      backgroundPosition: "0% 50%",
    },
    "50%": {
      backgroundPosition: "100% 50%",
    },
    "100%": {
      backgroundPosition: "0% 50%",
    },
  },
}));

const Courses = () => {
  const classes = useStyles();

  return (
    <Box component="div" className={classes.coursesContainer}>
      <Typography variant="h2" className={classes.title}>
        My Courses
      </Typography>
      <Box component="div">
        <Grid container spacing={4}>
          {[
      
            { title: "Photoshop course", duration: "2020" },
            { title: "UIUX By Udemy", duration: "Active now" },
            { title: "Entrepreneurship By Enactus", duration: "2022" },
          ].map((course, index) => (
            <Grid key={index} item xs={12} sm={6} md={4}>
              <Paper className={classes.courseItem}>
                <Typography variant="h4" className={classes.courseTitle}>
                  {course.title}
                </Typography>
                <Typography variant="h5" className={classes.courseDuration}>
                  {course.duration}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Courses;
