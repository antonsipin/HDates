import styles from "./Group2346.module.scss";
import { Text } from "./Text/Text";
import { Text2017 } from "./Text2017/Text2017";

export const Group2346 = () => {
  return (
    <span className={styles.Layout}>
      <Text2017 />
      <Text />
    </span>
  );
};
