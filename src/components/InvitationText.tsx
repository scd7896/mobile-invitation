import styles from "./InvitationText.module.css";

const InvitationText = () => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.title}>
        <div>장민정 김태경</div>
        <div>둘의 새로운 시작에</div>
        <div>초대합니다︎</div>
      </section>
      <div className={styles.text_wrapper}>
        <section className={styles.text}>
          항상 베풀어주신 사랑과 관심에 감사드리며, 한 쌍의 젊음이 사랑과
          믿음으로 인생의 반려자가 되려고 합니다. 이제 시작하는 새 인생의
          첫걸음에 가까이하시어 축복해 주시면  감사하겠습니다.
        </section>
        <section className={styles.from_we}>장민정 김태경 드림</section>
      </div>
    </div>
  );
};

export default InvitationText;
