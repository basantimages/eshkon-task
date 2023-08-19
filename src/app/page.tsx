'use client';

import { signIn, useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import styles from './page.module.css';
import Image from 'next/image';

export default function Home() {
  const { status } = useSession();

  if (status === 'authenticated') {
    redirect('/profile');
  }

  return (
    <main>
      <section className={styles['auth-section']}>
        <h1>Continue with google</h1>
        <div
          className={styles['google-btn']}
          onClick={() => {
            signIn('google');
          }}
        >
          <div className={styles['google-icon-wrapper']}>
            {/* <img
              className={styles['google-icon']}
              src='https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg'
            /> */}
            <Image
              src={'https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg'}
              height={30}
              width={30}
              alt={'Google'}
              quality={100}
              className={styles['google-icon']}
            />
          </div>
          <p className={styles['btn-text']}>
            <b>Sign in with google</b>
          </p>
        </div>
      </section>
    </main>
  );
}
