import Router from "preact-router";
import "./app.css";
import Navbar from "./components/Common/Navbar";
import Post from "./Pages/Post";
import Home from "./Pages/Home";
import AboutSection from "./components/HOME/About";
import Blog from "./Pages/Blog";
import NotFound from "./Pages/NotFound";
import Contact from "./Pages/Contact";
import AudioBible from "./Pages/AudioBible";

export const App = () => (
  <>
    <Navbar />
    <Router>
      <Home path="/" />
      <Blog path="/blog" />
      <Post path="/post" />
      <Contact path="/contactus" />
      <AboutSection path="/about" />
      <AudioBible path="/bible" />
      {/* <Profile path="/profile/:user?" /> */}
      <NotFound default />
    </Router>
  </>
);
