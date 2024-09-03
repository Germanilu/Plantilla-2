'use client'
import { motion } from "framer-motion";
import { useViewportScroll, useTransform } from 'framer-motion'
import { FaArrowUp } from "react-icons/fa";
import { useEffect, useState } from "react";

import './index.scss';

/**
 * @component 
 * Scroll to top button, will appear when window scroll + 100px
 * 
 * @example
 * <ScrollToTop/>
 * 
 */
export default function ScrollToTop() {

  const { scrollYProgress } = useViewportScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  const [scrollToTopButton, setScrollToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 100 ? setScrollToTopButton(true) : setScrollToTopButton(false)
    })
  }, [])

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <>
      {
        scrollToTopButton &&
        <div className="wrapper">
        <motion.div onClick={scrollUp} className="scroll-to-top" style={{ scale }}>
          <motion.div className="item" style={{ scaleY: scrollYProgress}}><FaArrowUp color="white" size={30}/></motion.div>
        </motion.div>
        </div>
      }
    </>
  )
}