import styles from "./loading.module.css";

const Loading = () => {
  return (
    <div className={styles.lds_llipsis}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
export default Loading;
