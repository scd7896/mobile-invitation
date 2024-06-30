import { useCallback, useMemo, useState } from "react";
import { imageList } from "../constant/imageList";
import styles from "./ImageCarousel.module.css";
import ArrowIcon from "./icon/ArrowIcon";
import imageModal from "./ImageModal";

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

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

  const showImageList = useMemo(() => {
    const prevIndex = getPrevIndex(currentIndex);
    const waitPrevIndex = getPrevIndex(prevIndex);
    const nextIndex = getNextIndex(currentIndex);
    const waitNextIndex = getNextIndex(nextIndex);

    return [waitPrevIndex, prevIndex, currentIndex, nextIndex, waitNextIndex];
  }, [currentIndex, getPrevIndex, getNextIndex]);

  const handleClickImage = useCallback(
    (targetIndex: number) => {
      if (targetIndex === currentIndex) {
        imageModal.show(currentIndex);
      } else {
        setCurrentIndex(targetIndex);
      }
    },
    [currentIndex]
  );

  return (
    <>
      <section className={styles.container}>
        <div className={styles.wrapper}>
          {showImageList.map((index) => (
            <section
              key={imageList[index]}
              onClick={() => handleClickImage(index)}
              className={styles.image}
            >
              <img src={imageList[index]} width="100%" />
              {index === currentIndex && (
                <div className={styles.progress}>
                  <div
                    className={styles.progress_fill}
                    onAnimationEnd={(e) => {
                      setCurrentIndex((prev) => getNextIndex(prev));
                    }}
                  />
                </div>
              )}
            </section>
          ))}
        </div>
      </section>
      <div
        className={styles.button}
        onClick={() => imageModal.show(currentIndex)}
      >
        사진 전체보기 <ArrowIcon />
      </div>
    </>
  );
};

export default ImageCarousel;
