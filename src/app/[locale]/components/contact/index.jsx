'use client';

import React, { useRef, useState }        from "react";
import {motion} from "framer-motion";
import { useTranslations }                from "next-intl";

import './index.scss';

export default function Contact() {
  const t = useTranslations('Contact-Component');
  
  return(
    <motion.div className="contact-design"
    variants={{
      hidden:{opacity:0, y:75},
      visible:{opacity:1,y:0},
    }}
    transition={{delay:  0.7, duration:0.7}}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}>
      
      <h2>{t('title')}</h2>
      <div className="contact-information-box">
        <div className="info">
          <p className="p-principal">{t('restaurant-name')}</p>
          <p className="p-info">{t('tagline')}</p>
        </div>
        <div className="info">
          <p className="p-principal">{t('address-label')}</p>
          <p className="p-info">{t('address')}</p>
        </div>
        <div className="info">
          <p className="p-principal">{t('hours-label')}</p>
          <p className="p-info">{t('weekday-hours')}</p>
          <p className="p-info">{t('weekend-hours')}</p>
          <p className="p-info">{t('monday-closed')}</p>
        </div>
        <div className="info">
          <p className="p-principal">{t('contacts-label')}</p>
          <p className="p-info">{t('email')}</p>
          <p className="p-info">{t('phone')}</p>
        </div>
      </div>
    </motion.div>
  )
}