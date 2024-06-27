import styles from "./Location.module.css";
import LocationMap from "./LcoationMap";

const Location = () => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.text_wrapper}>
        <div className={styles.title}>오시는 길</div>
        <div className={styles.address}>더화이트베일 1층 화이트베일 홀</div>
        <div className={styles.address}>서울 서초구 서초중앙로 14</div>
      </section>
      <LocationMap />
    </div>
  );
};

export default Location;
