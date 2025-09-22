import React, { useState } from "react";
import styles from "./TrackCrypto.module.scss";
import { Assets } from '../../../assets/index';
import { useTheme } from "../../../context/ThemeContext";

const coins = [
  { name: "Ethereum", symbol: "ETH", price: "₹2,36,771.26", change: "+3.73%", positive: true, icon: Assets.icons.statcard2 },
  { name: "Bitcoin", symbol: "BTC", price: "₹92,36,711.26", change: "+0.73%", positive: true, icon: Assets.icons.statcard1 },
  { name: "ChainLink", symbol: "LINK", price: "₹145.56", change: "+21.73%", positive: true, icon: Assets.icons.statcard7 },
  { name: "Solana", symbol: "SOL", price: "₹223.21", change: "+10.26%", positive: true, icon: Assets.icons.statcard6 },
  { name: "Tron", symbol: "TRX", price: "₹223.21", change: "+10.26%", positive: true, icon: Assets.icons.statcard4 },
];

const TrackCrypto: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { theme } = useTheme();
  const lines = theme === "dark" ? Assets.images.DarkLines : Assets.images.LightLines;

  return (
    <section className={styles.trackCrypto}>
      <div className={styles.banner}>
        <img src={lines} alt="Track Crypto" />
      </div>
      <div className={styles.content}>
        <div className={styles.coinList}>
          {coins.map((coin, idx) => {
            const isPopped = hoveredIndex === null && idx === 1; 
            const isHovered = hoveredIndex === idx;
            return (
              <div
                key={idx}
                className={`${styles.coinRow} ${(isPopped || isHovered) ? styles.poppedOut : ""}`}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className={styles.coinInfo}>
                  <img src={coin.icon} alt={coin.name} className={styles.coinIcon} />
                  <div>
                    <div className={styles.coinName}>{coin.name}</div>
                    <div className={styles.symbol}>{coin.symbol}</div>
                  </div>
                </div>
                <div className={styles.rightcoininfo}>
                  <div className={styles.coinPrice}>{coin.price}</div>
                  <div className={`${styles.change} ${coin.positive ? styles.up : styles.down}`}>
                    {coin.change}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.textBlock}>
          <h2>Track Crypto Prices in Real-Time</h2>
          <p>
            Stay ahead in the crypto market with live updates on top-performing assets like Bitcoin,
            Ethereum, Solana, and more. Monitor price changes and trends instantly — all in one place.
          </p>
          <button className={styles.cta}>Start Tracking Now</button>
        </div>
      </div>
    </section>
  );
};

export default TrackCrypto;
