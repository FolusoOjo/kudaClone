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
    font-size: 35px;
    max-width: 80%;
    color: #40196d;
    margin-bottom: 5px;
    font-weight: 900;
  }

  p {
    font-size: 15px;
    color: #000000;
    margin-bottom: 5px;
    max-width: 65%;
    margin-top: 10px;
  }
  a {
    margin-top: 10px;
    color: #40196d;
    font-weight: 700;
    font-size: 15px;
  }

  @media (max-width: 800px) {
    display: flex;
    align-items: center;
    justify-content: center;
    h2 {
      font-size: 29px;
      text-align: center;
      max-width: 80%;
      font-weight: 800;
    }
    p {
      font-size: 16px;
      max-width: 100%;
      margin: 10px 0;
      text-align: center;
    }
    a {
      margin-top: 2px;
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
    width: 500px;
    text-align: center;
  }

  @media (max-width: 800px) {
    width: 100%;
    background-color: blue;
    display: flex;
    justify-content: center;
    margin-top: 10px;
    img {
      width: 100%;
    }
  }
`;
