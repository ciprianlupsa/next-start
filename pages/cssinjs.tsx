function Heading({ heading }) {
  return (
    <>
      <h1>{heading}</h1>
      <style global jsx>{`
        h1 {
          color: red;
        }
      `}</style>
    </>
  );
}

export default function CssInJs() {
  return (
    <div>
      <Heading className="title" heading="Hello World" />
      <h1>Hello</h1>
    </div>
  );
}
