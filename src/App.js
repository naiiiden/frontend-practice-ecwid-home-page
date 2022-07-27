import "./style/general.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Content from "./components/Content";

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
        />
        <Content 
          hText="Grow faster" 
          mainDesc="Ecwid gives you the power to easily sell anywhere, to anyone — across the internet and around the world. Control everything from a single platform with centralized inventory, order management, and pricing. It doesn’t get any simpler than this."
          href="https://www.ecwid.com/promote"
        />
        <Content 
          hText="Manage simply" 
          mainDesc="Control everything seamlessly from a single dashboard with centralized inventory, order management, pricing, and more. Like a leisurely walk in the park…if that park was also made of money."
          href="https://www.ecwid.com/manage"
        />
      </main>
    </div>
  )
}

export default App;