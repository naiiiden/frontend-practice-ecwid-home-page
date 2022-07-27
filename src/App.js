import "./style/general.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Content from "./components/Content";
import facebook from "./images/facebook/facebook.webp";
import instagram from "./images/instagram/instagram.webp";

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
        />
        <Content 
          hText="Grow faster" 
          mainDesc="Ecwid gives you the power to easily sell anywhere, to anyone — across the internet and around the world. Control everything from a single platform with centralized inventory, order management, and pricing. It doesn’t get any simpler than this."
          href="https://www.ecwid.com/promote"
          imgOrText={false}
          f1hText="Google advertising"
          f1Desc="Get your products to the top of the world's most powerful search engine with Ecwid’s automated Google Shopping ads."

        />
        <Content 
          hText="Manage simply" 
          mainDesc="Control everything seamlessly from a single dashboard with centralized inventory, order management, pricing, and more. Like a leisurely walk in the park…if that park was also made of money."
          href="https://www.ecwid.com/manage"
          imgOrText={false}
          f1hText="Fast and secure payments"
          f1Desc="Choose from Stripe and more than 50 other payment options to accept credit card payments quickly and securely."
        />
      </main>
    </div>
  )
}

export default App;