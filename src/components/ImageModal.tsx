import { ReactNode, useCallback, useMemo, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import Slider from "react-slick";
import { imageList } from "../constant/imageList";
import styles from "./ImageModal.module.css";
import CloseIcon from "./icon/CloseIcon";
import ButtonArrowIcon from "./icon/ButtonArrowIcon";
import ImageLoader from "./image/ImageLoader";

type Props = {
  onClose: () => void;
  defaultIndex: number;
};

const ImageModal = ({ onClose, defaultIndex }: Props) => {
  const sliderRef = useRef<Slider>(null);

  return (
    <div className={styles.wrapper}>
      <section className={styles.header}>
        <section className={styles.close} onClick={onClose}>
          <CloseIcon />
        </section>
      </section>
      <section className={styles.body}>
        <Slider
          className={styles.slider}
          arrows={false}
          ref={sliderRef}
          initialSlide={defaultIndex}
        >
          {imageList.map((it) => (
            <div key={it} className={styles.image_wrapper}>
              <ImageLoader className={styles.image} src={it} />
            </div>
          ))}
        </Slider>
      </section>
      <section className={styles.footer}>
        <div
          className={styles.button}
          onClick={() => {
            sliderRef.current?.slickPrev();
          }}
        >
          <ButtonArrowIcon />
        </div>
        <div
          className={`${styles.button} ${styles.next}`}
          onClick={() => {
            sliderRef.current?.slickNext();
          }}
        >
          <ButtonArrowIcon />
        </div>
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
  console.log(index);
  root = createReactRoot(
    <ImageModal defaultIndex={index} onClose={() => root?.()} />
  );
};

const imageModal = {
  show: showImage,
};

export default imageModal;
