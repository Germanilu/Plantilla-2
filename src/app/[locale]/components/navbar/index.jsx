'use client'

import { Link } from '../../../../navigation';
import LanguageSwitcher from '../language-switcher';
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
            <div className={`menu-action ${openMenu ? 'open':""}`} >
              {openMenu ?
               <RxCross2 className='burger-menu-icon' size={35} onClick={() => setOpenMenu(!openMenu)} /> 
               :
               <>
               <IoMenu className='burger-menu-icon' size={35} onClick={() => setOpenMenu(!openMenu)} />
                <span className='logo-menu-close'>Savana</span>
              </>
               
               }
              {openMenu &&
                <div className="container-navbar">
                  <div className="logo" >{t('savana')}</div>
                  <div className='mobile-navbar-box'>
                    <div className="left-menu-mobile">
                      <Link className="item" href="/breakfast" onClick={() => setOpenMenu(!openMenu)}>{t('breakfast')}</Link>
                      <Link className="item" href="/menu" onClick={() => setOpenMenu(!openMenu)}>{t('menu')}</Link>
                      <Link className="item" href="/contact-us" onClick={() => setOpenMenu(!openMenu)}>{t('contact-us')}</Link>
                    </div>
                    <div className="language-switcher-box">
                      <LanguageSwitcher className="language-switcher" />
                    </div>
                  </div>
                  <div className="contact-information-box">
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
                  </div>
                  <div className="registered">
                    <span className="info-text">{tfooter('text')}</span>
                  </div>
                </div>
              }
            </div>
          </nav>
          :
          <nav className="navbar">
            <div className="logo" >{t('savana')}</div>
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
                  <Link className="item" href="/contact-us">{t('contact-us')}</Link>
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