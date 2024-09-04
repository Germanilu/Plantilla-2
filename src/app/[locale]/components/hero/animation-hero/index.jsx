'use client'
import { motion } from "framer-motion";
import { useTranslations }      from "next-intl";
import './index.scss';

const AnimationHero = () => {
    const t = useTranslations("Animation-Hero");
    return (
        <motion.main className="container"
            variants={{
                hidden: { opacity: 1, },
                visible: { opacity: 0, display: 'none' },
            }}
            transition={{ delay: 5, duration: 0.5 }}
            initial="hidden"
            animate="visible"
            viewport={{ once: true }}
        >
            <p>{t('restaurant-name')}</p>
            <section className="animation">
                <div className="first"><div className="first-text">{t('text1')}</div></div>
                <div className="second"><div>{t('text2')}</div></div>
                <div className="third"><div>{t('text3')}</div></div>
            </section>
        </motion.main>
    )
}

export default AnimationHero;
