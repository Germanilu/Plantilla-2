'use client';
import { useTranslations }      from "next-intl";
import {motion} from "framer-motion";
import './index.scss'

export default function Footer(){

  const t = useTranslations("Footer");

  return (
    <motion.div className="footer-design"
    variants={{
      hidden:{opacity:0, y:0},
      visible:{opacity:1,y:0},
    }}
    transition={{delay:  1.5, duration:0.5}}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    >
      <div className="container-info">
        <div className="info">
          <h2 className="info-label">{t('phone-label')}</h2>
          <p  className="info-text">{t('phone-number')}</p>
        </div>
        <div className="info">
          <h2  className="info-label">{t('inquiries-label')}</h2>
          <p  className="info-text">{t('inquiries-email')}</p>
        </div>
        <div className="info socials">
          <h2 className="info-label">{t('socials-label')}</h2>
          <span  className="info-text">{t('instagram')}</span>
          <span  className="info-text">{t('facebook')}</span>
        </div>
      </div>
      <div className="registered">
        <span  className="info-text">{t('text')}</span>
      </div>
    </motion.div>
  ) 
}



