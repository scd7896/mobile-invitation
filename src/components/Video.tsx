import styles from "./Video.module.css";

const Video = () => {
  return (
    <section className={styles.video_wrapper}>
      <video
        className={styles.video}
        src="/img/main_video.mp4"
        autoPlay
        muted
        loop
        playsInline
      ></video>
      <div className={styles.deam} />
    </section>
  );
};

export default Video;
