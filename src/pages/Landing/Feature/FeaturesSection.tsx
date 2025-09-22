import React from "react";
import { Button, Card, Progress, Select } from "antd";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";
import styles from "./FeaturesSection.module.scss";
import Input from "antd/es/input/Input";
import { Assets } from '../../../assets/index';
import { useTheme } from "../../../context/ThemeContext";

const FeaturesSection: React.FC = () => {
  const { theme } = useTheme();
  const Tradechart = theme === "dark" ? Assets.images.darkTradechart : Assets.images.lightTradechart;
  return (
    <div className={styles.featuresWrapper}>
      <div className={styles.row}>
        <Card className={`${styles.featureCard} ${styles.firstCard}`}>
          <div className={styles.cardwrapper}>
            <div className={styles.left}>
              <h3>Insta Trade -<br /> Buy / Sell</h3>
              <p>
                Trade your favorite crypto pairs instantly at lightning speed.
                No complex charts — just pick, swap, and go.
              </p>
            </div>
            <div className={styles.right}>
              <div className={styles.tabs}>
                <button className={`${styles.tab} ${styles.active}`}>Buy</button>
                <button className={styles.tab}>Sell</button>
              </div>
              <div className={styles.rightcardheading}>
                <p className={styles.subText}>Estimated Buying Price</p>
                <p className={styles.price}>₹1,63,373.27</p>
              </div>

              <form className={styles.rightform}>
                <p className={styles.label}>How much do you want to buy?</p>
                <Input placeholder="In Rupees" className={styles.input} />

                <div className={styles.arrow}>↓</div>

                <Input placeholder="In ETH" className={styles.input} />
                <div className={styles.balanceRow}>
                  <span>Balance: <a>₹0.00</a></span>
                  <a href="#">Add Funds</a>
                </div>
                <div className={styles.fees}>
                  You Pay <b>₹0.00</b> &nbsp; Include fees & GST ⓘ
                </div>
                <Button className={styles.buyNow}>Buy Now</Button>
              </form>
            </div>
          </div>
        </Card>

        <Card className={`${styles.featureCard} ${styles.secondCard}`}>
          <div className={styles.imageWrapper}>
            <img
              src={Tradechart}
              alt="Spot Trade Chart"
              className={styles.chartImage}
            />
            <div className={styles.overlayText}>
              <h3>Spot Trade — Power for the Pros</h3>
              <p>
                Dive deep into live order books, advanced charting, and real-time
                trades. For traders who love precision.
              </p>
            </div>
          </div>
        </Card>
        <Card className={`${styles.featureCard} ${styles.thirdCard}`}>
          <div className={styles.contentWrapper}>
            <h3>Buy Now, Pay Later</h3>
            <p>
              Buy crypto instantly and pay later in easy installments—flexible, secure,
              and designed for your convenience.
            </p>
          </div>
          <div className={styles.iconWrapper}>
            <img src={Assets.images.Dollarchart} alt="Dollar Icon" />
            <div className={styles.iconContent}>
              <ul className={styles.featuresList}>
                <li className={styles.featureItem}>
                  <img src={Assets.icons.BuyNow} alt="icon" />
                  <div className={styles.divider} />
                  <div className={styles.textBlock}>
                    <span className={styles.heading} style={{ color: '#1AC3FB' }}>Flexible Payments</span>
                    <span className={styles.subheading}>Choose how and when you pay</span>
                  </div>
                </li>
                <li className={styles.featureItem}>
                  <img src={Assets.icons.Payment} alt="icon" />
                  <div className={styles.divider} />
                  <div className={styles.textBlock}>
                    <span className={styles.heading} style={{ color: '#43DD93' }}>Secure Transactions</span>
                    <span className={styles.subheading}>Encrypted & tamper-proof</span>
                  </div>
                </li>
                <li className={styles.featureItem}>
                  <img src={Assets.icons.Security} alt="Buy Now" />
                  <div className={styles.divider} />
                  <div className={styles.textBlock}>
                    <span className={styles.heading} style={{ color: '#A6DA37' }}>Installment Options</span>
                    <span className={styles.subheading}>Split payments with ease</span>
                  </div>
                </li>
                <li className={styles.featureItem}>
                  <img src={Assets.icons.selfcustody} alt="icon" />
                  <div className={styles.divider} />
                  <div className={styles.textBlock}>
                    <span className={styles.heading} style={{ color: '#FFE711' }}>Self Custody</span>
                    <span className={styles.subheading}>Your crypto, fully under your control</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
      <div className={styles.rowCustom}>
        <Card className={`${styles.featureCard} ${styles.leftCard}`}>
          <h3>Secure Wallet — Your Crypto, Your Control</h3>
          <p>
            Manage, send, and receive your crypto assets securely. Backed by
            multi-layer encryption and self-custody options.
          </p>
          <div className={styles.chartss}>
            <div className={styles.largeChart}>
              <Progress
                type="dashboard"
                percent={75}
                format={() => (
                  <div style={{ fontSize: '18px', fontWeight: '700', color: 'var(--primary-color3)' }}>
                    <div style={{ fontSize: '14px', color: 'var(--primary-color2)', marginBottom: '8px', fontWeight: '500' }}>Balance</div>
                    ₹100,000
                  </div>
                )}
                strokeColor={{
                  '0%': '#FB774A',  
                  '25%': '#674AFF', 
                  '50%': '#02C39A', 
                  '75%': '#FFAA35'  
                }}
                strokeWidth={14}
                trailColor="#E2E8F0"
                width={160}
              />
            </div>
            <div className={styles.miniCharts}>
              {[
                { label: 'Bitcoin', value: '₹1,920', percent: 25, color: '#FFAA35' },
                { label: 'Waves', value: '₹5,000', percent: 5, color: '#4464EE' },
                { label: 'Avax', value: '₹26', percent: 50, color: '#FB774A' },
                { label: 'Bitcoin', value: '₹10,000', percent: 10, color: '#26A17B' },
              ].map((item, idx) => (
                <div className={styles.miniChartItem} key={idx}>
                  <Progress
                    type="dashboard"
                    percent={item.percent}
                    strokeColor={item.color}
                    trailColor="#E2E8F0"
                    width={70}
                    format={() => (
                      <span style={{ color: 'var(--primary-color2)' }}>
                        {item.percent}%
                      </span>
                    )}
                    strokeWidth={12}
                  />
                  <div className={styles.miniChartLabel}>
                    <div>{item.label}</div>
                    <strong>{item.value}</strong>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>


        <Card className={`${styles.featureCard} ${styles.rightCard}`}>
          <div className={styles.priceSection}>
            <div className={styles.priceRow}>
              <span><img src={Assets.icons.statcard1} alt="icon" />Bitcoin | BTC</span>
              <span>₹56,623.54</span>
              <span className={styles.positive}>
                1.41%
              </span>
              <img src={Assets.images.marketgreen} alt="graph" />
            </div>
            <div className={styles.priceRow}>
              <span><img src={Assets.icons.statcard2} alt="icon" />Ethereum | ETH</span>
              <span>₹56,623.54</span>
              <span className={styles.positive}>
                1.41%
              </span>
              <img src={Assets.images.marketgreen} alt="graph" />
            </div>
            <div className={styles.priceRow}>
              <span><img src={Assets.icons.statcard3} alt="icon" />Binance | BNB</span>
              <span>₹56,623.54</span>
              <span className={styles.positive}>
                1.41%
              </span>
              <img src={Assets.images.marketgreen} alt="graph" />
            </div>
          </div>

          <h2>Seamless Crypto Trading Experience</h2>
          <h4>Experience seamless, fast, and transparent transactions with cutting-edge security and real-time market insights.</h4>
        </Card>

      </div>
    </div>
  );
};

export default FeaturesSection;
