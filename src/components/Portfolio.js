import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Fade from "@material-ui/core/Fade";

// Images
import enactusLogo from "../images/enactus_logo.png";
import gdscLogo from "../images/gdsc_logo.png";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#1a1a1a",
    padding: "4rem 2rem",
  },
  volunteeringText: {
    color: "#fff",
    marginBottom: "2rem",
    textAlign: "center",
    textTransform: "uppercase",
    letterSpacing: "2px",
    fontSize: "2.5rem",
    textDecoration: "underline",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "2rem auto",
    borderRadius: "20px",
    overflow: "hidden",
    position: "relative",
    transition: "transform 0.3s ease-in-out",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  cardMedia: {
    height: 200,
  },
  overlayContent: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    textAlign: "center",
    color: "#fff",
    padding: "1rem",
    boxSizing: "border-box",
  },
  logoContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "1rem",
  },
  logo: {
    width: "50px",
    height: "auto",
    marginRight: "1rem",
  },
}));

const Portfolio = () => {
  const classes = useStyles();

  return (
    <Box component="div" className={classes.mainContainer}>
      <Typography variant="h2" className={classes.volunteeringText}>
        Volunteering Work
      </Typography>
      <Grid container justify="center" spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Fade in={true} timeout={500}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardContent>
                  <div className={classes.logoContainer}>
                    <img src={enactusLogo} alt="Enactus Logo" className={classes.logo} />
                    <Typography variant="h5" gutterBottom>
                      Enactus - Media Member
                    </Typography>
                  </div>
                  <Typography variant="body2" color="textSecondary">
                    Volunteered as a media member at Enactus, contributing to content creation and media management.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Fade>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Fade in={true} timeout={800}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardContent>
                  <div className={classes.logoContainer}>
                    <img src={enactusLogo} alt="Enactus Logo" className={classes.logo} />
                    <Typography variant="h5" gutterBottom>
                      Enactus - Media Director
                    </Typography>
                  </div>
                  <Typography variant="body2" color="textSecondary">
                    Promoted to the position of Media Director at Enactus, leading media initiatives and managing a team of volunteers.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Fade>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Fade in={true} timeout={1100}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardContent>
                  <div className={classes.logoContainer}>
                    <img src={gdscLogo} alt="GDSC Logo" className={classes.logo} />
                    <Typography variant="h5" gutterBottom>
                      GDSC - Multimedia Member
                    </Typography>
                  </div>
                  <Typography variant="body2" color="textSecondary">
                    Contributed as a multimedia member at GDSC, creating visual content and promoting tech events.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Fade>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Portfolio;
