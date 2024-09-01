'use client'
import { motion } from "framer-motion";
import './index.scss';

const Hero = () => {
    return (
        <main className="container">
            <p>Savana</p>
            <section className="animation">
                <div className="first"><div className="first-text">Un Viaggio nel Gusto</div></div>
                <div className="second"><div>Dal Nostro Cuore</div></div>
                <div className="third"><div> alla Tua Tavola.</div></div>
            </section>
        </main>
    )
}

export default Hero;
