import styles from "./Video.module.css";

const Video = () => {
  return (
    <section className={styles.video_wrapper}>
      <video className={styles.video} autoPlay muted loop>
        <source src="/img/main_video.mp4" type="video/mp4"></source>
      </video>
      <div className={styles.deam} />
    </section>
  );
};

export default Video;
