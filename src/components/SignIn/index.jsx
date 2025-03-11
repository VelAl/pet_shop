import { LoadingOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { useSignIn } from "./useSignIn";
import { validation_and_gqlMutation } from "./validation_and_gqlMutation";
import { useInput } from "../../functions/useInput";

export const SignInPage = () => {
  const username = useInput();
  const password = useInput();
  const [worning, setWorning] = useState({ username: "", password: "" });
  const { signIn, loading, error } = useSignIn();

  const submitHandle = (e) => {
    e.preventDefault();
    validation_and_gqlMutation(
      username.value,
      password.value,
      setWorning,
      signIn
    );
  };

  return (
    <div className={styles.wrapper}>
      {loading && (
        <div>
          <LoadingOutlined />
        </div>
      )}
      {error && <div className={styles.worning}>{error.message}</div>}

      <form onSubmit={submitHandle}>
        <div className={styles.inputHolder}>
          <input type="text" placeholder="username" {...username} />
          <div className={styles.worning}>{worning.username}</div>
        </div>

        <div>
          <input type="password" placeholder="password" {...password} />
          <div className={styles.worning}>{worning.password}</div>
        </div>

        <button>Submit</button>
      </form>
      <Link to="/SignUp">SignUp</Link>
    </div>
  );
};
