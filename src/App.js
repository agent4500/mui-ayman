import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Navbar from "./components/Navbar";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Education from './components/Education';
import Cources from './components/Cources';
function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Navbar />
      <Contact />
      <Portfolio />
      <Resume />
      <Education />
      <Cources />
      <Footer />
    </React.Fragment>
  );
}

export default App;
