import styles from "./TransportList.module.css";

const TransportList = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <section className={styles.section}>
          <div className={styles.title}>
            <section className={styles.gnb}></section>
            지하철
          </div>
          3호선 남부터미널역 4번출구 200m <br />
          도보 2분 거리내
        </section>
        <section className={styles.section}>
          <div className={styles.title}>
            <section className={styles.gnb}></section>
            버스
          </div>
          지선버스 4319, 간선버스 461, 641, <br />
          직행ㆍ공항버스 5300-1, 8501
        </section>
        <section className={styles.section}>
          <div className={styles.title}>
            <section className={styles.gnb}></section>
            주차
          </div>
          맞은편 전용 주차장 이용 <br />
          (주소 : 서초구 서초중앙로 2길 10)
        </section>
      </div>
    </div>
  );
};

export default TransportList;
