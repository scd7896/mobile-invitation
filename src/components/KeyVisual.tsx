import styles from "./Keyvisual.module.css";

const KeyVisual = () => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.img_wrapper}>
        <img className={styles.main_img} src="/img/kv_img_0825.png" />
        <img className={styles.mj_img} src="/img/kv_img_mj.png" />
        <img className={styles.tk_img} src="/img/kv_img_tk.png" />
      </section>
      <section className={styles.phase2_wrapper}>
        <img className={styles.phase2_img} src="/img/kv_img_phase2.png" />
        <img className={styles.heart_img} src="/img/kv_img_heart.png" />
        <img className={styles.wedding_img} src="/img/kv_img_wedding.png" />
      </section>
      <section className={styles.text}>
        <div>8월 25일 낮 12시 30분</div>
        <div>더화이트베일 1F 화이트베일 홀</div>
      </section>
    </div>
  );
};

export default KeyVisual;
