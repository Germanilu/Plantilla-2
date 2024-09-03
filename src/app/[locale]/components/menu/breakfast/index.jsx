'use client';

import { useTranslations } from "next-intl";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import {motion} from "framer-motion";
import Image from 'next/image';
import porridge from "../../../../../static/media/img/porridge.jpg";
import restaurant from "../../../../../static/media/img/restaurant.jpg";
import breakfast from "../../../../../static/media/img/breakfast.jpg";
import './index.scss';

const Breakfast = () => {
    const t = useTranslations("Breakfast");
    return(
        <div className='breakfast-design'>
            <motion.div className="img-left"
             variants={{
                hidden:{opacity:0, x:-75},
                visible:{opacity:1,x:0},
              }}
              transition={{delay: 0.5, duration:0.5}}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              >
                <div className="text">
                    <p>{t('breakfast')}</p>
                    <HiOutlineArrowLongRight className="arrow" size={40}/>
                </div>
                <Image className="img" src={porridge} alt={'drink'}   quality={100}  />
            </motion.div>
            <motion.div className="img-right"
             variants={{
                hidden:{opacity:0, y:75},
                visible:{opacity:1,y:0},
              }}
              transition={{delay: 0.7, duration:0.5}}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              >

                <Image className="img" src={breakfast} alt={'drink'} width={468} height={766}  quality={100}  />
            </motion.div>
            <motion.div className="img-bottom"
              variants={{
                hidden:{opacity:0, y:75},
                visible:{opacity:1,y:0},
              }}
              transition={{delay: 0.5, duration:0.5}}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              >
                <Image className="img" src={restaurant} alt={'drink'} width={950} height={450}  quality={100}  />
            </motion.div>
        </div>
    )
}

export default Breakfast;