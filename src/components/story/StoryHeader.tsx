import { useEffect, useRef } from "react";
import styles from "./StoryHeader.module.css";

const StoryHeader = () => {
  const refProgress = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollEvent = (e: Event) => {
      const body = document.body;
      const scrollHeight = body.scrollHeight;
      const scrollRealHeight = scrollHeight - window.innerHeight;
      const scrollPercent = (window.scrollY / scrollRealHeight) * 100;
      const textPercent = Math.round(scrollPercent);
      refProgress.current?.style.setProperty("width", `${textPercent}%`);
    };
    window.addEventListener("scroll", scrollEvent);

    return () => {
      window.removeEventListener("scroll", scrollEvent);
    };
  }, []);
  return (
    <header className={styles.wrapper}>
      <div className={styles.button}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            d="M19.2002 8L11.2002 16L19.2002 24"
            stroke="#111111"
            stroke-width="2"
            stroke-linecap="square"
          />
        </svg>
      </div>
      <div className={styles.progress_bar}>
        <div ref={refProgress} className={styles.progress} />
      </div>
    </header>
  );
};

export default StoryHeader;
