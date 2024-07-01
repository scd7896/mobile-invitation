import styles from "./ThankyouForWatch.module.css";

const ThankyouForWatch = () => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.content}>
        <div className={styles.title}>
          저희 이야기를
          <br />
          읽어 주셔서 감사합니다
        </div>
        <div className={styles.message}>
          응원하고 격려해주신 분들께 감사드리며,
          <br /> 행복하게 잘 살겠습니다.
        </div>
      </section>
    </div>
  );
};

export default ThankyouForWatch;
