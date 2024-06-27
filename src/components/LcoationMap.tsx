import { useEffect, useRef } from "react";
import style from "./LocationMap.module.css";

const LocationMap = () => {
  const refDiv = useRef<HTMLDivElement>(null);
  const refRender = useRef(false);

  useEffect(() => {
    if (refDiv.current && !refRender.current) {
      var map = new window.Tmapv3.Map(refDiv.current, {
        center: new window.Tmapv3.LatLng(
          37.483592444992816,
          127.01786425199678
        ), // 지도 초기 좌표
        zoom: 16,
      });

      refRender.current = true;
    }
  }, []);

  return <section className={style.wrapper} ref={refDiv}></section>;
};

export default LocationMap;
