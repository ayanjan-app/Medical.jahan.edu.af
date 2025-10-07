import React from "react";
import "./App.css";
import "react-icons/fa";
import "./Components/contactemail";
import Header from "./Components/Header.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import RouteHeader from "./Components/RouteHeader";
import Footer from "./Components/Footer";
import "sweetalert2/dist/sweetalert2.css";
import "aos/dist/aos.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faCheckSquare, faCoffee);

function App() {
  return (
    <>
      <Header />
      <div>
        <RouteHeader />
      </div>
      <Footer />
    </>
  );
}

export default App;
