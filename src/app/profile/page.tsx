import Header from '../../components/UI/Header/Header';
import styles from './page.module.css';
import ProfileData from '@/components/UI/ProfileData/ProfileData';
import CardDetails from '@/components/CardDetails/CardDetails';

export default function Profile() {
  return (
    <main>
      <Header />
      <div className={styles['profile-section']}>
        <ProfileData />
        <CardDetails />
      </div>
    </main>
  );
}
