import styles from "./styles.module.css";

export const Drawing = ({
  pet: { name, __typename, weight, photo, id, ...rest },
}) => {
  const additional = Object.entries(rest);

  return (
    <div className={styles.card}>
      <div className={styles.image_and_mainInfo}>
        <div className={styles.info}>
          <div className={styles.pet_type}>{__typename}</div>
          <div className={styles.name}>
            <b>name:</b> {name}
          </div>
          <div>
            <b>weight:</b> {weight} lb
          </div>
        </div>
        <img src={photo.full} alt="" />
      </div>
      <div className={styles.line}></div>

      <div className={styles.additional_wrapper}>
        <div>
          <b>additional params:</b>
        </div>
        {additional.map((param, i) => (
          <div key={i}>
            {param[0]} :
            {typeof param[1] != "boolean" ? param[1] : param[1] ? "yes" : "no"}
          </div>
        ))}
      </div>
    </div>
  );
};
