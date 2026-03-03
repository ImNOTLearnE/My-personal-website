import "./Background.css";

const test = () => {
  const testArr = [];
  for (let i = 0; i < 200; i++) {
    testArr.push(Math.floor(Math.random() * i) + 10);
  }
  return testArr;
};
console.log(test());
const Background = () => {
  return (
    <div className="Container">
      <div className="Bubbles">
        {test().map((i) => (
          <span style={{ "--i": i } as any} key={i}></span>
        ))}

        {/* <span style={{ "--i": 11 } as any}></span>
        <span style={{ "--i": 12 } as any}></span>
        <span style={{ "--i": 24 } as any}></span>
        <span style={{ "--i": 18 } as any}></span>
        <span style={{ "--i": 12 } as any}></span>
        <span style={{ "--i": 25 } as any}></span>
        <span style={{ "--i": 21 } as any}></span>
        <span style={{ "--i": 24 } as any}></span>
        <span style={{ "--i": 20 } as any}></span>
        <span style={{ "--i": 15 } as any}></span>
        <span style={{ "--i": 11 } as any}></span>
        <span style={{ "--i": 12 } as any}></span>
        <span style={{ "--i": 24 } as any}></span>
        <span style={{ "--i": 18 } as any}></span>
        <span style={{ "--i": 12 } as any}></span>
        <span style={{ "--i": 25 } as any}></span>
        <span style={{ "--i": 21 } as any}></span>
        <span style={{ "--i": 24 } as any}></span>
        <span style={{ "--i": 32 } as any}></span>
        <span style={{ "--i": 11 } as any}></span>
        <span style={{ "--i": 12 } as any}></span>
        <span style={{ "--i": 24 } as any}></span>
        <span style={{ "--i": 18 } as any}></span>
        <span style={{ "--i": 12 } as any}></span>
        <span style={{ "--i": 25 } as any}></span>
        <span style={{ "--i": 21 } as any}></span>
        <span style={{ "--i": 24 } as any}></span>
        <span style={{ "--i": 20 } as any}></span>
        <span style={{ "--i": 15 } as any}></span>
        <span style={{ "--i": 11 } as any}></span>
        <span style={{ "--i": 11 } as any}></span>
        <span style={{ "--i": 12 } as any}></span>
        <span style={{ "--i": 24 } as any}></span>
        <span style={{ "--i": 18 } as any}></span>
        <span style={{ "--i": 12 } as any}></span>
        <span style={{ "--i": 25 } as any}></span>
        <span style={{ "--i": 21 } as any}></span>
        <span style={{ "--i": 24 } as any}></span>
        <span style={{ "--i": 20 } as any}></span>
        <span style={{ "--i": 15 } as any}></span>
        <span style={{ "--i": 11 } as any}></span>
        <span style={{ "--i": 12 } as any}></span>
        <span style={{ "--i": 24 } as any}></span>
        <span style={{ "--i": 18 } as any}></span>
        <span style={{ "--i": 12 } as any}></span>
        <span style={{ "--i": 25 } as any}></span> */}
      </div>
    </div>
  );
};

export default Background;
