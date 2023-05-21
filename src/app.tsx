import Router from "preact-router";
import "./app.css";
import Navbar from "./components/Common/Navbar";
import Post from "./Pages/Post";
import Home from "./Pages/Home";
import AboutSection from "./components/HOME/About";
import Blog from "./Pages/Blog";

export const App = () => (
  <>
    <Navbar />
    <Router>
      <Home path="/" />
      <Blog path="/blog" />
      <Post path="/post" />
      <AboutSection path="/about" />
      {/* <Profile path="/profile/:user?" /> */}
      {/* <Error type="404" default /> */}
    </Router>
  </>
);
