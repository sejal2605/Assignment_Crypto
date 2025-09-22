// import React from "react";
import { useTheme } from "../../context/ThemeContext";
import styles from "./ThemeToggle.module.scss";
import { Assets } from "../../assets";

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const icon = theme === "dark" ? Assets.icons.darkThemetoggle : Assets.icons.lightThemetoggle;


  return (
    <div className={styles.toggle} title="Toggle theme">
      <img
        src={icon}
        alt="Theme toggle"
        onClick={toggleTheme}
        style={{ cursor: "pointer" }}
      />

    </div>
  );
};

export default ThemeToggle;
