import { LoadingOutlined } from "@ant-design/icons";
import styles from "./styles.module.css";

export const Spiner = () => (
  <div className={styles.spiner}>
    <LoadingOutlined />
  </div>
);
