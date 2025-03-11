import { useMutation } from "@apollo/client";
import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { signUpValidation } from "./signUpValidation";
import styles from "./styles.module.css";
import { SIGN_UP } from "../../client/mutations";
import { useSignIn } from "../SignIn/useSignIn";
import { Spiner } from "../Spiner";

const fields = ["name", "username", "password"];

export const SignUpPage = () => {
  const { signIn } = useSignIn();

  const [signUp, { data, loading, error }] = useMutation(SIGN_UP, {
    errorPolicy: "all",
  });

  const [newUserData, setNewUserData] = useState({
    name: { value: "", err: "" },
    username: { value: "", err: "" },
    password: { value: "", err: "" },
  });

  useEffect(() => {
    if (data && data.createAccount) {
      signIn({
        variables: {
          username: newUserData.username.value,
          password: newUserData.password.value,
        },
      });
    }
  }, [data]);

  const onSubmit = () => {
    const values = {
      name: newUserData.name.value,
      username: newUserData.username.value,
      password: newUserData.password.value,
    };

    const isErr = signUpValidation(values);

    if (isErr) {
      const [field, message] = isErr;
      setNewUserData({
        ...newUserData,
        [field]: { ...newUserData[field], err: message },
      });
      return;
    }
    signUp({ variables: { input: values } });
  };

  return (
    <div className={styles.wrapper}>
      <form>
        <div className={styles.errorWrapper}>
          {error && error.message}
          {loading && <Spiner />}
        </div>

        {fields.map((field) => (
          <TextField
            type={field === "password" ? "password" : "text"}
            error={!!newUserData[field].err}
            key={field}
            className={styles.input}
            label={field}
            variant="outlined"
            helperText={newUserData[field].err}
            value={newUserData[field].value}
            onChange={(e) =>
              setNewUserData({
                ...newUserData,
                [field]: { value: e.currentTarget.value, err: "" },
              })
            }
          />
        ))}

        <Button variant="outlined" onClick={onSubmit}>
          Submit
        </Button>
      </form>
    </div>
  );
};
