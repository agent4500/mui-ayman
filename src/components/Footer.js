import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  bottomNavContainer: {
    background: "linear-gradient(to right, #222, #444, #222)",
    height: "100px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    textAlign: "center",
  },
  bottomNav: {
    animation: "$gradientMove 10s linear infinite",
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
});

const Footer = () => {
  const classes = useStyles();


  return (
    <BottomNavigation className={classes.bottomNavContainer}>
      <Typography variant="body1" align="center" style={{ marginRight: "20px" }}>
        Contact Us: mohamedelsherif123@outlook.com
      </Typography>
      <Typography variant="body1" align="center" style={{ marginRight: "20px" }}>
        Phone: +1224711058
      </Typography>
      <Typography variant="body1" align="center">
        Address: Ez pz lemon squezy
      </Typography>
    </BottomNavigation>
  );
};

export default Footer;
