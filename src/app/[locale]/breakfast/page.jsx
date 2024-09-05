'use client';
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from 'next/image';
import avocadotoast from "../../../static/media/img/br-avocadotoast.jpg";
import benedict from "../../../static/media/img/br-benedict.jpg";
import croissant from "../../../static/media/img/br-croissant.jpg";
import minipancakes from "../../../static/media/img/br-mini-pancakes.jpg";
import pancakes from "../../../static/media/img/br-pancakes.jpg";
import shakshuka from "../../../static/media/img/br-shakshuka.jpg";
import waffle from "../../../static/media/img/br-waffle.jpg";
import yogurt from "../../../static/media/img/br-yogurt.jpg";
import juice from "../../../static/media/img/br-juice.jpg";
import './page.scss'

export default function BreakFast() {
  const t = useTranslations("Breakfast");
  const [fullScreenImage, setFullScreenImage] = useState(null);

  const handleImageClick = (image) => {
    setFullScreenImage(image);
  };

  const handleCloseFullScreen = () => {
    setFullScreenImage(null); 
  };

  return (
    <div className="breakfast-us-design">
      <motion.h1
      variants={{
        hidden: { opacity: 0, x: 0 },
        visible: { opacity: 1, x: 0 },
      }}
      transition={{ delay: 0.5, duration: 0.5 }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      >{t('title')}</motion.h1>
      <motion.span
        variants={{
          hidden: { opacity: 0, x: 0 },
          visible: { opacity: 1, x: 0 },
        }}
        transition={{ delay: 0.5, duration: 0.5 }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >{t('text')}</motion.span>
      <div className="images-grid">
        <motion.div className="image" onClick={() => handleImageClick(avocadotoast)}
          variants={{
            hidden: { opacity: 0, x: -75 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ delay: 0.5, duration: 0.5 }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}>

          <Image className="img" src={avocadotoast} alt="drink2" width={300} height={300} quality={100} />
          <span className="img-name">{t('dish1')}</span>
        </motion.div>
        <motion.div className="image" onClick={() => handleImageClick(benedict)}
          variants={{
            hidden: { opacity: 0, x: -75 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ delay: 0.6, duration: 0.5 }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}>

          <Image className="img" src={benedict} alt="drink2" width={300} height={300} quality={100} />
          <span className="img-name">{t('dish2')}</span>
        </motion.div>
        <motion.div className="image" onClick={() => handleImageClick(croissant)}
          variants={{
            hidden: { opacity: 0, x: -75 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ delay: 0.7, duration: 0.5 }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}>

          <Image className="img" src={croissant} alt="drink2" width={300} height={300} quality={100} />
          <span className="img-name">{t('dish3')}</span>
        </motion.div>
        <motion.div className="image" onClick={() => handleImageClick(minipancakes)}
          variants={{
            hidden: { opacity: 0, x: -75 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ delay: 0.8, duration: 0.5 }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}>

          <Image className="img" src={minipancakes} alt="drink2" width={300} height={300} quality={100} />
          <span className="img-name">{t('dish4')}</span>
        </motion.div>
        <motion.div className="image" onClick={() => handleImageClick(pancakes)}
          variants={{
            hidden: { opacity: 0, x: -75 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ delay: 0.9, duration: 0.5 }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}>

          <Image className="img" src={pancakes} alt="drink2" width={300} height={300} quality={100} />
          <span className="img-name">{t('dish5')}</span>
        </motion.div>
        <motion.div className="image" onClick={() => handleImageClick(shakshuka)}
          variants={{
            hidden: { opacity: 0, x: -75 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ delay: 1, duration: 0.5 }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}>

          <Image className="img" src={shakshuka} alt="drink2" width={300} height={300} quality={100} />
          <span className="img-name">{t('dish6')}</span>
        </motion.div>
        <motion.div className="image" onClick={() => handleImageClick(waffle)}
          variants={{
            hidden: { opacity: 0, x: -75 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ delay: 1.1, duration: 0.5 }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}>

          <Image className="img" src={waffle} alt="drink1" width={300} height={300} quality={100} />
          <span className="img-name">{t('dish7')}</span>
        </motion.div>
        <motion.div className="image" onClick={() => handleImageClick(yogurt)}
          variants={{
            hidden: { opacity: 0, x: -75 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ delay: 1.2, duration: 0.5 }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}>

          <Image className="img" src={yogurt} alt="drink3" width={300} height={300} quality={100} />
          <span className="img-name">{t('dish8')}</span>
        </motion.div>
        <motion.div className="image" onClick={() => handleImageClick(juice)}
          variants={{
            hidden: { opacity: 0, x: -75 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ delay: 1.3, duration: 0.5 }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}>

          <Image className="img" src={juice} alt="drink3" width={300} height={300} quality={100} />
          <span className="img-name">{t('dish9')}</span>
        </motion.div>
      </div>

      {fullScreenImage && (
        <div className="full-screen-overlay" onClick={handleCloseFullScreen}>
          <Image className="full-screen-img" src={fullScreenImage} alt="Full Screen" layout="fill" objectFit="contain" quality={100} />
        </div>
      )}
    </div>
  )
}