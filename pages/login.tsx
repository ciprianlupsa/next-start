import React from "react";
import jwt from "jsonwebtoken";

import styles from "./index.module.scss";

function Heading({ heading }) {
  return <h1 className={styles.red}>{heading}</h1>;
}

export default function Home() {
  const [username, setUsername] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [message, setMessage] = React.useState<string>(
    "You are not logged in."
  );

  async function submitForm($e) {
    console.log(username, password);
    $e.preventDefault();
    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((res) => res.json());

    const token = res.token;

    console.log(token);
    if (token) {
      const json = jwt.decode(token) as { [key: string]: string };
      console.log(json);
      setMessage(
        `Welcome ${json.username} and you are a ${
          json.admin ? "an admin" : "not an admin"
        }!`
      );
    } else setMessage("Something went wrong!");
  }

  return (
    <div>
      <h1>{message}</h1>

      <form onSubmit={submitForm}>
        <input
          onChange={($e) => {
            setUsername($e.target.value);
          }}
          type="text"
          name="username"
          value={username}
        />
        <br />
        <input
          onChange={($e) => {
            setPassword($e.target.value);
          }}
          type="password"
          name="password"
          value={password}
        />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}
