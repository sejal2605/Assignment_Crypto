// import React from "react";
import styles from "./Statcard.module.scss";
import { FiArrowUpRight, FiArrowDownRight } from "react-icons/fi";

interface StatCardProps {
  icon: string;
  symbol: string;
  name: string;
  price: string;
  change: number;
  chart: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, symbol, name, price, change, chart }) => {
  const isPositive = change >= 0;

  return (
    <div className={styles.statcard}>
      <div className={styles.header}>
        <div className={styles.coinInfo}>
          <img src={icon} alt={symbol} className={styles.icon} />
          <div className={styles.texts}>
            <span className={styles.symbol}>{symbol}</span>
            <span className={styles.name}>{name}</span>
          </div>
        </div>
        <div className={`${styles.arrow} ${isPositive ? styles.up : styles.down}`}>
          {isPositive ? <FiArrowUpRight /> : <FiArrowDownRight />}
        </div>
      </div>

      <div className={styles.bottomRow}>
        <div className={styles.left}>
          <div className={styles.price}>{price}</div>
          <div className={`${styles.change} ${isPositive ? styles.upText : styles.downText}`}>
            {isPositive ? `+${change}%` : `${change}%`}
          </div>
        </div>

        <div className={styles.chart}>
          <img src={chart} alt="chart" />
        </div>
      </div>
    </div>
  );
};

export default StatCard;
