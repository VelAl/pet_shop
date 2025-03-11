import styles from "./styles.module.css";

export const News = ({ news, setNews, setVisible }) => {
  const close = () => {
    setNews([]);
    setVisible(false);
  };

  return (
    <div className={styles.overlay} onClick={close}>
      <div
        className={styles.newsTape}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className={styles.newsTapeHeader}>
          returned pets:
          <button onClick={close}>X</button>
        </div>
        {news.map((pet, i) => (
          <div key={i} className={styles.onePetReturned}>
            {pet.pet.__typename}:{" "}
            <span className={styles.petName}>{pet.pet.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
