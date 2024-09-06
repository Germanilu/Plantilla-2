'use client'

import { Link } from '../../../../navigation';
import LanguageSwitcher from '../language-switcher';
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

import './index.scss';

export default function Navbar() {
  const t = useTranslations("Navbar");
  const tfooter = useTranslations("Footer");
  const [openMenu, setOpenMenu] = useState(false);
  const isMobile = useSelector(state => state.responsive.isMobile);

  return (
    <>
      {
        isMobile ?
          <nav className="navbar">
            <div className={`menu-action ${openMenu ? 'open' : ""}`} >
              {openMenu ?
                <RxCross2 className='burger-menu-icon' color='#ddd' size={35} onClick={() => setOpenMenu(!openMenu)} />
                :
                <>
                  <IoMenu className='burger-menu-icon' color='#ddd' size={35} onClick={() => setOpenMenu(!openMenu)} />
                  <Link className='logo-menu-close' href="/">Savana</Link>
                </>

              }
              {openMenu &&
                <motion.div className="container-navbar"
                  variants={{
                    hidden: { opacity: 0, y: 0 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ delay: .1, duration: 0.5 }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >

                  <motion.div className="logo"
                    variants={{
                      hidden: { opacity: 0, y: -50 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ delay: .3, duration: 0.5 }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >{t('savana')}</motion.div>
                  <motion.div className='mobile-navbar-box'
                    variants={{
                      hidden: { opacity: 0, y: 0 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ delay: .5, duration: 0.5 }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}>

                    <div className="left-menu-mobile">
                      <Link className="item" href="/breakfast" onClick={() => setOpenMenu(!openMenu)}>{t('breakfast')}</Link>
                      <Link className="item" href="/menu" onClick={() => setOpenMenu(!openMenu)}>{t('menu')}</Link>
                      <Link className="item"href="/#contact" onClick={() => setOpenMenu(!openMenu)}>{t('contact-us')}</Link>
                    </div>
                    <div className="language-switcher-box">
                      <LanguageSwitcher className="language-switcher" />
                    </div>
                  </motion.div>
                  <motion.div className="contact-information-box"
                    variants={{
                      hidden: { opacity: 0, y: 0 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ delay: .7, duration: 0.5 }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}>

                    <div className="info">
                      <span className="info-label">{tfooter('phone-label')}</span>
                      <p className="info-text">{tfooter('phone-number')}</p>
                    </div>
                    <div className="info socials">
                      <span className="info-label">{tfooter('socials-label')}</span>
                      <span className="info-text">{tfooter('instagram')}</span>
                      <span className="info-text">{tfooter('facebook')}</span>
                    </div>
                    <div className="info">
                      <span className="info-label">{tfooter('inquiries-label')}</span>
                      <p className="info-text">{tfooter('inquiries-email')}</p>
                    </div>
                  </motion.div>
                  <motion.div className="registered"
                    variants={{
                      hidden: { opacity: 0, y: 0 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ delay: .9, duration: 0.5 }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <span className="info-text">{tfooter('text')}</span>
                  </motion.div>
                </motion.div>
              }
            </div>
          </nav>
          :
          <nav className="navbar">
            <div className="logo" ><Link className="item" href="/">{t('savana')}</Link></div>
            <div className="navbar-list-container">
              <ul className="navbar-list">
                <li className="list-item">
                  <div className="dot"></div>
                  <Link className="item" href="/breakfast">{t('breakfast')}</Link>
                </li>
                <li className="list-item">
                  <div className="dot"></div>
                  <Link className="item" href="/menu">{t('menu')}</Link>
                </li>
                <li className="list-item">
                  <div className="dot"></div>
                  <Link className="item" href="/#contact">{t('contact-us')}</Link>
                </li>
              </ul>
              <div className="language-switcher-container">
                <LanguageSwitcher />
              </div>
            </div>
          </nav>
      }
    </>
  )
}