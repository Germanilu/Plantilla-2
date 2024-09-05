import AnimationHero from './components/hero/animation-hero'
import Hero from './components/hero/index.jsx';
import Breakfast from './components/menu/breakfast';
import Menu from './components/menu';
import Contact from './components/contact';
import ScrollToTop from "@/app/[locale]/components/scroll-to-top/index";
import './page.scss';

export const metadata = {
  title:"Home title",
  description:"home metadata description"
}

export default function Home() {

  return (
    <div className='home-design'>
      <div className="hero-section">
        <AnimationHero/>
        <div className="hero-visible">
        <Hero/>
        </div>
      </div>
       <Breakfast/>
       <Menu/>
       <div id="contact">
       <Contact/>

       </div>
      <ScrollToTop />
    </div>
  )
}

