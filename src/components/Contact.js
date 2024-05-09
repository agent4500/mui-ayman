import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import project7 from "../images/IMG_20220727_082549_167.jpg";

const useStyles = makeStyles((theme) => ({
  contactContainer: {
    background: "#f7f7f7",
    padding: "2rem",
    borderRadius: "10px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    maxWidth: "600px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
  avatar: {
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    marginBottom: "1rem",
    border: "5px solid #fff",
    boxShadow: "0 0 10px rgba(0,0,0,0.2)",
  },
  heading: {
    color: "#333",
    marginBottom: "1rem",
    letterSpacing: "1px",
  },
  infoContainer: {
    marginBottom: "2rem",
  },
  contactInfo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "1rem",
  },
  icon: {
    marginRight: "0.5rem",
    fontSize: "1.2rem",
    verticalAlign: "middle",
  },
  divider: {
    margin: "2rem 0",
    backgroundColor: "#999",
  },
  socialButtons: {
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
    marginTop: "1rem",
  },
  button: {
    transition: "background-color 0.3s, color 0.3s",
    "&:hover": {
      backgroundColor: "#3f51b5",
      color: "#fff",
    },
  },
}));

const Contact = () => {
  const classes = useStyles();

  return (
    <Box component="div" className={classes.contactContainer}>
      <img src={project7} alt="Profile" className={classes.avatar} />
      <Typography variant="h4" className={classes.heading}>
        Mohamed El Sherif
      </Typography>
      <Box className={classes.infoContainer}>
        <Box className={classes.contactInfo}>
          <EmailIcon className={classes.icon} />
          <Typography variant="body1" component="p">
            mohamedelsherif123@outlook.com
          </Typography>
        </Box>
        <Box className={classes.contactInfo}>
          <PhoneIcon className={classes.icon} />
          <Typography variant="body1" component="p">
            +201224711058-01141899055
          </Typography>
        </Box>
      </Box>
      <Divider className={classes.divider} />
      <Typography variant="body1" component="p">
        Connect with me:
      </Typography>
      <Box className={classes.socialButtons}>
        <Button
          startIcon={<LinkedInIcon />}
          variant="outlined"
          color="primary"
          href="www.linkedin.com/in/mohamed-aymanuiux"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.button}
        >
          LinkedIn
        </Button>
        <Button
          startIcon={<FacebookIcon />}
          variant="outlined"
          color="primary"
          href="https://web.facebook.com/mohamedayman285/"
          target="_blank"
          rel="noopener noreferrer"
          className={classes.button}
        >
          Facebook
        </Button>
      </Box>
    </Box>
  );
};

export default Contact;
