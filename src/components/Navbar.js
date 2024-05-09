import React from "react";
import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  appBar: {
    background: "#333",
    boxShadow: "none",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    color: "#fff",
    fontWeight: "bold",
    textDecoration: "none",
  },
  navlinks: {
    display: "flex",
    alignItems: "center",
  },
  link: {
    textDecoration: "none",
    color: "#fff",
    marginLeft: theme.spacing(3),
    transition: "color 0.3s ease",
    "&:hover": {
      color: "#ff0",
    },
  },
}));

function Navbar() {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h4" component={Link} to="/" className={classes.logo}>
          Navbar
        </Typography>
        <div className={classes.navlinks}>
          <Link to="/" className={classes.link}>
            Home
          </Link>
          <Link to="/about" className={classes.link}>
            About
          </Link>
          <Link to="/contact" className={classes.link}>
            Contact
          </Link>
          <Link to="/faq" className={classes.link}>
            FAQ
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
