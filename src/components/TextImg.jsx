import styled from "styled-components";
import { IoIosArrowForward } from "react-icons/io";

function TextImg({ bigText, value, link, text, Image, icon }) {
  return (
    <>
      <Wrapper>
        <Flex>
          <Text>
            <h2>{bigText}</h2>
            <p>{value}</p>
            <a href={link}>
              {text}
              {icon}
            </a>
          </Text>

          <FlexImg>
            <img src={Image} alt="" />
          </FlexImg>
        </Flex>
      </Wrapper>
    </>
  );
}
export default TextImg;

const Wrapper = styled.div`
  margin-top: 70px;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  padding: 0px 10px;
  min-height: calc(100vh - 70px);
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: yellow; */

  @media (max-width: 800px) {
    margin-top: 70px;
  }
`;

const Text = styled.div`
  /* max-width: 350px; */
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    font-size: 38px;
    max-width: 300px;
    color: #40196d;
    margin-bottom: 5px;
  }

  p {
    font-size: 14px;
    color: #000000;
    /* background-color: yellow; */
    margin-bottom: 5px;
    max-width: 50%;
  }
  a {
    margin-top: 10px;
    color: #40196d;
    font-size: 14px;
  }

  @media (max-width: 800px) {
    display: flex;
    align-items: center;
    justify-content: center;
    h2 {
      font-size: 29px;
      text-align: center;
      max-width: 60%;
    }
    p {
      font-size: 14px;
      max-width: 80%;
      text-align: center;
    }
    a {
      margin-top: 0;
      text-align: center;
    }
  }
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: green; */
  width: 85%;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 800px) {
    /* background-color: aqua; */
    flex-wrap: wrap;
  }
`;

const FlexImg = styled.div`
  /* border: 2px solid rebeccapurple; */

  img {
    width: 420px;
    text-align: center;
  }

  @media (max-width: 800px) {
    width: 90%;
    background-color: blue;
    display: flex;
    justify-content: center;
    img {
      width: 100%;
    }
  }
`;
