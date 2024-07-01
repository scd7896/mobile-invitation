import styles from "./Story.module.css";
import Footer from "../components/Footer";
import QuestionSection from "../components/story/QuestionSection";
import StoryHeader from "../components/story/StoryHeader";
import TitleSection from "../components/story/TitleSection";

const Story = () => {
  return (
    <div>
      <StoryHeader />
      <TitleSection />
      <section className={styles.question_wrapper}>
        <QuestionSection
          question="둘은 어떻게 알게 됐나요?"
          answers={[
            {
              talker: "태경, 민정",
              content:
                "YAPP이라는 IT 동아리에서 2019년같은 팀 디자이너, 개발자로 처음 알게 됐어요. 사실 그 당시에는 정말 안 친했어요. 6개월 동안 한 팀으로 활동 할 동안 끝까지 존댓말 쓰고 이름도 안 부를 정도였죠.",
            },
            {
              talker: "민정",
              content: "태경이가 제 이름을 모르는 줄 알았어요.",
            },
            {
              talker: "태경",
              content:
                "사실 저는 그때 ‘디자이너님’이라고 부르는 게 예의라고 생각했어요. (긁적)",
            },
          ]}
        />
        <QuestionSection
          question="그렇게 안 친했는데, 어떤 계기로 친해지게 되었나요?"
          image="/"
          answers={[
            {
              talker: "태경, 민정",
              content:
                "6개월 같은 팀으로 활동을 마치고, 다음 기수 운영진이 되면서 조금 친해졌어요.",
            },
            {
              talker: "민정",
              content:
                "특히 태경이가 디자인 작업 이것 저것 해달라고 했는데, 그때 조금 더 친해지게 된 것 같아요.",
            },
            {
              talker: "태경",
              content: "좋은 일꾼이었죠 흐흐",
            },
          ]}
        />
        <QuestionSection
          image="/"
          question="어쩌다 연인이 된 건가요?"
          answers={[
            {
              talker: "민정",
              content:
                "동아리 운영에 필요한 사이트를 만드려고 주말마다 만나서 작업을 하다 보니 많이 가까워졌어요. 사이트 만드는 것 때문에 연락을 자주 했는데, 태경이가 주말에 만나서 작업을 하자고 하더라고요. 사실 처음엔 별 생각 없이 ‘주말에 집에서 뒹구는 것 보단 작업하는 게 낫겠지’ 하고 나갔었죠.",
            },
            {
              talker: "태경",
              content:
                "사실 저는 동아리 때문에 연락을 자주하게되면서부터 점점 마음이 생기기 시작했어요. 그래서 만나서 작업하자고 했는데 딱히 거절을 안 하더라고요? 그래서 몇번 만나서 작업을 했죠. 그러던 어느 날, 작업 끝나고 민정이가 같이 산책을 하자고 하더라고요. ",
            },
          ]}
        />
        <QuestionSection
          image="/img/img_4year.png"
          question="결혼의 다짐을 말씀해주세요"
          answers={[
            {
              talker: "민정",
              content:
                "결혼의 다짐을 작성할게요. 결혼의 다짐을 작성할게요. 결혼의 다짐을 작성할게요. 결혼의 다짐을 작성할게요.",
            },
            {
              talker: "태경",
              content:
                "결혼의 다짐을 작성할게요. 결혼의 다짐을 작성할게요. 결혼의 다짐을 작성할게요. 결혼의 다짐을 작성할게요.",
            },
          ]}
        />
      </section>
      <Footer />
    </div>
  );
};

export default Story;
