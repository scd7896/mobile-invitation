import { ReactNode, useCallback, useState } from "react";
import { createRoot } from "react-dom/client";
import { imageList } from "../constant/imageList";
import styles from "./ImageModal.module.css";
import CloseIcon from "./icon/CloseIcon";

type Props = {
  onClose: () => void;
  defaultIndex: number;
};

const ImageModal = ({ onClose, defaultIndex }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(defaultIndex);
  const getPrevIndex = useCallback((index: number) => {
    if (index - 1 < 0) {
      return imageList.length - 1;
    }
    return index - 1;
  }, []);

  const getNextIndex = useCallback((index: number) => {
    if (index + 1 >= imageList.length) {
      return 0;
    }

    return index + 1;
  }, []);

  return (
    <div className={styles.wrapper}>
      <section className={styles.close} onClick={onClose}>
        <CloseIcon />
      </section>
    </div>
  );
};

const createReactRoot = (children: ReactNode) => {
  const div = document.createElement("div");
  document.body.appendChild(div);
  const root = createRoot(div);
  root.render(children);
  document.body.style.overflow = "hidden";
  document.body.style.height = "100%";

  return () => {
    root.unmount();
    div.remove();
    document.body.style.overflow = "auto";
  };
};

const showImage = (index: number) => {
  let root: Function;
  root = createReactRoot(
    <ImageModal defaultIndex={index} onClose={() => root?.()} />
  );
};

const imageModal = {
  show: showImage,
};

export default imageModal;
