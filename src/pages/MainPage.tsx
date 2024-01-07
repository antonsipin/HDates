import {
  Group3048,
  Group2347,
  Group2345,
  Group2329,
  Group2346,
  Group28422798,
  Vector17,
  Vector2,
  Ellipse335,
  MaskGroup,
  TextHDates,
  Text6,
  Text2015_2022,
  Text1992_1997,
  TextScience,
} from "../components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./MainPage.module.scss";
import { EffectFade, Navigation, Pagination } from "swiper/modules";

export const MainPage = () => {
  return (
    <>
      <MaskGroup />
      <Group3048 />
      <Group2347 />
      <Group2329 />
      <Group2346 />
      <Group28422798 />
      <Vector17 />
      <Vector2 />
      <Ellipse335 />
      <Text6 />
      <TextHDates />
      <Swiper
        spaceBetween={50}
        effect={"fade"}
        navigation={false}
        pagination={{
          clickable: true,
          // renderBullet: function (index, className) {
          //   return '<span class="' + className + '">' + "</span>";
          // },
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className={styles.Layout}
      >
        <SwiperSlide>
          <Text2015_2022 />
        </SwiperSlide>
        <SwiperSlide>
          <Text1992_1997 />
        </SwiperSlide>
      </Swiper>
      <Group2345 />
      <TextScience />
    </>
  );
};
