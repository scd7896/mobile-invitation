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
      <section className={styles.map_button_wrapper}>
        <div className={styles.tmap}>
          <img className={styles.icon} src="/img/tmap_icon.png" />
          티맵
        </div>
        <div className={styles.bar} />
        <div className={styles.naver}>
          <img className={styles.icon} src="/img/naver_icon.png" />
          네이버지도
        </div>
        <div className={styles.bar} />
        <div className={styles.kakao}>
          <img className={styles.icon} src="/img/kakao_icon.png" />
          카카오맵
        </div>
      </section>
    </div>
  );
};

export default Location;
