import Card from "./Card";
import { FaCreditCard } from "react-icons/fa6";
import { BiSolidCircleThreeQuarter } from "react-icons/bi";
import { FaLocationArrow } from "react-icons/fa";
import { FaPiggyBank } from "react-icons/fa6";
import { TbHierarchy3 } from "react-icons/tb";
import styled from "styled-components";

function Info() {
  return (
    <>
      <Wrapper>
        <CardWrapper>
          <Card
            Image=<FaCreditCard />
            value="Order a Kuda card on the app with pickup and delivery options."
          />

          <Card
            Image=<BiSolidCircleThreeQuarter />
            value="Enjoy cashless payment options online and offline."
          />
          <Card
            Image=<TbHierarchy3 />
            value="Pay your essential bills and buy gift cards easily."
          />

          <Card
            Image=<FaLocationArrow />
            value="Get 25 free transfers to Nigerian banks every month."
          />

          <Card
            Image=<FaPiggyBank />
            value="Save money automatically any time you spend."
          />
        </CardWrapper>
      </Wrapper>
    </>
  );
}

export default Info;

const Wrapper = styled.div`
  /* background-color: yellow; */
  max-width: 85%;
  padding: 0 40px;
  margin-left: auto;
  margin-right: auto;
  min-height: calc(100vh - 70px);
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 800px) {
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
    background-color: black;
    display: flex;
    align-items: center;
    padding: 0 10px;
  }
  /* display: flex; */
  /* flex-wrap: wrap; */
`;
const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
