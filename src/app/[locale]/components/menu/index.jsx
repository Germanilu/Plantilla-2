'use client'
import { useTranslations } from "next-intl";
import { useSelector }      from 'react-redux';
import {motion} from "framer-motion";
import { Link } from '../../../../navigation';
import Image from 'next/image';
import tomatoes from "../../../../static/media/img/tomatoes.png";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import './index.scss';

const Menu = () => {
    const t = useTranslations("Menu-Banner");
    const isMobile = useSelector(state => state.responsive.isMobile);
    return(
        <motion.div className="menu-design"
        variants={{
            hidden:{opacity:0, y:75},
            visible:{opacity:1,y:0},
          }}
          transition={{delay:  0.7, duration:0.7}}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          >
            <div className="menu-banner">
                <div className="text-container">
                    <div className="text">
                        <h2>{t('title')}</h2>
                        <p>{t('text')}</p>
                        <div className="menu-button">
                            <Link className="menu" href="/menu">{t('button-text')}</Link>
                            <HiOutlineArrowLongRight className="arrow" size={40} color='#2A2D34'/>
                        </div>
                    </div>
                </div>
                <div className="img-box">
                    {
                        isMobile ? 
                        <Image className="img" src={tomatoes} alt={'drink'} width={250} height={400} quality={100}  />
                        :
                        <Image className="img" src={tomatoes} alt={'drink'} width={500} height={750} quality={100}  />

                    }
                </div>
            </div>
        </motion.div>
    )
}

export default Menu;