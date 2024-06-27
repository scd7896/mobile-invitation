import { ReactNode } from "react";
import styles from "./MobileLayout.module.css";

type Props = {
  children: ReactNode;
};

const MobileLayout = ({ children }: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default MobileLayout;
