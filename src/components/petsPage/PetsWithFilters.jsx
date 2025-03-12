import { SearchOutlined } from "@ant-design/icons";
import React, { useMemo, useState } from "react";
import Select from "react-select";
import { filterFunc, typesSet, weightFilter } from "./filtringParams";
import Pet from "./Pet";
import styles from "./styles.module.css";

export const PetsWhithFilters = ({ pets }) => {
  const [filter, setFilter] = useState({
    types: null,
    weight: null,
  });

  const [filtredPets, setFiltredPets] = useState(pets);
  const typesFilter = useMemo(() => typesSet(pets), [pets]);

  return (
    <>
      <div className={styles.selectionsHolder}>
        <Select
          className={styles.flexItem}
          placeholder={"type..."}
          isClearable={true}
          defaultValue={filter.types}
          onChange={(e) =>
            e
              ? setFilter({ ...filter, types: e.value })
              : setFilter({ ...filter, types: null })
          }
          options={typesFilter}
        />

        <Select
          className={styles.flexItem}
          placeholder={"weight..."}
          isClearable={true}
          defaultValue={filter.weight}
          options={weightFilter}
          onChange={(e) =>
            e
              ? setFilter({ ...filter, weight: e.value })
              : setFilter({ ...filter, weight: null })
          }
        />
        <div
          className={styles.startFilteringBtn}
          onClick={() => setFiltredPets(filterFunc(pets, filter))}
        >
          <SearchOutlined />
        </div>
      </div>
      
      <div className={styles.cardsHolder}>
        {filtredPets.map((pet) => (
          <Pet key={pet.id} pet={pet} />
        ))}
      </div>
    </>
  );
};
