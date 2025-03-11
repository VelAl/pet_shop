import { useQuery } from "@apollo/client";
import styles from "./styles.module.css";
import { GET_AMOUNTS } from "../../client/queries";

export const Counter = () => {
  const { loading, error, data } = useQuery(GET_AMOUNTS);

  return loading ? (
    <div>loading...</div>
  ) : error ? (
    <div>{error.message}</div>
  ) : (
    <div className={styles.wrapper}>
      <div>Total amount of pets: {data.totalPets}</div>
      <div>Available pets: {data.availablePets}</div>
      <div>Checked out pets: {data.checkedOutPets}</div>
    </div>
  );
};
