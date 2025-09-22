import React from 'react';
import styles from './ChainsSection.module.scss';
import { Assets } from '../../../assets';

const ChainsSection = () => {
  const icons = [
    Assets.icons.statcard9,
    Assets.icons.statcard3,
    Assets.icons.statcard4,
    Assets.icons.statcard2,
    Assets.icons.statcard7,
    Assets.icons.statcard8,
    Assets.icons.statcard5,
    Assets.icons.statcard1,
  ];

  return (
    <section className={styles.chainsSection}>
      <div className={styles.logoArcContainer}>
        <div className={styles.logoArc}>
          {icons.map((icon, i) => (
            <img key={i} src={icon} alt={`chain-icon-${i}`} className={styles[`icon${i + 1}`]} />
          ))}
        </div>

        <div className={styles.chaincontent}>
          <h2>
            All the chains <br /> that matter in one place
          </h2>
          <p>
            Explore top blockchains like Bitcoin, Ethereum, Cardano, and Solana—
            secure, scalable, and innovative networks shaping the future of crypto.
          </p>

          <div className={styles.downloadBtns}>
            <button className={styles.cta}>
              <img src={Assets.icons.Googlepay} alt="Google Pay" />
              <div className={styles.btncontent}>
                <span>Google Pay</span>
                <p>Download on the</p>
              </div>
            </button>
            <button className={styles.cta}>
              <img src={Assets.icons.appstore} alt="App Store" />
              <div className={styles.btncontent}>
                <span>App Store</span>
                <p>Download on the</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChainsSection;
