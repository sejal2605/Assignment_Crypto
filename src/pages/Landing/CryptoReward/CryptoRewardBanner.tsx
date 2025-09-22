// import React from 'react';
import styles from './CryptoRewardBanner.module.scss';

const CryptoRewardBanner = () => {
  return (
    <section className={styles.cryptoBanner}>
      <div className={styles.rewardBanner}>
        <h2>Earn up to ₹ 101</h2>
        <div>
          <p>Discover How Specific Cryptocurrencies Work</p>
          <p>Get A Bit Of Each Crypto To Try Out For Yourself.</p>
        </div>

        <button className={styles.ctaBtn}>Create Account</button>
      </div>

    </section>
  );
};

export default CryptoRewardBanner;
