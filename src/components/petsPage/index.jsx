import { useQuery } from "@apollo/client";
import React from "react";
import styles from "./styles.module.css";
import { GET_ALL_PETS } from "../../client/queries";
import { Spiner } from "../Spiner";
import { PetsWhithFilters } from "./PetsWithFilters";

export const AllPetsPage = () => {
  const { loading, error, data } = useQuery(GET_ALL_PETS);

  return (
    <div className={styles.wrapper}>
      {loading ? (
        <Spiner />
      ) : error ? (
        <div>{error.message}</div>
      ) : (
        <PetsWhithFilters pets={data.allPets} />
      )}
    </div>
  );
};
