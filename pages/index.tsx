import styles from "./index.module.scss";

function Heading({ heading }) {
  return <h1 className={styles.red}>{heading}</h1>;
}

export default function Home() {
  return (
    <div>
      <Heading className="title" heading="Hello World" />
      <h1>Hello</h1>
    </div>
  );
}
