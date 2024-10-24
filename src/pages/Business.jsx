import { useState } from "react";
import styled from "styled-components";

function Business() {
  const [myNum, setMyNum] = useState(0);

  const decreaseNum = () => {
    setMyNum(myNum - 1);
  };
  const increaseNum = () => {
    setMyNum(myNum + 1);
  };

  return (
    <>
      <div>
        <br />
        <br />
        <p>React Hooks</p>
        <hr />
        <Holder>
          <button onClick={decreaseNum}>Subtract</button>
          <h2>{myNum}</h2>
          <button onClick={increaseNum}>Add</button>
        </Holder>
      </div>
    </>
  );
}
export default Business;

const Holder = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
