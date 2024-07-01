import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <section className={styles.description}>
        <div>이 페이지는 신부 장민정과 신랑 김태경이 </div>
        <div>직접 디자인하고 개발했습니다.</div>
      </section>
      <section className={styles.copy_right}>©2024 민정♥︎태경</section>
    </footer>
  );
};

export default Footer;
