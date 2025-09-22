import React from "react";
import styles from "./Footer.module.scss";
import { Assets } from "../../assets/index";
import { useTheme } from "../../context/ThemeContext";

const Footer: React.FC = () => {
  const { theme } = useTheme();
  const Footerbg = theme === "dark" ? Assets.images.darkFooterbg : Assets.images.lightFooterbg;

  return (
    <footer className={styles.footer}>
      <div className={styles.brand}>
        <img src={Assets.images.Logo} alt="Logo" />
        <p>
          Experience seamless trading with our advanced platform. Access
          global markets, trade cryptocurrencies, stocks, and more with
          professional tools and real-time data.
        </p>
      </div>

      <div className={styles.top}>
        <div className={styles.leftLinks}>
          <a href="#">Company</a>
          <a href="#">Support</a>
          <a href="#">Product</a>
          <a href="#">Info Hub</a>
        </div>

        <div className={styles.rightLinks}>
          <div>
            <a href="#">About Us</a>
            <a href="#">Support Center</a>
            <a href="#">Insta Buy</a>
            <a href="#">News</a>
          </div>
          <div>
            <a href="#">KYC Policy</a>
            <a href="#">Terms of Use</a>
            <a href="#">Trading</a>
            <a href="#">Announcement</a>
          </div>
          <div>
            <a href="#">Partner</a>
            <a href="#">Privacy Policy</a>
            <a href="#">BNPL</a>
            <a href="#">Referral and Reward</a>
          </div>
          <div>
            <a href="#">Fees</a>
            <a href="#">Disclaimer</a>
            <a href="#">VIP</a>
            <a href="#">Blog</a>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.waveBottom}>
          <img src={Footerbg} alt="wave" />
        </div>

        <div className={styles.bottomContent}>
          <div className={styles.socials}>
            <a href="#"><img src={Assets.icons.linkedin} alt="socialicon" /></a>
            <a href="#"><img src={Assets.icons.instagram} alt="socialicon" /></a>
            <a href="#"><img src={Assets.icons.facebook} alt="socialicon" /></a>
            <a href="#"><img src={Assets.icons.telegram} alt="socialicon" /></a>
            <a href="#"><img src={Assets.icons.twitter} alt="socialicon" /></a>
            <a href="#"><img src={Assets.icons.git} alt="socialicon" /></a>
            <a href="#"><img src={Assets.icons.discord} alt="socialicon" /></a>
          </div>

          <p>@ {new Date().getFullYear()} All rights reserved</p>
          <div className={styles.rightEmpty}></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
