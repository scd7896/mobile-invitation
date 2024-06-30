import ImageCarousel from "./ImageCarousel";
import styles from "./PictureViewSection.module.css";
import ArrowIcon from "./icon/ArrowIcon";

const PictureViewSection = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.title}>사진 구경하기</div>

      <ImageCarousel />
    </section>
  );
};

export default PictureViewSection;
