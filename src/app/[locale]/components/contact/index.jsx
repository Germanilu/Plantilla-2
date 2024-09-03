'use client';

import React, { useRef, useState }        from "react";
import emailjs                            from "@emailjs/browser";
import { useTranslations }                from "next-intl";

import './index.scss';

export default function Contact() {
  const t = useTranslations('Contact-Component');
  
  return(
    <div className="contact-design">
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
          <p className="p-principal">{t('contact-label')}</p>
          <p className="p-info">{t('email')}</p>
          <p className="p-info">{t('phone')}</p>
        </div>
        <div className="info">
          <p className="p-principal">{t('hours-label')}</p>
          <p className="p-info">{t('weekday-hours')}</p>
          <p className="p-info">{t('weekend-hours')}</p>
          <p className="p-info">{t('monday-closed')}</p>
        </div>
      </div>
    </div>
  )
}