import styles from "./Vector2.module.scss";

export const Vector2 = () => {
  return (
    <svg
      className={styles.Layout}
      xmlns="http://www.w3.org/2000/svg"
      width="8"
      height="12"
      viewBox="0 0 8 12"
      fill="none"
    >
      <path d="M1 1L6 6L1 11" stroke="#3877EE" stroke-width="2" />
    </svg>
  );
};