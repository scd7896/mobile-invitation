import styles from "./ImageSlider.module.css";

const ImageSlider = () => {
  return (
    <div className={styles.wrapper}>
      <Images />
      <Images />
    </div>
  );
};

const Images = () => {
  return (
    <div className={`${styles.image_list} ${styles.animation}`}>
      <img
        className={`${styles.img} ${styles.img_ver}`}
        src="/img/slider_1.png"
      />
      <img
        className={`${styles.img} ${styles.img_row}`}
        src="/img/slider_2.png"
      />
      <img
        className={`${styles.img} ${styles.img_ver}`}
        src="/img/slider_3.png"
      />
      <img
        className={`${styles.img} ${styles.img_row}`}
        src="/img/slider_4.png"
      />
      <img
        className={`${styles.img} ${styles.img_ver}`}
        src="/img/slider_5.png"
      />
      <img
        className={`${styles.img} ${styles.img_row}`}
        src="/img/slider_6.png"
      />
    </div>
  );
};

export default ImageSlider;
