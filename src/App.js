import "./style/general.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Content from "./components/Content";
import facebook from "./images/facebook/facebook.webp";
import instagram from "./images/instagram/instagram.webp";
import michelle from "./images/people/michelle.webp";
import pamela from "./images/people/pamela.webp";
import benjamin from "./images/people/benjamin.webp";
import trustpilot from "./images/awards/trustpilot.webp";
import trustpilot_white from "./images/awards/trustpilot--white.webp";
import stars_black from "./images/stars/stars--black.svg";
import stars_white from "./images/stars/stars--white.webp";
import content_illustration1 from "./images/illustrations/content-illustration-1.webp";
import content_illustration2 from "./images/illustrations/content-illustration-2.webp";
import content_illustration3 from "./images/illustrations/content-illustration-3.webp";
import World from "./components/World";
import Link from "./components/Link";
import link1_image from "../src/images/rectangles/rectangle.webp";
import link2_image from "../src/images/rectangles/rectangle--1.webp";
import link3_image from "../src/images/rectangles/rectangle--2.webp";


const App = () => {
  return (
    <div>
      <Header/>
      <main>
        <Hero/>
        <Content 
          hText="Sell anywhere" 
          mainDesc="Set up your Ecwid store once to easily sync and sell across a website, social media, marketplaces like Amazon, and live in-person. Get started with one, or try them all."
          href="https://www.ecwid.com/sell"
          imgOrText={true}
          f1Src={facebook}
          f1Desc="Set up and manage a Facebook Store right from your Ecwid dashboard. You’re ready for social selling."
          f2Src={instagram}
          f2Desc="Let customers order directly from your Instagram posts when you’re powered by Ecwid."
          tAvatar={michelle}
          tName="Michelle Jackson"
          tDesc="This is the perfect place to get your online business up and running. You literally don’t have to to anywhere else. They have everything you need plus add on widgets web syncing to social media and more!"
          tReviewer={trustpilot}
          tStars={stars_black}
          cIllustration={content_illustration1}
        />
        <Content 
          hText="Grow faster" 
          mainDesc="Ecwid gives you the power to easily sell anywhere, to anyone — across the internet and around the world. Control everything from a single platform with centralized inventory, order management, and pricing. It doesn’t get any simpler than this."
          href="https://www.ecwid.com/promote"
          imgOrText={false}
          f1hText="Google advertising"
          f1Desc="Get your products to the top of the world's most powerful search engine with Ecwid’s automated Google Shopping ads."
          f2hText="Facebook advertising"
          f2Desc="Create a Facebook campaign in minutes to reach up to two billion active Facebook users."
          tAvatar={pamela}
          tName="Pamela Strydom"
          tDesc="Easy to use, affordable (and a free option if starting off). The platform integration with other programs such as Facebook, Instagram and local payment options make it an easy setup to manage effectively and easily."
          tReviewer={trustpilot}
          tStars={stars_black}
          cIllustration={content_illustration2}
        />
        <Content 
          hText="Manage simply" 
          mainDesc="Control everything seamlessly from a single dashboard with centralized inventory, order management, pricing, and more. Like a leisurely walk in the park…if that park was also made of money."
          href="https://www.ecwid.com/manage"
          imgOrText={false}
          f1hText="Fast and secure payments"
          f1Desc="Choose from Stripe and more than 50 other payment options to accept credit card payments quickly and securely."
          f2hText="Shipping that works for you"
          f2Desc="Choose as many shipping rates and carriers as you like to provide you and your customers with the best experience."
          tAvatar={benjamin}
          tName="Benjamin Scott"
          tDesc="Ecwid is awesome. Their smooth, operational and user friendly interface makes managing my store easy. They allow extensive and easy customization of products and variations galore."
          tReviewer={trustpilot_white}
          tStars={stars_white}
          cIllustration={content_illustration3}
        />
        <World/>
        <div className="link--component--container">
          <Link src={link1_image} href="https://support.ecwid.com/hc/en-us"/>
          <Link src={link2_image} href="https://www.ecwid.com/apps"/>
          <Link src={link3_image} href="https://www.ecwid.com/ecwid-mobile"/>
        </div>
      </main>
    </div>
  )
}

export default App;