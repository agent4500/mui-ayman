import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grow from "@material-ui/core/Grow";

const useStyles = makeStyles((theme) => ({
  educationContainer: {
    background: "#1a1a1a",
    color: "#fff",
    padding: "4rem 2rem",
    textAlign: "center",
  },
  title: {
    marginBottom: "2rem",
    textTransform: "uppercase",
    letterSpacing: "2px",
    fontSize: "2.5rem",
    color: "#ff9900",
    textDecoration: "underline",
  },
  educationCardsContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "2rem",
    marginTop: "2rem",
  },
  educationCard: {
    background: "#333",
    borderRadius: "10px",
    padding: "1.5rem",
    transition: "transform 0.3s ease-in-out",
    "&:hover": {
      transform: "scale(1.03)",
      boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.7)",
    },
  },
  institution: {
    fontSize: "1.8rem",
    marginBottom: "1rem",
    color: "#ffcc00",
    textTransform: "uppercase",
  },
  duration: {
    fontSize: "1.5rem",
    marginBottom: "1rem",
    color: "#ccc",
  },
  description: {
    fontSize: "1.2rem",
    lineHeight: "1.6",
    color: "#ddd",
  },
  grow: {
    transition: "transform 0.3s ease-in-out",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
}));

const Education = () => {
  const classes = useStyles();

  return (
    <Box component="div" className={classes.educationContainer}>
      <Typography variant="h2" className={classes.title}>
        My Education
      </Typography>
      <Box component="div" className={classes.educationCardsContainer}>
        <Grow in={true} timeout={500}>
          <Card elevation={3} className={`${classes.educationCard} ${classes.grow}`}>
            <CardContent>
              <Typography variant="h4" className={classes.institution}>
                ITI - Web & UI Development
              </Typography>
              <Typography variant="h5" className={classes.duration}>
                9 Months Program
              </Typography>
              <Typography variant="body1" className={classes.description}>
                During my time at ITI, I immersed myself in a comprehensive 9-month program focused on Web & UI Development. This experience allowed me to dive deep into HTML, CSS, JavaScript, React, and other essential technologies. Through practical projects and hands-on learning, I gained valuable skills and knowledge necessary for a successful career in web development.
              </Typography>
            </CardContent>
          </Card>
        </Grow>
        <Grow in={true} timeout={500}>
          <Card elevation={3} className={`${classes.educationCard} ${classes.grow}`}>
            <CardContent>
              <Typography variant="h4" className={classes.institution}>
                Suez Canal University - Faculty of Engineering
              </Typography>
              <Typography variant="h5" className={classes.duration}>
                Electrical Engineering - Computer and Control Department
              </Typography>
              <Typography variant="body1" className={classes.description}>
                My academic journey continued at Suez Canal University's Faculty of Engineering, where I specialized in Electrical Engineering with a focus on the Computer and Control Department. This program provided me with an in-depth understanding of electrical systems, computer programming, and control theory. Through theoretical courses and hands-on projects, I developed skills in circuit design, digital signal processing, and automation, preparing me for a career in cutting-edge technology fields.
              </Typography>
            </CardContent>
          </Card>
        </Grow>
      </Box>
    </Box>
  );
};

export default Education;
