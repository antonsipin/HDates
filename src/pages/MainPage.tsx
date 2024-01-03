import {
  Group3048,
  Group2347,
  Group2345,
  Group2329,
  Group2346,
  Vector17,
  MaskGroup,
  TextHDates,
  Text2015_2022,
  TextScience,
} from "../components";
import styles from "./MainPage.module.scss";

export const MainPage = () => {
  return (
    <>
      <MaskGroup />
      <Group3048 />
      <Group2347 />
      <Group2329 />
      <Group2346 />
      <Vector17 />
      <TextHDates />
      <Text2015_2022 />
      <Group2345 />
      <TextScience />
    </>
  );
};
