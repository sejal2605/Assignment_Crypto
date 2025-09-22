import React, { useState } from "react";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import styles from "./Header.module.scss";
import { Assets } from "../../assets";
import { useTheme } from "../../context/ThemeContext";

const Header: React.FC = () => {
  const { theme } = useTheme();
  // const [openDropdown, setOpenDropdown] = useState(false);

  // Dynamic icons according to theme
  const earpieceIcon =
    theme === "dark" ? Assets.icons.darkearpiece : Assets.icons.lightearpiece;
  const notificationIcon =
    theme === "dark" ? Assets.icons.darknotification : Assets.icons.lightnotification;

  return (
    <header className={styles.header}>
      <div className={styles.row}>
        <div className={styles.brand}>
          <img src={Assets.images.Logo} alt="Logo" />
        </div>

        <nav className={styles.nav}>
          <a href="/">Home</a>
          <a href="#">Market</a>

          {/* Dropdown for Trade */}
          <div
            className={styles.dropdown}
          >
            <button className={styles.dropbtn}>Trade ▾</button>
            {/* Commented out dropdown content */}
          </div>

          <a href="#">BNPL</a>
        </nav>

        <div className={styles.actions}>
          <img src={earpieceIcon} alt="Earpiece" />
          <img src={notificationIcon} alt="Notification" />
          <ThemeToggle />
          <span className={styles.wallet}>Wallet</span>
          <span className={styles.profile}>
            Hi User <img src={Assets.icons.Profile} alt="profile" />
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
