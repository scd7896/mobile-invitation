import styles from "./Main.module.css";
import InvitationText from "../components/InvitationText";
import KeyVisual from "../components/KeyVisual";
import LocationMap from "../components/LcoationMap";
import Video from "../components/Video";

const Main = () => {
  return (
    <div className={styles.wrapper}>
      <KeyVisual />
      <Video />
      <InvitationText />
      <LocationMap />
    </div>
  );
};

export default Main;
