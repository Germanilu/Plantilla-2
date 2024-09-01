'use client'
import { motion } from "framer-motion";
import './index.scss';

const Hero = () => {
    return (
        <motion.main className="container"
            variants={{
                hidden: { opacity: 1, },
                visible: { opacity: 0, display: 'none' },
            }}
            transition={{ delay: 5, duration: 0.5 }}
            initial="hidden"
            animate="visible"
        >
            <p>Savana</p>
            <section className="animation">
                <div className="first"><div className="first-text">Un Viaggio nel Gusto</div></div>
                <div className="second"><div>Dal Nostro Cuore</div></div>
                <div className="third"><div> alla Tua Tavola.</div></div>
            </section>
        </motion.main>
    )
}

export default Hero;
