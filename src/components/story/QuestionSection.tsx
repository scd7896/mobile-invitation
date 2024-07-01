import styles from "./QuestionSection.module.css";

type Answer = {
  talker: string;
  content: string;
};

type Props = {
  question: string;
  answers: Answer[];
  image?: string;
};

const QuestionSection = ({ question, answers, image }: Props) => {
  return (
    <div className={styles.wrapper}>
      {image && (
        <section className={styles.image_wrapper}>
          <img className={styles.img} src={image} />
        </section>
      )}
      <section className={styles.question}>{question}</section>
      {answers.map((it) => (
        <section className={styles.answer}>
          <div className={styles.talker}>{it.talker}</div>
          <div className={styles.content}>{it.content}</div>
        </section>
      ))}
    </div>
  );
};

export default QuestionSection;
