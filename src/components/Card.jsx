import styled from "styled-components";

function Card({ Image, value }) {
  return (
    <>
      <Container>
        <Flex>
          <Icon>{Image}</Icon>

          <p>{value}</p>
        </Flex>
      </Container>
    </>
  );
}
export default Card;

const Container = styled.div`
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 300px;
  max-height: 150px;
  padding:20px;
  /* height: 100px; */
  margin: 20px;

  p {
    /* border: 2px solid yellow; */
    font-size: 17px;
  }

  @media (max-width: 800px) {
    margin: 10px;
    max-width: 90%;
    /* background-color: green; */
    padding: 0;

    p {
      font-size: 14px;
    }
  }
`;

const Icon = styled.div`
  /* border: 2px solid red; */
  margin: 15px 0;
  background: #DFE3FF;
  width: 40px;
  height: 40px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 800px) {
    /* padding: 2px; */
    height: 32px;
    width: 35px;
    border-radius: 25px;
    text-align: center;
    /* background-color: red; */
    margin-right: 10px;
    margin-left: 10px;
    font-size: 15px;
  }
`;

const Flex = styled.div`
  max-width: 100%;
  @media (max-width: 800px) {
    /* background-color: rebeccapurple; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0;
  }
`;
