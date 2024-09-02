import { useTranslations } from "next-intl";
import Map from "@/app/[locale]/components/google-map-location/index";
import AnimationHero from './components/hero/animation-hero'
import Hero from './components/hero/index.jsx';
import Breakfast from './components/menu/breakfast';
import ScrollToTop from "@/app/[locale]/components/scroll-to-top/index";
import './page.scss';

export const metadata = {
  title:"Home title",
  description:"home metadata description"
}

export default function Home() {
  const t = useTranslations("Home");

  return (
    <div className='home-design'>
      <div className="hero-section">
        {/* <AnimationHero/> */}
        <div className="hero-visible">
        <Hero/>
        </div>
      </div>
      <div className="first-section">
       <Breakfast/>
      </div>
      <div className="second-section">
        <h2>{t('second-section-title')}</h2>
      </div>
      <Map />
      <ScrollToTop />
    </div>
  )
}

