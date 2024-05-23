import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/BackgroundAsImageWithCenteredContent.js";
// import Features from "components/features/ThreeColCenteredStatsPrimaryBackground";
import Features from "components/features/TwoColSingleFeatureWithStats2";
import Planner from "components/cards/ProfileThreeColGrid";
import Gallery from "components/blogs/GridWithFeaturedPost";
import Blog from "components/blogs/PopularAndRecentBlogPosts";
import Testimonial from "components/testimonials/ThreeColumnWithProfileImage";
import ContactUsForm from "components/forms/TwoColContactUsWithIllustration";
import truss from "./images/trusss.png"
import Card from "components/cards/TabCardGrid";
import Footer from "components/footers/SimpleFiveColumn.js";
import DevelopmentMessage from "DevelopmentMessage";
import Message from "Message";
import "./index.css";
import DownloadApp from "components/cta/DownloadApp";
import GetStarted from "components/cta/GetStarted";
import GetStartedLight from "components/cta/GetStartedLight";

export default () => (
  <AnimationRevealPage>
    <Hero />
    <div className="truss">
      <img src={truss} alt="" srcset="" />
    </div>
    <Features />
    <Card />
    <DownloadApp />
    <Gallery />
    <Blog />
    {/* <Planner /> */}
    {/* <Testimonial /> */}
    
    <GetStartedLight />
    <Footer />
    {/* <DevelopmentMessage /> */}
    {/* <Message /> */}
  </AnimationRevealPage>
);
