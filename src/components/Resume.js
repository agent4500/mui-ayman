import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

// Images
import project1 from "../images/project1.jpg";
import project2 from "../images/project2.jpg";
import project3 from "../images/project3.jpg";

const projects = [
  {
    name: "E-commerce Website",
    description: "A modern e-commerce platform with sleek design and smooth user experience.",
    image: project1,
  },
  {
    name: "Travel App",
    description: "An intuitive travel app offering comprehensive trip planning and booking features.",
    image: project2,
  },
  {
    name: "Portfolio Website",
    description: "A stylish portfolio website showcasing your skills and projects in an elegant manner.",
    image: project3,
  },
];

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#1E1E1E",
    padding: "3rem 0",
    color: "#fff",
  },
  heading: {
    color: "#7FFFD4",
    padding: "1rem 0",
    textTransform: "uppercase",
    fontSize: "2.5rem",
    textAlign: "center",
  },
  card: {
    maxWidth: 345,
    margin: "2rem auto",
    borderRadius: "20px",
    overflow: "hidden",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
    transition: "transform 0.3s ease-in-out",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  cardMedia: {
    height: 200,
  },
  cardContent: {
    textAlign: "center",
    padding: "1rem",
  },
}));

const MyProjects = () => {
  const classes = useStyles();

  return (
    <Box component="header" className={classes.mainContainer}>
      <Typography variant="h4" align="center" className={classes.heading}>
        My Projects
      </Typography>
      <Grid container justify="center" spacing={3}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.cardMedia}
                  image={project.image}
                  title={project.name}
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MyProjects;
