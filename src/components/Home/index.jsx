import styles from "./styles.module.css";

export const Home = () => (
  <div className={styles.wrapper}>
    <div className={styles.textHolder}>
      <p>This is app allows you to see all pets of our shop.</p>
      <p>
        There are different types of pets such as cats, dogs, rabbits and
        stingrays. If you are a registered user, you can check pets out.
      </p>
    </div>
  </div>
);
