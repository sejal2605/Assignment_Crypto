// import React from "react";
import styles from "./EMISection.module.scss";
import { Assets } from "../../../assets";
import { useTheme } from "../../../context/ThemeContext";

const EMISection: React.FC = () => {
  const { theme } = useTheme();
  const LeftImage =
    theme === "dark"
      ? Assets.images.EMIDarkSectionBanner
      : Assets.images.EMILightSectionBanner;

  const isDark = theme === "dark";

  return (
    <section className={styles.emiSection}>
      <div className={styles.left}>
        <img src={LeftImage} alt="Buy Crypto on EMI" />
      </div>

      <div className={styles.right}>
        <h2>
          {isDark ? "Trade Smarter, Trade Faster" : "Buy Crypto Instantly, Pay Later with Ease"}
        </h2>

        <p>
          {isDark
            ? "Buy and sell crypto seamlessly with real-time price tracking, deep liquidity, and ultra-low fees. Start trading in seconds!"
            : "Break your crypto purchase into smaller EMIs. Start with a down payment and own crypto today—powered by Bitzarr’s secure BNPL system"}
        </p>

        <ul className={styles.features}>
          {isDark ? (
            <>
              <li>Real-Time Market Prices</li>
              <li>Low Trading Fees</li>
              <li>Secure & Fast Transactions</li>
              <li>Trade 100+ Crypto Pairs</li>
            </>
          ) : (
            <>
              <li>Flexible EMI Options</li>
              <li>Start with a Small Down Payment</li>
              <li>Secure Asset Delivery</li>
              <li>Powered by Real-Time Calculations</li>
            </>
          )}
        </ul>

        <button className={styles.cta}>
          {isDark ? "Start Trading Now" : "Buy Crypto on EMI"}
        </button>
      </div>
    </section>
  );
};

export default EMISection;
