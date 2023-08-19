import getEntries from '@/utils/utils';
import styles from './CardDetails.module.css';
import Card from '../UI/Card/Card';

const CardDetails = async () => {
  const details = await getEntries();

  return (
    <div className={styles['card-details']}>
      {details?.map((item: any) => {
        const { key, title, desc, image } = item.fields;
        const url =
          'https:' + image?.fields?.file?.url ??
          '//images.unsplash.com/photo-1618588507085-c79565432917?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwbmF0dXJlfGVufDB8fDB8fHww&w=1000&q=80';
        return <Card key={key} title={title} desc={desc} image={url} />;
      })}
    </div>
  );
};

export default CardDetails;
