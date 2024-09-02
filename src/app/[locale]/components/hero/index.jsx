'use client'
import { useSelector }      from 'react-redux';
import { useTranslations }      from "next-intl";
import { useRef } from 'react';
import Image from 'next/image';
import { scroll } from "framer-motion"
import drink from "../../../../static/media/img/drink.jpg";
import {motion} from "framer-motion"
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import './index.scss';
import { useEffect } from 'react';

const Hero = () => {
  const t = useTranslations("Hero");
  const isMobile = useSelector(state => state.responsive.isMobile);
  const imageRef = useRef(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        // Get the position of the image relative to the viewport
        const rect = imageRef.current.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Calculate the parallax effect
        const offset = scrollTop - rect.top;
        const translateValue = offset * 0.2; // Adjust this multiplier for more or less movement

        // Apply the translate3d transformation
        imageRef.current.style.transform = `translate3d(0px, ${translateValue}px, 0px)`;
      }
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
 
  return (
      <div className="hero-design">
        {
          isMobile ?
          <>
           <div className="text">
              <motion.h1
              variants={{
                hidden:{opacity:0, x:75},
                visible:{opacity:1,x:0},
              }}
              transition={{delay: 0.5, duration:0.5}}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              >{t('our')}</motion.h1>
              <motion.h4
               variants={{
                hidden:{opacity:0, x:-75},
                visible:{opacity:1,x:0},
              }}
              transition={{delay: 0.5, duration:0.5}}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              >{t('kitchen')}</motion.h4>
            </div>

          <motion.div className="image-container"
           variants={{
            hidden:{opacity:0, y:75},
            visible:{opacity:1,y:0},
          }}
          transition={{delay: 0.7, duration:0.5}}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          >
            <Image className="img" src={drink} alt={'drink'}   quality={100}  />
          </motion.div>

          <motion.div className="bottom-text"
          variants={{
            hidden:{opacity:0, y:75},
            visible:{opacity:1,y:0},
          }}
          transition={{delay: 1, duration:0.5}}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          >
              <p className="capital-letter">{t('capital-letter')}</p>
              <p>{t('text1')}</p>
              <motion.div className="button-menu"
               variants={{
                hidden:{opacity:0, x:-75},
                visible:{opacity:1,x:0},
              }}
              transition={{delay: .3, duration:0.5}}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              >
                <p className="menu">{t('menu')}</p>
                <HiOutlineArrowLongRight className="arrow" size={40}/>
              </motion.div>
           </motion.div>

          </>
          :
          <>
          <motion.div className="image-container"
           variants={{
            hidden:{opacity:0, x:-75},
            visible:{opacity:1,x:0},
          }}
          transition={{delay: 0.7, duration:0.5}}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          >
            <Image className="img" ref={imageRef} src={drink} alt={'drink'} width={700} height={900}  quality={100}  />
          </motion.div>
          <div className="text-section">
            <div className="text">
              <motion.h1
                variants={{
                  hidden:{opacity:0, x:75},
                  visible:{opacity:1,x:0},
                }}
                transition={{delay: 0.5, duration:0.5}}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >{t('our')}</motion.h1>
              <motion.h4
               variants={{
                hidden:{opacity:0, x:-75},
                visible:{opacity:1,x:0},
              }}
              transition={{delay: 0.5, duration:0.5}}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              >{t('kitchen')}</motion.h4>
            </div>
            <motion.div className="bottom-text"
             variants={{
              hidden:{opacity:0, x:0},
              visible:{opacity:1,x:0},
            }}
            transition={{delay: 1, duration:0.5}}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            >
              <p className="capital-letter">{t('capital-letter')}</p>
              <p>{t('text1')}</p>
              <motion.div className="button-menu"
                variants={{
                  hidden:{opacity:0, x:-75},
                  visible:{opacity:1,x:0},
                }}
                transition={{delay: 1.3, duration:0.5}}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                >
                <p className="menu">{t('menu')}</p>
                <HiOutlineArrowLongRight className="arrow" size={40}/>
              </motion.div>
            </motion.div>
          </div>
          </>
        }
        </div>

    )
}

export default Hero;