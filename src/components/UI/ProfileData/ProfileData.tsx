'use client';

import styles from './ProfileData.module.css';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import Image from 'next/image';

type UserData = {
  email?: string;
  name?: string;
  image?: string;
};
const ProfileData = () => {
  const { data } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/');
    },
  });
  const userData: UserData = {
    name: data?.user?.name ?? '',
    email: data?.user?.email ?? '',
    image:
      data?.user?.image ??
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png',
  };

  return (
    <div className={styles.card}>
      <div className={styles['user__avatar']}>
        {/* <img src={userData.image} alt={userData.name} /> */}
        <Image
          src={userData.image || ''}
          height={100}
          width={100}
          alt={userData.name || ''}
          quality={100}
        />
      </div>
      <div className={styles['user__name']}>{userData.name}</div>
      <div className={styles['user__email']}>{userData.email}</div>
    </div>
  );
};

export default ProfileData;
