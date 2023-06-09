import { FunctionalComponent } from "preact";
import AboutSection from "../components/HOME/About";
import Footer from "../components/Common/Footer";
import HeroSection from "../components/HOME/HeroSection";
import NewsletterSection from "../components/HOME/NewsletterSection";
import PodcastLinks from "../components/HOME/PodcastLinks";
import ProgramsSection from "../components/HOME/ProgramsSection";
import BlogsSection from "../components/HOME/Blogs";

const Home: FunctionalComponent = () => {
  return (
    <>
      <HeroSection />
      <PodcastLinks />
      <AboutSection />
      <ProgramsSection />
      <BlogsSection />
      <NewsletterSection />
      <Footer />
    </>
  );
};

export default Home;
