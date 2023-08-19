'use client';

import { signOut } from 'next-auth/react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <button
        className={styles['logout-btn']}
        onClick={() => {
          signOut();
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Header;
