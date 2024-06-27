import styles from "./Keyvisual.module.css";

const KeyVisual = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.img_wrapper}>
        <img className={styles.main_img} src="/img/kv_img_0825.png" />
        <img className={styles.mj_img} src="/img/kv_img_mj.png" />
        <img className={styles.tk_img} src="/img/kv_img_tk.png" />
      </div>
      <div className={styles.phase2_wrapper}>
        <img className={styles.phase2_img} src="/img/kv_img_phase2.png" />
        <img className={styles.heart_img} src="/img/kv_img_heart.png" />
        <img className={styles.wedding_img} src="/img/kv_img_wedding.png" />
      </div>
    </div>
  );
};

export default KeyVisual;
