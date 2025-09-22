// import React from "react";
import styles from "./Statcard.module.scss";
import StatCard from "./StatCard";
import { Assets } from '../../../assets/index';
import { useTheme } from "../../../context/ThemeContext";

const StatCardList: React.FC = () => {
  const { theme } = useTheme(); 

  const getChartImage = (change: number) => {
    if (theme === "dark") {
      return change >= 0 ? Assets.images.DarkGreengraph : Assets.images.DarkRedGraph;
    } else {
      return change >= 0 ? Assets.images.greengraph : Assets.images.redgraph;
    }
  };
  const stats = [
    { icon: Assets.icons.statcard1, symbol: "BTC", name: "Bitcoin", price: "₹56,623.54", change: 1.41, chart: getChartImage(1.41) },
    { icon: Assets.icons.statcard2, symbol: "ETH", name: "Ethereum", price: "₹56,623.54", change: -1.41, chart: getChartImage(-1.41) },
    { icon: Assets.icons.statcard3, symbol: "BNB", name: "Binance", price: "₹56,623.54", change: 1.41, chart: getChartImage(1.41) },
    { icon: Assets.icons.statcard4, symbol: "TRX", name: "Tron", price: "₹56,623.54", change: 1.41, chart: getChartImage(1.41) },
    { icon: Assets.icons.statcard5, symbol: "USDT", name: "Tether", price: "₹56,623.54", change: -1.41, chart: getChartImage(-1.41) },
  ];

  const loopStats = [...stats, ...stats];

  return (
    <div className={styles.scroller}>
      <div className={styles.track}>
        {loopStats.map((item, i) => (
          <StatCard key={i} {...item} />
        ))}
      </div>
    </div>
  );
};

export default StatCardList;
