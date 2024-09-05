'use client';

import React, { useState } from "react";
import {motion} from "framer-motion";
import { useTranslations } from "next-intl";
import Image from 'next/image';
import { menu } from '@/static/menu';
import './page.scss';

export default function Menu() {
  const t = useTranslations("Menu");
  const [fullScreenImage, setFullScreenImage] = useState(null);


  const handleImageClick = (image) => {
    setFullScreenImage(image); // Set the clicked image as full-screen
  };

  const handleCloseFullScreen = () => {
    setFullScreenImage(null); // Close the full-screen image
  };

  const starters = menu.starters
  const main = menu.main
  const dessert = menu.dessert

  return (
    <div className="menu-design">
      <h1 className="menu-title">{t('title')}</h1>
      <div className="menu-container">
        <div className="cnt">
          <p>{t('starters')}</p>
          {
            starters.map((dish) => {
              return (
                <motion.div className="dish-container" key={dish.id}  onClick={() => handleImageClick(dish.img.src)}
                variants={{
                hidden:{opacity:0, x:-75},
                visible:{opacity:1,x:0},
              }}
              transition={{delay: dish.id * 0.2818, duration:0.5}}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}>
                  <div className="image-container">
                    <Image className="img" src={dish.img.src} alt="menu-savana" width={200} height={200} quality={100} />
                  </div>
                  <div className="dish-text">
                    <span className="dish-name">{t(`${dish.dishName}`)}</span>
                    <span className="dish-description">{t(`${dish.dishDescription}`)}</span>
                  </div>
                </motion.div>
              )
            })
          }
        </div>
        <div className="cnt">
          <p>{t('main')}</p>
          {
            main.map((dish) => {
              return (
                <motion.div className="dish-container" key={dish.id} onClick={() => handleImageClick(dish.img.src)}
                variants={{
                  hidden:{opacity:0, x:-75},
                  visible:{opacity:1,x:0},
                }}
                transition={{delay: dish.id * 0.2818, duration:0.5}}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}>

                  <div className="image-container">
                    <Image className="img" src={dish.img.src} alt="menu-savana" width={200} height={200} quality={100} />
                  </div>
                  <div className="dish-text">
                    <span className="dish-name">{t(`${dish.dishName}`)}</span>
                    <span className="dish-description">{t(`${dish.dishDescription}`)}</span>
                  </div>
                </motion.div>
              )
            })
          }
        </div>
        <div className="cnt">
          <p>{t('dessert')}</p>
          {
            dessert.map((dish) => {
              return (
                <motion.div className="dish-container" key={dish.id} onClick={() => handleImageClick(dish.img.src)}
                variants={{
                  hidden:{opacity:0, x:-75},
                  visible:{opacity:1,x:0},
                }}
                transition={{delay: dish.id * 0.2818, duration:0.5}}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}>

                  <div className="image-container">
                    <Image className="img" src={dish.img.src} alt="menu-savana" width={200} height={200} quality={100} />
                  </div>
                  <div className="dish-text">
                    <span className="dish-name">{t(`${dish.dishName}`)}</span>
                    <span className="dish-description">{t(`${dish.dishDescription}`)}</span>
                  </div>
                </motion.div>
              )
            })
          }
        </div>
      </div>

      {fullScreenImage && (
        <div className="full-screen-overlay" onClick={handleCloseFullScreen}>
          <Image className="full-screen-img" src={fullScreenImage} alt="Full Screen" layout="fill" objectFit="contain" quality={100} />
        </div>
      )}
    </div>

    
  )
}