'use client';

import styles from './Header.module.css';
import { signOut } from 'next-auth/react';

const Header = () => {
  return (
    <div className={styles.header}>
      <button
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
