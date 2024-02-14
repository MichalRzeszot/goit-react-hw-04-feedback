import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div className={styles.statisticsContainer}>
    <p className={styles.statisticItem}>
      Good: <span className={styles.highlight}>{good}</span>
    </p>
    <p className={styles.statisticItem}>
      Neutral: <span className={styles.highlight}>{neutral}</span>
    </p>
    <p className={styles.statisticItem}>
      Bad: <span className={styles.highlight}>{bad}</span>
    </p>
    <p className={styles.statisticItem}>
      Total: <span className={styles.highlight}>{total}</span>
    </p>
    <p className={styles.statisticItem}>
      Positive feedback:{' '}
      <span className={styles.highlight}>{positivePercentage}%</span>
    </p>
  </div>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
