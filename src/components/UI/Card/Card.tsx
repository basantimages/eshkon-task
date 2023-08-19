import styles from './Card.module.css';
import Image from 'next/image';

const Card = (props: any) => {
  return (
    <div className={styles['card']}>
      <div className={styles['card-image']}>
        <Image
          src={props.image}
          width={200}
          height={200}
          quality={100}
          alt={props.title}
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
      <div className={styles['card-description']}>
        <p className={styles['text-title']}>{props.title}</p>
        <p className={styles['text-body']}>{props.desc}</p>
      </div>
    </div>
  );
};

export default Card;
