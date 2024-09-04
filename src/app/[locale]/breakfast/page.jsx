'use client';
import { useTranslations }  from "next-intl";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from 'next/image';
import dessert from "../../../static/media/img/dessert.jpg";
import coffee from "../../../static/media/img/coffee.jpg";
import fish from "../../../static/media/img/fish.jpg";
import './page.scss'

export default function BreakFast(){
  const t = useTranslations("Breakfast");
  const [fullScreenImage, setFullScreenImage] = useState(null);

  const handleImageClick = (image) => {
    setFullScreenImage(image); // Set the clicked image as full-screen
  };

  const handleCloseFullScreen = () => {
    setFullScreenImage(null); // Close the full-screen image
  };

  return (
    <div className="breakfast-us-design">
      <h1>{t('title')}</h1>
      <span>{t('text')}</span>
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

          <Image className="img" src={fish} alt="drink2" width={300} height={300} quality={100} />
          <span className="img-name">{t('dish1')}</span>
        </motion.div>
        <motion.div className="image" onClick={() => handleImageClick(fish)}
          variants={{
            hidden: { opacity: 0, x: -75 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ delay: 0.7, duration: 0.7 }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}>

          <Image className="img" src={fish} alt="drink2" width={300} height={300} quality={100} />
          <span className="img-name">{t('dish1')}</span>
        </motion.div>
        <motion.div className="image" onClick={() => handleImageClick(fish)}
          variants={{
            hidden: { opacity: 0, x: -75 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ delay: 0.7, duration: 0.7 }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}>

          <Image className="img" src={fish} alt="drink2" width={300} height={300} quality={100} />
          <span className="img-name">{t('dish1')}</span>
        </motion.div>
        <motion.div className="image" onClick={() => handleImageClick(fish)}
          variants={{
            hidden: { opacity: 0, x: -75 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ delay: 0.7, duration: 0.7 }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}>

          <Image className="img" src={fish} alt="drink2" width={300} height={300} quality={100} />
          <span className="img-name">{t('dish1')}</span>
        </motion.div>
        <motion.div className="image" onClick={() => handleImageClick(fish)}
          variants={{
            hidden: { opacity: 0, x: -75 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ delay: 0.7, duration: 0.7 }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}>

          <Image className="img" src={fish} alt="drink2" width={300} height={300} quality={100} />
          <span className="img-name">{t('dish1')}</span>
        </motion.div>
        <motion.div className="image" onClick={() => handleImageClick(fish)}
          variants={{
            hidden: { opacity: 0, x: -75 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ delay: 0.7, duration: 0.7 }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}>

          <Image className="img" src={fish} alt="drink2" width={300} height={300} quality={100} />
          <span className="img-name">{t('dish1')}</span>
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

          <Image className="img" src={dessert} alt="drink1" width={300} height={300} quality={100} />
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

          <Image className="img" src={coffee} alt="drink3" width={300} height={300} quality={100} />
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

          <Image className="img" src={coffee} alt="drink3" width={300} height={300} quality={100} />
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