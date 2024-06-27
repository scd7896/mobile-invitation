import styles from "./Main.module.css";
import InvitationText from "../components/InvitationText";
import KeyVisual from "../components/KeyVisual";
import Video from "../components/Video";
import ImageSlider from "../components/ImageSlider";
import Location from "../components/Location";
import TransportList from "../components/TransportList";

const Main = () => {
  return (
    <div className={styles.wrapper}>
      <KeyVisual />
      <Video />
      <InvitationText />
      <ImageSlider />
      <Location />
      <TransportList />
    </div>
  );
};

export default Main;
