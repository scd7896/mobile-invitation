import styles from "./BankAccount.module.css";
import bankSheet from "./bottomSheet/BankBottomSheet";
import ArrowIcon from "./icon/ArrowIcon";
import ImageLoader from "./image/ImageLoader";

const BankAccount = () => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.title}>마음 전하실 곳</section>
      <section className={styles.content}>
        <div
          className={styles.profile_wrapper}
          onClick={() => bankSheet.open(true)}
        >
          <section className={styles.left_wrapper}>
            <ImageLoader
              className={styles.profile_img}
              src="/img/mj_profile.png"
            />
            <span className={styles.side_title}>신부측</span>
          </section>
          <section className={styles.right_wrapper}>
            <span className={styles.account_text}>계좌 보기</span>
            <ArrowIcon />
          </section>
        </div>
        <div
          className={styles.profile_wrapper}
          onClick={() => bankSheet.open(false)}
        >
          <section className={styles.left_wrapper}>
            <ImageLoader
              className={styles.profile_img}
              src="/img/tk_profile.png"
            />
            <span className={styles.side_title}>신랑측</span>
          </section>
          <section className={styles.right_wrapper}>
            <span className={styles.account_text}>계좌 보기</span>
            <ArrowIcon />
          </section>
        </div>
      </section>
    </div>
  );
};

export default BankAccount;
