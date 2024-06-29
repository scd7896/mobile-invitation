import ImageCarousel from "./ImageCarousel";
import styles from "./PictureViewSection.module.css";
import ArrowIcon from "./icon/ArrowIcon";

const PictureViewSection = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.title}>사진 구경하기</div>
      <section style={{ padding: "0 40px" }}>
        <ImageCarousel />
      </section>
      <div className={styles.button}>
        사진 전체보기 <ArrowIcon />
      </div>
    </section>
  );
};

export default PictureViewSection;
