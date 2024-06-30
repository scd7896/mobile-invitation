import { useEffect, useRef } from "react";

interface IProps extends React.HTMLAttributes<HTMLImageElement> {
  src: string;
}

const ImageLoader = (props: IProps) => {
  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const lazyImage = ref.current;
    const lazyImageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          lazyImage.src = lazyImage.dataset.src as string;
          lazyImage.onload = () => {
            lazyImage.classList.remove("lazy");
            // Stop observing the current image
            lazyImageObserver.unobserve(lazyImage);
          };
        }
      });
    });

    lazyImageObserver.observe(lazyImage);
  }, []);

  return <img {...props} data-src={props.src} src={undefined} ref={ref} />;
};

export default ImageLoader;
