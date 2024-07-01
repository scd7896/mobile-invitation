import styles from "./ToStroyBanner.module.css";
import ArrowIcon from "./icon/ArrowIcon";
const ToStoryBanner = () => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.title}>
        <div>사실 저희는...</div>
        <div>하나도 안 친했어요</div>
      </section>
      <section className={styles.content}>
        <div className={styles.image_wrapper}>
          <img className={styles.image} src="" />
        </div>
        <div className={styles.description}>
          그랬는데 둘이 어떻게 결혼까지 하게 된 걸까요? 둘의 이야기가 궁금하다면
          확인해보세요!
        </div>
        <div className={styles.link}>
          둘의 이야기 보기
          <ArrowIcon />
        </div>
      </section>
    </div>
  );
};

export default ToStoryBanner;
