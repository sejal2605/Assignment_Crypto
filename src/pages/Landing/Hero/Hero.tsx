import React from "react";
import styles from "./Hero.module.scss";
import { Assets } from '../../../assets';
import { useTheme } from "../../../context/ThemeContext";

const Hero: React.FC = () => {
  const { theme } = useTheme();
  const backgroundImage = theme === "dark" ? Assets.images.DarkHome : Assets.images.LightHome;
  const checkmarkIcon = theme === "dark" ? Assets.icons.darkcheck : Assets.icons.lightcheck;

  return (
    <section className={styles.home}>
      <div className={styles.hero}>
        <div className={styles.left}>
          <h1>
            {theme === "dark"
              ? <>Trade Smarter,<br /> Not Harder</>
              : <>Invest in Crypto with<br />Buy Now Pay Later</>
            }
          </h1>
          <p>
            {theme === "dark"
              ? <>Experience seamless trading with our advanced platform.<br />Access global markets, trade cryptocurrencies, stocks, and more with professional tools and real-time data.</>
              : <>Buy Now, Pay Later – Split your crypto purchase into easy EMIs.<br />Start with a small down payment and gain access to top cryptocurrencies instantly.</>
            }
          </p>

          <div className={styles.ctas}>
            <button className={styles.primary}>
              {theme === "dark" ? "Start Trading" : "Start Using BNPL"}
            </button>
            <button className={styles.secondary}>
              {theme === "dark" ? "View Live Market" : "How It Works"}
            </button>
          </div>

          <div className={styles.trustedSection}>
            <img src={checkmarkIcon} alt="Checkmark" className={styles.checkmarkIcon} />
            <p className={styles.trustedText}>
              {theme === "dark"
                ? "Trusted by over 1M+ traders worldwide"
                : "Trusted by over 1M+ investors worldwide"
              }
            </p>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.heroCard}>
            <img src={backgroundImage} alt="Hero Illustration" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
