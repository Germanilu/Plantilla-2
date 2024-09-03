'use client';

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from 'next/image';
import dessert from "../../../../static/media/img/dessert.jpg";
import coffee from "../../../../static/media/img/coffee.jpg";
import fish from "../../../../static/media/img/fish.jpg";

import './index.scss';

export default function Contact() {
  const t = useTranslations('Contact-Component');

  const [fullScreenImage, setFullScreenImage] = useState(null);

  const handleImageClick = (image) => {
    setFullScreenImage(image); // Set the clicked image as full-screen
  };

  const handleCloseFullScreen = () => {
    setFullScreenImage(null); // Close the full-screen image
  };



  return (
    <>
      <motion.div className="contact-design"
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ delay: 0.7, duration: 0.7 }}
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

      <div className="images-grid">
        <motion.div className="image" onClick={() => handleImageClick(fish)}
          variants={{
            hidden: { opacity: 0, x: -75 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ delay: 0.7, duration: 0.7 }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}>

          <Image className="img" src={fish} alt="drink2" width={400} height={400} quality={100} />
        </motion.div>
        <motion.div className="image" onClick={() => handleImageClick(dessert)}
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ delay: 0.8, duration: 0.7 }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}>

          <Image className="img" src={dessert} alt="drink1" width={400} height={400} quality={100} />
        </motion.div>
        <motion.div className="image" onClick={() => handleImageClick(coffee)}
          variants={{
            hidden: { opacity: 0, x: 75 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ delay: 0.9, duration: 0.7 }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}>

          <Image className="img" src={coffee} alt="drink3" width={400} height={400} quality={100} />
        </motion.div>
      </div>

      {fullScreenImage && (
        <div className="full-screen-overlay" onClick={handleCloseFullScreen}>
          <Image className="full-screen-img" src={fullScreenImage} alt="Full Screen" layout="fill" objectFit="contain" quality={100} />
        </div>
      )}
    </>
  )
}