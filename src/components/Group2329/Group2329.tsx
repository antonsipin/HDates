import { Text } from "./Text/Text";
import { Text2016 } from "./Text2016/Text2016";
import styles from "./Group2329.module.scss";

export const Group2329 = () => {
  return (
    <span className={styles.Layout}>
      <Text2016 />
      <Text />
    </span>
  );
};
