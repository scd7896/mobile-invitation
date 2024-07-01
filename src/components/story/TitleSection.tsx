import ImageLoader from "../image/ImageLoader";
import styles from "./TitleSection.module.css";

const TitleSection = () => {
  return (
    <>
      <section className={styles.wrapper}>
        <div className={styles.title}>
          둘의 이야기를 <br />
          소개합니다
        </div>
        <div className={styles.description}>
          처음 알게 되었을 땐, 서로 스쳐지나갈 <br />
          사람 1이라고 생각했었어요. <br />
          이렇게 될 거라곤 상상도 못했죠!
        </div>
      </section>
      <ImageLoader
        className={styles.title_image}
        src="/img/story_title_img.png"
      />
    </>
  );
};

export default TitleSection;
