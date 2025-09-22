import React, { useState } from 'react';
import { Table, Input, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import styles from './MarketData.module.scss';
import { Assets } from '../../../assets/index';
import { useTheme } from '../../../context/ThemeContext';

interface CryptoData {
  rank: number;
  name: string;
  symbol: string;
  price: string;
  change: number;
  marketCap: string;
}

const MarketData: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const { theme } = useTheme();

  const data: CryptoData[] = [
    {
      rank: 1,
      name: 'Bitcoin | BTC',
      symbol: Assets.icons.statcard1,
      price: '$56,623.54',
      change: 1.41,
      marketCap: Assets.images.marketgreen,
    },
    {
      rank: 2,
      name: 'Ethereum | ETH',
      symbol: Assets.icons.statcard2,
      price: '$4,267.90',
      change: 2.22,
      marketCap: Assets.images.marketgreen,
    },
    {
      rank: 3,
      name: 'Binance | BNB',
      symbol: Assets.icons.statcard3,
      price: '₹$587.74',
      change: -0.82,
      marketCap: Assets.images.marketgreen,
    },
    {
      rank: 4,
      name: 'Tether | USDT',
      symbol: Assets.icons.statcard5,
      price: '$0.9998',
      change: -0.03,
      marketCap: Assets.images.marketgreen,
    },
    {
      rank: 5,
      name: 'Solana | SOL',
      symbol: Assets.icons.statcard6,
      price: '$213.67',
      change: -0.53,
      marketCap: Assets.images.marketred,
    },
    {
      rank: 6,
      name: 'XRP | XRP',
      symbol: Assets.icons.statcard7,
      price: '$1.04',
      change: -0.44,
      marketCap: Assets.images.marketred,
    },
  ];

  const columns: ColumnsType<CryptoData> = [
    {
      title: 'NO',
      dataIndex: 'rank',
      key: 'rank',
      width: 70,
    },
    {
      title: 'NAME',
      key: 'name',
      render: (_, record) => (
        <div className={styles.cryptoName}>
          <img src={record.symbol} alt="icon" />
          <h4>{record.name}</h4>
        </div>
      ),
    },
    {
      title: 'LAST PRICE',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'CHANGE',
      key: 'change',
      render: (_, record) => (
        <span
          className={`${styles.priceChange} ${record.change > 0 ? styles.positive : styles.negative
            }`}
        >
          {record.change > 0 ? '+' : ''}
          {record.change}%
        </span>
      ),
    },
    {
      title: 'MARKET STATS',
      key: 'marketCap',
      render: (_, record) => (
        <div className={styles.sparkline}>
          <img src={record.marketCap} alt="chart" />
        </div>
      ),
    },
    {
      title: 'TRADE',
      key: 'trade',
      render: () => (
        <Button className={styles.tradeBtn}>{theme === "dark" ? "Trade" : "Explore"}</Button>
      ),
    },
  ];

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <section className={styles.marketData} id="markets">
      <div className={styles.sectionTitle}>
        <h2>Market Update</h2>
        <p>Cryptocurrency Categories</p>
        <div className={styles.subheading}>

          <div className={styles.actionsLeft}>
            {theme === "dark" && (
              <>
                <Button className={`${styles.filterBtn} ${styles.allBtn}`}>All</Button>
                <Button className={styles.filterBtn}>Gainer</Button>
                <Button className={styles.filterBtn}>Looser</Button>
                <Button className={styles.filterBtn}>New Listing</Button>
              </>
            )}
          </div>

          <Input
            placeholder="Search Coin"
            prefix={<SearchOutlined />}
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className={styles.searchInput}
          />

        </div>

      </div>

      <div className={styles.tableContainer}>
        <Table
          columns={columns}
          dataSource={filteredData}
          pagination={false}
          rowKey="rank"
          scroll={{ x: 800 }}
        />

      </div>
      <div className={styles.seeAllCoins}>See All Coins</div>
    </section>
  );
};

export default MarketData;