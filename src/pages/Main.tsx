import styles from "./Main.module.css";
import InvitationText from "../components/InvitationText";
import KeyVisual from "../components/KeyVisual";
import LocationMap from "../components/LcoationMap";
import Video from "../components/Video";
import ImageSlider from "../components/ImageSlider";

const Main = () => {
  return (
    <div className={styles.wrapper}>
      <KeyVisual />
      <Video />
      <InvitationText />
      <ImageSlider />
      <LocationMap />
    </div>
  );
};

export default Main;
