import { useTranslations }      from "next-intl";
import Image from 'next/image';
import drink from "../../../../static/media/img/drink.jpg";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import './index.scss';

const Hero = () => {
  const t = useTranslations("Hero");
  return (
      <div className="hero-design">
        <div className="image-container">
        <Image className="img" src={drink} alt={'drink'} width={700} height={900}  quality={100}  />
        </div>
        <div className="text-section">
          <div className="text">
            <h1>{t('our')}</h1>
            <h4>{t('kitchen')}</h4>
          </div>
          <div className="bottom-text">
            <p className="capital-letter">{t('capital-letter')}</p>
            <p>{t('text1')}</p>
            <div className="button-menu">
              <p className="menu">{t('menu')}</p>
              <HiOutlineArrowLongRight className="arrow" size={40}/>
            </div>
          </div>
        </div>
      </div>

    )
}

export default Hero;